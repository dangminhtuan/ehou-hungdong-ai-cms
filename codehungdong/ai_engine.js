const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

// Cấu hình kết nối tới WordPress Local của bạn
const WP_URL = 'http://localhost:10011/wp-json/wp/v2';
// LƯU Ý: Bạn cần tạo Application Password trong Admin WP > Users > Profile
const WP_USER = process.env.WP_USER || 'admin';
const WP_PASS = process.env.WP_PASS || 'your_application_password_here';

// Chuỗi mã hóa Base64 cho Authentication
const authHeader = `Basic ${Buffer.from(`${WP_USER}:${WP_PASS}`).toString('base64')}`;

// Dữ liệu MẪU giả lập kết quả AI sau khi đọc tài liệu PDF của Hừng Đông
// Trong thực tế, đoạn này sẽ do Gemini/GPT sinh ra từ hàm parse PDF
const aiGeneratedContent = [
    {
        title: "Dịch vụ Booking Báo chí Toàn diện",
        content: `
            <!-- Block giao diện chuẩn Premium cho Headless -->
            <div class="service-premium-block">
                <h2>Giải pháp Truyền thông Phủ sóng Toàn quốc</h2>
                <p>Hừng Đông Media cung cấp dịch vụ booking báo chí chuyên nghiệp trên hơn 200+ đầu báo điện tử lớn nhỏ. Giúp doanh nghiệp bạn xuất hiện trên trang chủ VnExpress, Dân Trí, CafeF chỉ trong 24h.</p>
                <ul>
                    <li>Tối ưu chi phí đến 30% so với tự liên hệ.</li>
                    <li>Cam kết KPI rõ ràng, không phát sinh phụ phí.</li>
                    <li>Hỗ trợ viết bài PR chuẩn SEO miễn phí.</li>
                </ul>
            </div>
        `,
        slug: "dich-vu-booking-bao-chi",
        status: "publish"
    },
    {
        title: "Quản lý Dự án Thuê ngoài (Outsourcing PM)",
        content: `
            <div class="service-premium-block">
                <h2>Tối ưu Nguồn lực - Tối đa Hiệu suất</h2>
                <p>Thiếu nhân sự quản lý? Các chiến dịch bị chậm tiến độ? Giải pháp PM Thuê ngoài của Hừng Đông Media chính là câu trả lời. Chúng tôi cung cấp các Project Manager cấp cao (Senior) trực tiếp điều phối dự án của bạn.</p>
                <div class="highlight-box">
                    <strong>Case Study:</strong> Quản lý thành công chiến dịch ra mắt sản phẩm mới cho tập đoàn X, tăng 150% hiệu suất làm việc của team Marketing nội bộ.
                </div>
            </div>
        `,
        slug: "quan-ly-du-an-thue-ngoai",
        status: "publish"
    }
];

/**
 * Hàm tự động đẩy bài viết vào WordPress
 */
async function pushToWordPress(article) {
    try {
        console.log(`🚀 Đang bơm bài viết: "${article.title}" vào WordPress...`);
        
        const response = await axios.post(`${WP_URL}/posts`, {
            title: article.title,
            content: article.content,
            slug: article.slug,
            status: article.status
        }, {
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            }
        });

        console.log(`✅ Thành công! Bài viết đã lên sóng tại ID: ${response.data.id}`);
        console.log(`🔗 Link: ${response.data.link}`);
    } catch (error) {
        console.error(`❌ Thất bại khi đăng bài "${article.title}":`, error.response ? error.response.data.message : error.message);
    }
}

/**
 * Luồng chạy chính (Pipeline)
 */
async function runEngine() {
    console.log("=========================================");
    console.log("🔥 KHỞI ĐỘNG HƯNG ĐÔNG AI CONTENT ENGINE 🔥");
    console.log("=========================================\n");
    
    // Giả lập độ trễ khi AI đọc tài liệu PDF (RAG Pipeline)
    console.log("⏳ Đang phân tích hồ sơ năng lực (PDF)...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("🧠 AI đã bóc tách thành công cấu trúc JSON chuẩn SEO!\n");

    // Vòng lặp bắn từng bài vào WP
    for (const article of aiGeneratedContent) {
        await pushToWordPress(article);
        // Nghỉ 1 giây giữa các bài để tránh nghẽn server
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log("\n🎉 HOÀN TẤT! Toàn bộ nội dung đã được bơm vào Headless CMS.");
}

// Chạy cỗ máy
runEngine();
