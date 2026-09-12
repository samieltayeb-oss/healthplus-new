import os

html_path = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\about\index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

gallery_html = """
<section class="section" style="background-color: var(--hp-bg-white);">
    <div class="container">
        <div class="section-header" style="text-align: center;">
            <h2 class="section-title">State-of-the-Art Facilities</h2>
            <p class="section-desc">We combine medical excellence with a warm, welcoming environment.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
            <!-- Image 1 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="../assets/images/clinic-nano/mobile/DSC_0848_NANO_mob.webp">
                    <img src="../assets/images/clinic-nano/desktop/DSC_0848_NANO_desk.webp" alt="Main Reception at HealthPlus" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
            <!-- Image 2 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="../assets/images/clinic-nano/mobile/DSC_0841_NANO_mob.webp">
                    <img src="../assets/images/clinic-nano/desktop/DSC_0841_NANO_desk.webp" alt="Examination Room" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
            <!-- Image 3 -->
            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                <picture>
                    <source media="(max-width: 768px)" srcset="../assets/images/clinic-nano/mobile/DSC_0835_NANO_mob.webp">
                    <img src="../assets/images/clinic-nano/desktop/DSC_0835_NANO_desk.webp" alt="Facility Details" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy">
                </picture>
            </div>
        </div>
    </div>
</section>
<!-- HP_FOOTER_START -->
"""

if "State-of-the-Art Facilities" not in html:
    html = html.replace("<!-- HP_FOOTER_START -->", gallery_html)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Injected State-of-the-Art Facilities section into about/index.html")
else:
    print("Gallery already exists.")
