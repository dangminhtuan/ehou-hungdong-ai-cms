# -*- coding: utf-8 -*-
import os
import sys
sys.stdout.reconfigure(encoding='utf-8')

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = r"D:\__G AG Projects\Thuc Tap Chuyen Nganh EHOU\report_figures"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def draw_box(ax, x, y, w, h, text, subtitle="", color='#ff6b00', text_color='white'):
    rect = patches.FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.04", linewidth=1.5, edgecolor=color, facecolor='#1e293b')
    ax.add_patch(rect)
    ax.text(x + w/2, y + h*0.6, text, color=text_color, weight='bold', fontsize=9.5, ha='center', va='center')
    if subtitle:
        ax.text(x + w/2, y + h*0.28, subtitle, color='#94a3b8', fontsize=8, ha='center', va='center')

# --- 1. Fig 1.2: RACI Matrix Diagram ---
fig, ax = plt.subplots(figsize=(9, 4.8), dpi=200)
fig.patch.set_facecolor('#0f172a')
ax.set_facecolor('#0f172a')

draw_box(ax, 0.5, 3.2, 2.7, 1.2, "ĐẶNG MINH TUẤN\n(Nhóm Trưởng)", "Accountable (A) / Lead Dev\nKiến trúc & AI Engine", '#ff6b00')
draw_box(ax, 3.65, 3.2, 2.7, 1.2, "TRẦN ANH TUẤN\n(Thành Viên)", "Responsible (R) / Backend\nWordPress Core & GraphQL", '#38bdf8')
draw_box(ax, 6.8, 3.2, 2.7, 1.2, "NGUYỄN MINH HIẾU\n(Thành Viên)", "Responsible (R) / Frontend\nNext.js 14 & UI/UX Design", '#22c55e')

draw_box(ax, 0.5, 0.6, 9.0, 1.8, "MA TRẬN TRÁCH NHIỆM CHUNG (RACI MATRIX)", 
         "• Khảo sát & Đặc tả: Tuấn ĐM (A), Tuấn TA (R), Hiếu NM (R)\n• Thiết kế & Lập trình Core: Tuấn ĐM (A/R), Tuấn TA (R), Hiếu NM (R)\n• Kiểm thử & Tối ưu Lighthouse 100/100: Hiếu NM (R), Tuấn ĐM (A), Tuấn TA (C)\n• Đóng gói Báo cáo & Hồ sơ thực tập: Cả 3 thành viên đồng thuận (R/A)", '#a855f7')

ax.plot([1.85, 5.0], [3.2, 2.4], color='#64748b', lw=1.5)
ax.plot([5.0, 5.0], [3.2, 2.4], color='#64748b', lw=1.5)
ax.plot([8.15, 5.0], [3.2, 2.4], color='#64748b', lw=1.5)

ax.set_xlim(0, 10)
ax.set_ylim(0, 5.0)
ax.axis('off')
plt.title("MA TRẬN PHÂN CÔNG TRÁCH NHIỆM RACI 3 THÀNH VIÊN NHÓM", color='white', weight='bold', fontsize=12, pad=15)
plt.tight_layout()
plt.savefig(os.path.join(OUTPUT_DIR, "fig_1_2_raci_matrix.png"))
plt.close()

# --- 2. Fig 2.3: Activity Diagram (Luồng hoạt động bóc tách bài viết) ---
fig, ax = plt.subplots(figsize=(10, 5.5), dpi=200)
fig.patch.set_facecolor('#09090b')
ax.set_facecolor('#09090b')

steps = [
    ("1. Nạp Tài Liệu Thô\n(PDF/DOCX của khách)", 0.6, 2.2, '#38bdf8'),
    ("2. Parser RAG\n(Trích xuất thực thể)", 2.8, 2.2, '#ff6b00'),
    ("3. LLM Content Generation\n(Viết bài chuẩn SEO)", 5.0, 2.2, '#a855f7'),
    ("4. Bắn REST API\n(Application Password)", 7.2, 2.2, '#f59e0b'),
    ("5. WordPress Lưu Trữ\n(Bảng wp_posts)", 7.2, 0.4, '#3b82f6'),
    ("6. Next.js GraphQL Query\n(Render giao diện)", 5.0, 0.4, '#22c55e'),
    ("7. Xuất Bản Hoàn Tất\n(Lighthouse 100/100)", 2.8, 0.4, '#10b981'),
]

for title, x, y, col in steps:
    draw_box(ax, x, y, 2.0, 1.2, title, "", col)

# Arrows
ax.annotate("", xy=(2.8, 2.8), xytext=(2.6, 2.8), arrowprops=dict(arrowstyle="->", color='#ff6b00', lw=2))
ax.annotate("", xy=(5.0, 2.8), xytext=(4.8, 2.8), arrowprops=dict(arrowstyle="->", color='#a855f7', lw=2))
ax.annotate("", xy=(7.2, 2.8), xytext=(7.0, 2.8), arrowprops=dict(arrowstyle="->", color='#f59e0b', lw=2))
ax.annotate("", xy=(8.2, 1.6), xytext=(8.2, 2.2), arrowprops=dict(arrowstyle="->", color='#3b82f6', lw=2))
ax.annotate("", xy=(7.0, 1.0), xytext=(7.2, 1.0), arrowprops=dict(arrowstyle="->", color='#22c55e', lw=2))
ax.annotate("", xy=(4.8, 1.0), xytext=(5.0, 1.0), arrowprops=dict(arrowstyle="->", color='#10b981', lw=2))

