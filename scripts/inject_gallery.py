import os

html_path = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

gallery_html = """
<section class="section" style="background-color: var(--hp-bg-light);">
    <div class="container">
        <div class="section-header" style="text-align: center;">
            <h2 class="section-title">Experience Our Clinic</h2>
            <p class="section-desc">A glimpse inside the daily care and environment at HealthPlus Medical.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
            <!-- Image 1 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="assets/images/clinic-nano/mobile/DSC_0845_NANO_mob.webp">
                    <img src="assets/images/clinic-nano/desktop/DSC_0845_NANO_desk.webp" alt="Patient arrival at HealthPlus Medical" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
            <!-- Image 2 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="assets/images/clinic-nano/mobile/DSC_0837_NANO_mob.webp">
                    <img src="assets/images/clinic-nano/desktop/DSC_0837_NANO_desk.webp" alt="HealthPlus Medical reception details" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
            <!-- Image 3 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="assets/images/clinic-nano/mobile/DSC_0850_NANO_mob.webp">
                    <img src="assets/images/clinic-nano/desktop/DSC_0850_NANO_desk.webp" alt="Senior care moment with physician" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
            <!-- Image 4 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="assets/images/clinic-nano/mobile/DSC_0823_NANO_mob.webp">
                    <img src="assets/images/clinic-nano/desktop/DSC_0823_NANO_desk.webp" alt="Clinical staff working at station" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
        </div>
    </div>
</section>
<!-- HP_FOOTER_START -->
"""

if "Experience Our Clinic" not in html:
    html = html.replace("<!-- HP_FOOTER_START -->", gallery_html)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Injected Experience Our Clinic section into index.html")
else:
    print("Gallery already exists.")
