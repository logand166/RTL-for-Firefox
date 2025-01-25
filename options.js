// تحميل الإعدادات الحالية
browser.storage.local.get(["excludedSites", "changeBrowserUI"]).then(settings => {
    document.getElementById("excludedSites").value = settings.excludedSites?.join(", ") || "";
    document.getElementById("changeBrowserUI").checked = settings.changeBrowserUI || false;
  });
  
  // حفظ الإعدادات
  document.getElementById("save").addEventListener("click", () => {
    const excludedSites = document.getElementById("excludedSites").value
      .split(",")
      .map(site => site.trim().replace(/https?:\/\//, ""));
  
    const changeBrowserUI = document.getElementById("changeBrowserUI").checked;
  
    browser.storage.local.set({ excludedSites, changeBrowserUI }).then(() => {
      alert("تم الحفظ بنجاح ✅");
      
      // تطبيق تغيير واجهة المتصفح
      if (changeBrowserUI) {
        browser.management.setEnabled(browser.runtime.id, true); // قد يتطلب صلاحيات إضافية
      }
    });
  });