ax.set_xlim(0, 10)
ax.set_ylim(0, 4.0)
ax.axis('off')
plt.title("SƠ ĐỒ HOẠT ĐỘNG (ACTIVITY DIAGRAM) QUY TRÌNH TỰ ĐỘNG HÓA NỘI DUNG", color='white', weight='bold', fontsize=12, pad=15)
plt.tight_layout()
plt.savefig(os.path.join(OUTPUT_DIR, "fig_2_3_activity_diagram.png"))
plt.close()

# --- 3. Fig 3.3: GraphQL Sequence Diagram ---
fig, ax = plt.subplots(figsize=(10, 5.2), dpi=200)
fig.patch.set_facecolor('#0f172a')
ax.set_facecolor('#0f172a')

# Lifelines
cols_x = [1.5, 5.0, 8.5]
labels = ["Trình duyệt Client", "Next.js (Apollo Client)", "WordPress Core (WPGraphQL)"]

for x, lbl in zip(cols_x, labels):
    draw_box(ax, x - 1.2, 3.8, 2.4, 0.8, lbl, "", '#38bdf8')
    ax.plot([x, x], [0.6, 3.8], color='#475569', lw=1.5, ls='--')

# Messages
def draw_seq_arrow(ax, x1, x2, y, text, color='#22c55e', is_resp=False):
    ls = '--' if is_resp else '-'
    ax.annotate("", xy=(x2, y), xytext=(x1, y), arrowprops=dict(arrowstyle="->", color=color, lw=1.5, ls=ls))
    ax.text((x1 + x2)/2, y + 0.12, text, color='white', fontsize=8.5, ha='center', weight='bold')

draw_seq_arrow(ax, 1.5, 5.0, 3.2, "1. Yêu cầu tải trang (GET /)", '#38bdf8')
draw_seq_arrow(ax, 5.0, 8.5, 2.6, "2. Gửi GraphQL Query: { posts(first:10) { nodes } }", '#ff6b00')
draw_seq_arrow(ax, 8.5, 5.0, 2.0, "3. Trả về JSON Data (id, title, content...)", '#22c55e', is_resp=True)
draw_seq_arrow(ax, 5.0, 1.5, 1.4, "4. Render HTML tĩnh SSG + ISR (<0.3s)", '#a855f7', is_resp=True)

ax.set_xlim(0, 10)
ax.set_ylim(0, 5.0)
ax.axis('off')
plt.title("SƠ ĐỒ TUẦN TỰ (SEQUENCE DIAGRAM) TRUY VẤN GRAPHQL QUA APOLLO CLIENT", color='white', weight='bold', fontsize=12, pad=15)
plt.tight_layout()
plt.savefig(os.path.join(OUTPUT_DIR, "fig_3_3_graphql_sequence.png"))
plt.close()

