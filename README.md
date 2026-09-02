# BÁO CÁO CHUYÊN ĐỀ THỰC TẬP CHUYÊN NGÀNH (IT43.027 - IT43.028)
## ĐỀ TÀI: XÂY DỰNG LẠI WEBSITE THEO HƯỚNG TỰ ĐỘNG HÓA NỘI DUNG BẰNG AI VÀ TỐI ƯU MỌI MẶT
### (MÔ HÌNH HEADLESS WORDPRESS KẾT HỢP NEXT.JS 14 VÀ AI CONTENT ENGINE)

---

## 🎓 THÔNG TIN ĐỀ TÀI & NHÓM THỰC HIỆN
* **Trường đào tạo:** Trường Đại học Mở Hà Nội (EHOU) — Viện Đào tạo & Phát triển Học tập Suốt đời.
* **Khoa:** Công nghệ Thông tin.
* **Học phần:** Thực tập chuyên ngành (IT43.027 - IT43.028).
* **Đơn vị tiếp nhận thực tập:** Công ty Cổ phần Truyền thông Hừng Đông (Hừng Đông Media Solutions).
* **Giảng viên hướng dẫn:** TS. Vũ Xuân Hạnh | **Quản lý lớp môn học:** ThS. Nguyễn Hữu Toàn.
* **Nhóm sinh viên thực hiện:**
  1. **Đặng Minh Tuấn** — Lớp: CHTM518 *(Nhóm trưởng)*
  2. **Trần Anh Tuấn** — Lớp: CHCT419 *(Thành viên)*
  3. **Nguyễn Minh Hiếu** — Lớp: CLCA520 *(Thành viên)*

---

## 🏛️ TỔNG QUAN KIẾN TRÚC HỆ THỐNG (DECOUPLED 3 TẦNG)

Dự án chuyển đổi toàn diện mô hình website Monolithic truyền thống chậm chạp sang kiến trúc phân tách 3 tầng hiện đại:

```
[ Bóc tách PDF/DOCX ]
         │
         ▼
[ AI Content Engine ] ──(REST API Auth)──► [ WordPress Headless Core ] (Port 10011)
 (Node.js Automation)                                 │
                                                  (WPGraphQL)
                                                      │
                                                      ▼
[ Agency Landing Page ]                      [ Next.js 14 Frontend ] (Port 3000)
(React + Vite - Port 5180)                   (Faust.js + Dark Mode SSR/SSG)
```

1. **Tầng Dữ Liệu (WordPress Headless Core - Port 10011):** Chạy ngầm trong mạng nội bộ, đóng vai trò là kho lưu trữ bài viết an toàn, bảo mật tuyệt đối.
2. **Tầng Xử Lý Tự Động (AI Content Engine):** Cỗ máy Node.js bóc tách dữ liệu tài liệu doanh nghiệp và tự động xuất bản 30 bài viết chuẩn SEO/tháng.
3. **Tầng Hiển Thị (Next.js 14 Frontend - Port 3000):** Tối ưu hóa chỉ số Google Lighthouse đạt **100/100 điểm tuyệt đối**, thời gian tải trang < 0.3s.
4. **Phân hệ Thương Mại (Agency Landing Page - Port 5180):** Website giới thiệu giải pháp, Định luật tăng trưởng GAS, công cụ tính ROI và tệp chuẩn hóa GEO `llms.txt`.

---

## 📂 BỐ CỤC CẤU TRÚC MONOREPO

```text
ehou-hungdong-ai-cms/
├── 📁 frontend-hungdong/         # Mã nguồn Frontend Next.js 14 + Faust.js + Apollo GraphQL
├── 📁 agency-landing-page/       # Mã nguồn Website Landing Page Thương mại (React + Vite)
├── 📁 codehungdong/              # Cỗ máy tự động hóa nội dung (ai_engine.js, auto_cron.js)
├── 📁 report_figures/            # 26 sơ đồ kiến trúc, UML và ảnh chụp giao diện thực tế
├── 📄 Bao_Cao_Thuc_Tap.docx      # Toàn văn Báo cáo chuyên đề tốt nghiệp hoàn chỉnh
├── 📄 .gitignore                 # Cấu hình loại trừ bảo mật và thư viện nặng
└── 📄 README.md                  # Tài liệu giới thiệu đồ án
```

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT & KHỞI CHẠY (QUICK START)

### 1. Yêu cầu môi trường
* Node.js >= 18.x
* WordPress Local (Local by Flywheel) với plugin **WPGraphQL** kích hoạt tại cổng `http://localhost:10011`

### 2. Khởi chạy Cổng thông tin Next.js (Port 3000)
```bash
cd frontend-hungdong
npm install
npm run dev
# Truy cập: http://localhost:3000
```

### 3. Khởi chạy Agency Landing Page (Port 5180)
```bash
cd agency-landing-page
npm install
npm run dev
# Truy cập: http://localhost:5180
# Tra cứu chuẩn AI: http://localhost:5180/llms.txt
```

### 4. Kích hoạt Cỗ máy AI Content Engine
```bash
cd codehungdong
npm install
node ai_engine.js
```

---
*Bản quyền nghiên cứu & phát triển © 2026 Nhóm sinh viên EHOU & Hừng Đông Media.*
