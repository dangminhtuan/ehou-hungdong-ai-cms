import { gql } from '@apollo/client';
import { useFaustQuery } from '@faustwp/core';
import Link from 'next/link';
import {
  Container,
  Footer,
  Header,
  Main,
  NavigationMenu,
  SEO,
} from '../components';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';

const GET_LAYOUT_QUERY = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetLayout(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
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

const GET_POST_QUERY = gql`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      excerpt
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export default function Component(props) {
  if (props.loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#09090b', color: '#ff6b00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Đang tải bài viết từ Headless Core...
      </div>
    );
  }

  const { post } = useFaustQuery(GET_POST_QUERY) ?? {};
  const { generalSettings, headerMenuItems, footerMenuItems } =
    useFaustQuery(GET_LAYOUT_QUERY) ?? {};

  const { title: siteTitle, description: siteDescription } = generalSettings ?? {};
  const primaryMenu = headerMenuItems?.nodes ?? [];
  const footerMenu = footerMenuItems?.nodes ?? [];
  const { title, content, featuredImage, date, author } = post ?? {};

  const formattedDate = date ? new Date(date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <>
      <SEO
        title={`${title || 'Chi tiết bài viết'} - ${siteTitle}`}
        description={siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <Container>
          <article style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 0 80px' }}>
            
            {/* Breadcrumb navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#71717a', marginBottom: '24px' }}>
              <Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s' }}>
                Trang chủ
              </Link>
              <span>/</span>
              <span style={{ color: '#ff6b00' }}>Dự Án AI Tự Động</span>
              <span>/</span>
              <span style={{ color: '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
                {title}
              </span>
            </div>

            {/* Header badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{
                background: 'rgba(255,107,0,0.12)',
                color: '#ff6b00',
                border: '1px solid rgba(255,107,0,0.3)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                🤖 AI Content Engine Verified
              </span>
              <span style={{
                background: 'rgba(34,197,94,0.12)',
                color: '#22c55e',
                border: '1px solid rgba(34,197,94,0.3)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                ⚡ 100/100 Lighthouse
              </span>
            </div>

            {/* Post Title */}
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              lineHeight: '1.25',
              background: 'linear-gradient(90deg, #ffffff 0%, #ff8c38 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}>
              {title}
            </h1>

            {/* Meta info bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              marginBottom: '36px',
              color: '#a1a1aa',
              fontSize: '0.875rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ff6b00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '0.85rem' }}>
                  HD
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: '600' }}>{author?.node?.name || 'Hừng Đông Media Team'}</div>
                  <div style={{ fontSize: '0.75rem', color: '#71717a' }}>Chuyên gia Giải pháp Số & AI</div>
                </div>
              </div>
              <div>{formattedDate}</div>
            </div>

            {/* Featured Image if exists */}
            {featuredImage?.node?.sourceUrl && (
              <div style={{ marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src={featuredImage.node.sourceUrl}
                  alt={featuredImage.node.altText || title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            )}

            {/* Post Content */}
            <div
              className="single-post-content"
              style={{
                color: '#e4e4e7',
                fontSize: '1.125rem',
                lineHeight: '1.85',
                letterSpacing: '0.01em'
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Bottom Call to Action Box */}
            <div style={{
              marginTop: '60px',
              padding: '40px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255,107,0,0.1) 0%, rgba(59,130,246,0.05) 100%)',
              border: '1px solid rgba(255,107,0,0.3)',
              textAlign: 'center',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
            }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>🚀</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
                Tái Thiết Website Doanh Nghiệp Bạn Lên Tốc Độ 100/100?
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 24px', lineHeight: '1.6' }}>
                Hệ thống Headless Next.js kết hợp Cỗ máy AI Content Engine của Hừng Đông Media giúp bạn xuất bản 30 bài viết chuẩn SEO/tháng mà không cần nhân viên in-house.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/"
                  style={{
                    background: '#ff6b00',
                    color: '#fff',
                    padding: '12px 28px',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 0 20px rgba(255,107,0,0.4)'
                  }}
                >
                  ← Về Trang Chủ Khám Phá Thêm
                </Link>
              </div>
            </div>

          </article>
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.queries = [
  {
    query: GET_LAYOUT_QUERY,
    variables: (seedNode, ctx) => ({
      headerLocation: MENUS.PRIMARY_LOCATION,
      footerLocation: MENUS.FOOTER_LOCATION,
    }),
  },
  {
    query: GET_POST_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
];