# --- 4. Render UI Mockup Images using PIL ---
def create_ui_mockup(filename, title, subtitle, badges, cards_info):
    width, height = 1100, 650
    img = Image.new('RGBA', (width, height), color=(9, 9, 11, 255))
    draw = ImageDraw.Draw(img)
    
    # Outer browser window frame
    draw.rounded_rectangle([(10, 10), (width - 10, height - 10)], radius=16, fill=(15, 23, 42, 255), outline=(39, 39, 42, 255), width=2)
    draw.rounded_rectangle([(12, 12), (width - 12, 50)], radius=12, fill=(24, 24, 27, 255))
    draw.rectangle([(12, 35), (width - 12, 50)], fill=(24, 24, 27, 255))
    
    # Window controls
    draw.ellipse([(25, 23), (37, 35)], fill=(239, 68, 68, 255))
    draw.ellipse([(45, 23), (57, 35)], fill=(234, 179, 8, 255))
    draw.ellipse([(65, 23), (77, 35)], fill=(34, 197, 94, 255))
    
    # URL bar
    draw.rounded_rectangle([(150, 20), (width - 150, 42)], radius=8, fill=(9, 9, 11, 255), outline=(63, 63, 70, 255))
    try:
        f_url = ImageFont.truetype("arial.ttf", 13)
        f_h1 = ImageFont.truetype("arial.ttf", 26)
        f_sub = ImageFont.truetype("arial.ttf", 14)
        f_card_t = ImageFont.truetype("arial.ttf", 15)
        f_card_d = ImageFont.truetype("arial.ttf", 12)
    except:
        f_url = f_h1 = f_sub = f_card_t = f_card_d = ImageFont.load_default()
        
    draw.text((165, 24), "https://hungdong.local:3000 (Headless Next.js Production Core)", fill=(161, 161, 170, 255), font=f_url)
    
    # Page Hero Header
    draw.text((60, 80), title, fill=(255, 255, 255, 255), font=f_h1)
    draw.text((60, 120), subtitle, fill=(161, 161, 170, 255), font=f_sub)
    
    # Badges
    bx = 60
    for b_text, b_color in badges:
        draw.rounded_rectangle([(bx, 155), (bx + len(b_text)*9 + 20, 180)], radius=12, fill=(30, 41, 59, 255), outline=b_color, width=1)
        draw.text((bx + 10, 160), b_text, fill=b_color, font=f_card_d)
        bx += len(b_text)*9 + 35
        
    # Cards Grid (3 cards)
    cx = 60
    card_w = 300
    for c_title, c_desc, c_tag in cards_info:
        draw.rounded_rectangle([(cx, 210), (cx + card_w, 580)], radius=16, fill=(15, 23, 42, 255), outline=(255, 107, 0, 180), width=1)
        # Card header image placeholder
        draw.rounded_rectangle([(cx + 10, 220), (cx + card_w - 10, 360)], radius=10, fill=(30, 41, 59, 255))
        draw.text((cx + 25, 280), "🚀 AI GENERATED POST", fill=(255, 107, 0, 255), font=f_card_t)
        
        # Tag
        draw.rounded_rectangle([(cx + 20, 380), (cx + 140, 405)], radius=6, fill=(255, 107, 0, 40), outline=(255, 107, 0, 200))
        draw.text((cx + 30, 385), c_tag, fill=(255, 140, 56, 255), font=f_card_d)
        
        # Title & Desc
        draw.text((cx + 20, 420), c_title[:28] + "\n" + c_title[28:56], fill=(255, 255, 255, 255), font=f_card_t)
        draw.text((cx + 20, 480), c_desc[:35] + "\n" + c_desc[35:70] + "\n" + c_desc[70:105], fill=(148, 163, 184, 255), font=f_card_d)
        
        # CTA button
        draw.rounded_rectangle([(cx + 20, 530), (cx + card_w - 20, 565)], radius=8, fill=(255, 107, 0, 255))
        draw.text((cx + 80, 540), "KHÁM PHÁ NGAY →", fill=(255, 255, 255, 255), font=f_card_d)
        cx += card_w + 35
        
    img.save(os.path.join(OUTPUT_DIR, filename), "PNG")
    print(f"Generated UI Mockup: {filename}")

# Create UI Homepage
create_ui_mockup("fig_4_3_ui_homepage.png",
                 "HỪNG ĐÔNG MEDIA - HỆ SINH THÁI AI & TRUYỀN THÔNG B2B",
                 "Kiến trúc Headless Next.js 14 Dark Mode tải siêu tốc <0.3s với điểm số Lighthouse 100/100",
                 [("⚡ 100/100 Lighthouse", (34, 197, 94, 255)), ("🤖 30 Bài SEO/Tháng", (255, 107, 0, 255)), ("🔒 Bảo Mật Enterprise", (56, 189, 248, 255))],
                 [("Dịch Vụ Booking Báo Chí Toàn Diện", "Mạng lưới kết nối hơn 200 đầu báo uy tín hàng đầu Việt Nam giúp lan tỏa thương hiệu nhanh chóng.", "PR & BÁO CHÍ"),
                  ("Quản Lý Dự Án Thuê Ngoài (Outsourcing PM)", "Đội ngũ chuyên gia quản trị dự án số chuyên nghiệp, cam kết tiến độ và tối ưu chi phí vận hành.", "OUTSOURCING PM"),
                  ("Tự Động Hóa Nội Dung Bằng AI Engine", "Cỗ máy bóc tách tài liệu hồ sơ năng lực thành 30 bài viết chuẩn SEO mỗi tháng tự động 100%.", "AI CONTENT")])

# Create UI Single Post
create_ui_mockup("fig_4_4_ui_single_post.png",
                 "DỊCH VỤ BOOKING BÁO CHÍ TOÀN DIỆN - HỪNG ĐÔNG MEDIA",
                 "Chi tiết bài viết chuẩn SEO được bóc tách tự động và hiển thị với Typography Dark Mode cao cấp",
                 [("Trang Chủ / Dự Án / Bài Viết", (161, 161, 170, 255)), ("AI Verified 100/100", (34, 197, 94, 255))],
                 [("1. Giải Pháp Lan Tỏa Báo Chí", "Tiếp cận hơn 50 triệu độc giả qua các trang tin lớn như VnExpress, Dân Trí, CafeF, Tuổi Trẻ...", "CHIẾN LƯỢC"),
                  ("2. Báo Giá & Quy Trình Booking", "Tối ưu hóa ngân sách truyền thông với chiết khấu độc quyền từ các tòa soạn hàng đầu.", "QUY TRÌNH"),
                  ("3. Cam Kết Đo Lường KPI", "Báo cáo số lượt đọc, thứ hạng bài viết trên Google Search và hỗ trợ chỉnh sửa nội dung.", "CAM KẾT")])

print("✅ ALL EXPANDED FIGURES GENERATED SUCCESSFULLY!")
