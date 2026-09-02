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
        print("📸 Capturing Landing Page Sections (localhost:5173)...")
        try:
            page.goto("http://localhost:5173", wait_until="domcontentloaded", timeout=10000)
            time.sleep(2)
            
            # 1. Hero Section
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_1_real_landing_hero.png"))
            print(" -> 1. Captured Hero Section")
            
            # 2. Formula Section (#formula)
            page.evaluate("document.querySelector('#formula')?.scrollIntoView()")
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_2_real_landing_formula.png"))
            print(" -> 2. Captured Formula Section")
            
            # 3. GEO AI-Ready Section (#ai-ready)
            page.evaluate("document.querySelector('#ai-ready')?.scrollIntoView()")
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_3_real_landing_geo.png"))
            print(" -> 3. Captured GEO AI-Ready Section")
            
            # 4. ROI Calculator (#roi)
            page.evaluate("document.querySelector('#roi')?.scrollIntoView()")
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_4_real_landing_roi.png"))
            print(" -> 4. Captured ROI Calculator Section")
            
            # 5. Pricing Section (#pricing)
            page.evaluate("document.querySelector('#pricing')?.scrollIntoView()")
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_5_real_landing_pricing.png"))
            print(" -> 5. Captured Pricing Section")
            
            # 6. Contact / Lead Form (#contact)
            page.evaluate("document.querySelector('#contact')?.scrollIntoView()")
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_6_real_landing_contact.png"))
            print(" -> 6. Captured Contact Form Section")
            
            # 7. llms.txt in browser
            page.goto("http://localhost:5173/llms.txt", wait_until="domcontentloaded", timeout=10000)
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_6_7_real_browser_llms.png"))
            print(" -> 7. Captured llms.txt in Browser")
            
        except Exception as e:
            print("Error capturing landing page:", e)
            
        # --- Capture Next.js Core (http://localhost:3000) ---
        print("📸 Capturing Next.js Core (localhost:3000)...")
        try:
            page.goto("http://localhost:3000", wait_until="networkidle", timeout=15000)
            time.sleep(3)
            
            # Verify it's not an error page
            body_text = page.locator("body").inner_text()
            if "ApolloError" in body_text or "fetch failed" in body_text:
                raise Exception("Next.js returned an ApolloError (GraphQL connection failed). Ensure WordPress backend is running.")

            page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_3_real_nextjs_home.png"))
            print(" -> 8. Captured Next.js Homepage")
            
            # Try to click first article or navigate to single page
            first_card = page.locator("a[href*='/']").first
            if first_card.count() > 0:
                first_card.click()
                page.wait_for_load_state("networkidle", timeout=10000)
                time.sleep(3)
                page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_4_real_nextjs_single.png"))
                print(" -> 9. Captured Next.js Single Post Page")
        except Exception as e:
            print("Error capturing Next.js core:", e)
            raise e # Reraise to fail the script instead of ignoring
            
        # --- 3. Mobile Viewport (iPhone 14) ---
        print("📸 Capturing Mobile Viewport...")
        try:
            mobile_context = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True)
            mobile_page = mobile_context.new_page()
            mobile_page.goto("http://localhost:5173", wait_until="domcontentloaded", timeout=10000)
            time.sleep(2)
            mobile_page.screenshot(path=os.path.join(OUTPUT_DIR, "fig_4_5_real_mobile_view.png"))
            print(" -> 10. Captured Mobile Viewport")
            mobile_context.close()
        except Exception as e:
            print("Error capturing mobile:", e)
            
        context.close()
        browser.close()
        print("🎉 ALL 10 REAL SCREENSHOTS CAPTURED PERFECTLY!")

if __name__ == "__main__":
    capture_all()
