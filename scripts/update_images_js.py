import os
import re

config_path = r"C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\config\images.js"

with open(config_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'about-hero': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0848-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0848-mob.webp',
        'alt': 'HealthPlus Medical modern reception and check-in desk in Calgary',
        'focalPointDesktop': 'center',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'family-wellness': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0852-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0852-mob.webp',
        'alt': 'Comfortable patient waiting area at HealthPlus clinic',
        'focalPointDesktop': 'center right',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'internal-medicine': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0838-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0838-mob.webp',
        'alt': 'State-of-the-art examination suite with precision medical equipment',
        'focalPointDesktop': 'center',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'pediatric-care': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0814-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0814-mob.webp',
        'alt': 'Bright and welcoming pediatric care and family area at HealthPlus',
        'focalPointDesktop': 'center',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'family-medicine': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0808-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0808-mob.webp',
        'alt': 'Modern physician consultation and examination room',
        'focalPointDesktop': 'center right',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'team-hero': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0835-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0835-mob.webp',
        'alt': 'HealthPlus physician business cards highlighting our dedicated team',
        'focalPointDesktop': 'center left',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'walk-in-clinic': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0817-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0817-mob.webp',
        'alt': 'Wide view of the pristine clinical hallways at HealthPlus',
        'focalPointDesktop': 'center right',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'womens-health': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0820-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0820-mob.webp',
        'alt': 'Private consultation and women\'s health suite',
        'focalPointDesktop': 'center',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    },
    'mva-care': {
        'desktopPath': 'assets/images/clinic-real/desktop/DSC_0830-desk.webp',
        'mobilePath': 'assets/images/clinic-real/mobile/DSC_0830-mob.webp',
        'alt': 'Minor procedure and treatment room at HealthPlus',
        'focalPointDesktop': 'center',
        'focalPointMobile': 'center',
        'width': 1920,
        'height': 1080
    }
}

for img_id, data in replacements.items():
    # Regex to find the object with id: "img_id"
    pattern = r'(id:\s*["\']' + img_id + r'["\'],.*?path:\s*["\'])(.*?)(["\'],)'
    
    # We want to replace the `path` with `desktopPath`, and also add `desktopPath` and `mobilePath` keys.
    # Actually, let's just replace `path` with `desktopPath` and add `mobilePath` below it.
    def replacer(match):
        pre = match.group(1)
        old_path = match.group(2)
        post = match.group(3)
        return f'{pre}{data["desktopPath"]}{post}\n    desktopPath: "{data["desktopPath"]}",\n    mobilePath: "{data["mobilePath"]}",\n    oldPath: "{old_path}",'
    
    content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    # Update alt
    alt_pattern = r'(id:\s*["\']' + img_id + r'["\'].*?alt:\s*["\'])(.*?)(["\'])'
    content = re.sub(alt_pattern, lambda m: f'{m.group(1)}{data["alt"]}{m.group(3)}', content, flags=re.DOTALL)
    
    # Update focalPointDesktop
    fp_desk_pattern = r'(id:\s*["\']' + img_id + r'["\'].*?focalPointDesktop:\s*["\'])(.*?)(["\'])'
    content = re.sub(fp_desk_pattern, lambda m: f'{m.group(1)}{data["focalPointDesktop"]}{m.group(3)}', content, flags=re.DOTALL)
    
    # Update focalPointMobile
    fp_mob_pattern = r'(id:\s*["\']' + img_id + r'["\'].*?focalPointMobile:\s*["\'])(.*?)(["\'])'
    content = re.sub(fp_mob_pattern, lambda m: f'{m.group(1)}{data["focalPointMobile"]}{m.group(3)}', content, flags=re.DOTALL)

with open(config_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated config/images.js")
