import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import Link from 'next/link';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  SEO,
} from '../components';

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings ?? {};
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];
  const posts = data?.posts?.nodes ?? [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <Container>
          <div style={{ padding: '60px 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', background: 'linear-gradient(90deg, #ff6b00, #ff9900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
              Dự Án AI Tự Động
            </h1>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 50px' }}>
              Danh sách các bài viết được bóc tách và tạo tự động bằng AI từ lõi hệ thống Hừng Đông Media. Tốc độ tải trang 100/100 Lighthouse.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              {posts.map((post) => (
                <div key={post.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '30px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'var(--wpe--color--accent)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(255,107,0,0.15)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#fafafa', marginBottom: '15px', lineHeight: '1.4' }}>
                    <Link href={post.uri} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {post.title}
                    </Link>
                  </h3>
                  <div style={{ color: '#a1a1aa', lineHeight: '1.6', fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <div style={{ marginTop: '25px', fontSize: '0.85rem', color: 'var(--wpe--color--accent)', fontWeight: 'bold', letterSpacing: '1px' }}>
                    KHÁM PHÁ NGAY →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    posts(first: 10) {
      nodes {
        id
        title
        uri
        excerpt
        date
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
