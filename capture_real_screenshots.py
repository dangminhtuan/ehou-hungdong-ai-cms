# -*- coding: utf-8 -*-
import sys
import os
import time

sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright

OUTPUT_DIR = r"D:\__G AG Projects\Thuc Tap Chuyen Nganh EHOU\report_figures"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def capture_all():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Desktop Context (1440 x 900)
        context = browser.new_context(viewport={'width': 1440, 'height': 900}, device_scale_factor=2)
        page = context.new_page()
        
        # --- Capture Landing Page Sections (http://localhost:5173) ---
        print("📸 Capturing Landing Page (localhost:5173)...")
        try:
            page.goto("http://localhost:5173", wait_until="networkidle", timeout=15000)
            time.sleep(1)
            
            # Hero Section
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_1_real_landing_hero.png"))
            print(" -> Captured Hero Section")
            
            # Formula Section
            formula_el = page.locator("#formula")
            if formula_el.count() > 0:
                formula_el.scroll_into_view_if_needed()
                time.sleep(0.5)
                formula_el.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_2_real_landing_formula.png"))
                print(" -> Captured GAS Formula Section")
                
            # AI-Ready Section
            ai_el = page.locator("#ai-ready")
            if ai_el.count() > 0:
                ai_el.scroll_into_view_if_needed()
                time.sleep(0.5)
                ai_el.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_3_real_landing_geo.png"))
                print(" -> Captured GEO AI-Ready Section")
                
            # ROI Calculator Section
            roi_el = page.locator("#roi")
            if roi_el.count() > 0:
                roi_el.scroll_into_view_if_needed()
                time.sleep(0.5)
                roi_el.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_4_real_landing_roi.png"))
                print(" -> Captured ROI Calculator Section")
                
            # Pricing Section
            pricing_el = page.locator("#pricing")
            if pricing_el.count() > 0:
                pricing_el.scroll_into_view_if_needed()
                time.sleep(0.5)
                pricing_el.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_5_real_landing_pricing.png"))
                print(" -> Captured Pricing Section")
                
            # Full Page Capture
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_6_real_landing_fullpage.png"), full_page=True)
            print(" -> Captured Full Landing Page")
            
            # Browser llms.txt view
            page.goto("http://localhost:5173/llms.txt", wait_until="networkidle", timeout=10000)
            time.sleep(0.5)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_7_real_browser_llms.png"))
            print(" -> Captured Browser llms.txt")
            
        except Exception as e:
            print("Error capturing landing page:", e)
            
        # --- Capture Next.js Headless Core (http://localhost:3000) ---
        print("📸 Capturing Next.js Core (localhost:3000)...")
        try:
            page.goto("http://localhost:3000", wait_until="networkidle", timeout=15000)
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_3_real_nextjs_home.png"))
            print(" -> Captured Next.js Homepage")
            
            # Find and click first post or navigate to single post
            first_link = page.locator("a[href*='/']").filter(has_text="KHÁM PHÁ NGAY").first
            if first_link.count() > 0:
                first_link.click()
                page.wait_for_load_state("networkidle", timeout=10000)
                time.sleep(1)
                page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_4_real_nextjs_single.png"))
                print(" -> Captured Next.js Single Post Page")
            else:
                # Direct screenshot of page
                page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_4_real_nextjs_single.png"))
        except Exception as e:
            print("Error capturing Next.js core:", e)
            
        # --- 2. Mobile Responsive Context (390 x 844 - iPhone 14) ---
        print("📸 Capturing Mobile Viewport...")
        try:
            mobile_context = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True)
            mobile_page = mobile_context.new_page()
            mobile_page.goto("http://localhost:5173", wait_until="networkidle", timeout=15000)
            time.sleep(1)
            mobile_page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_5_real_mobile_view.png"))
            print(" -> Captured Mobile Viewport")
            mobile_context.close()
        except Exception as e:
            print("Error capturing mobile:", e)
            
        context.close()
        browser.close()
        print("✅ ALL REAL SCREENSHOTS CAPTURED SUCCESSFULLY!")

if __name__ == "__main__":
    capture_all()
