# 🌍 RTL/LTR Toggle Pro 

**A lightweight Firefox add-on to toggle text direction between RTL (Right-to-Left) and LTR (Left-to-Right) seamlessly.**  
![License](https://img.shields.io/badge/License-MIT-green) ![Version](https://img.shields.io/badge/Version-2.1-blue) ![Firefox](https://img.shields.io/badge/Firefox-100%25%20compatible-orange)

---

## ✨ Features
- **🔁 Real-Time Direction Toggle**: Switch text direction **without reloading the page**.
- **🎨 CSS Injection**: Force direction changes even on resistant websites using `!important`.
- **📂 Session Storage**: Save settings per tab without bloating local storage.
- **👀 Dynamic DOM Handling**: Uses `MutationObserver` to handle dynamic content (e.g., SPAs).
- **⚙️ Options Page**: Exclude specific sites or customize behavior.
- **🚀 Performance-Optimized**: Minimal CPU/RAM usage with throttled event listeners.

---

## 📦 Installation

### Method 1: Load Temporarily (Development)
1. Clone this repository:
   ```bash
   git clone https://github.com/YourUsername/rtl-toggle-pro.git
2. Open Firefox and go to about:debugging.
3. Click "This Firefox" → "Load Temporary Add-on".
4. Select the manifest.json file from the cloned folder.

   Method 2: Install Signed Version (Recommended)

    Download the .xpi file from Releases.

    Drag and drop the .xpi file into Firefox.

🖥️ Usage

    Click the add-on icon in Firefox’s toolbar.
    Popup Demo (Replace with your screenshot URL)

    Choose an option:

        → RTL: Force Right-to-Left.

        ← LTR: Force Left-to-Right.

        🔄 Auto: Revert to the website’s default.

    Access Settings to:

        Exclude domains (e.g., youtube.com).

        Toggle advanced options.

🔧 Technical Details

    Built With: WebExtensions API, JavaScript, HTML/CSS.

    Manifest Version: 2 (Firefox-compatible).

    Permissions: activeTab, storage, scripting.

    Key Files:

        content.js: Handles DOM direction injection.

        popup.js: Manages UI interactions.

        background.js: Tracks tab states.

        options.js: Customizable settings.

🛠️ Development

    Fork the repository.

    Modify code in the rtl-toggle-pro/ directory.

    Test changes using about:debugging.

    Submit a pull request!

📜 License

This project is licensed under the MIT License.
See LICENSE for details.
🙏 Acknowledgements

    Mozilla’s WebExtensions Documentation.

    Icons by Font Awesome.

🌟 Star this repo if you find it useful!
---


