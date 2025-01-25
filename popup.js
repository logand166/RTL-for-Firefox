document.addEventListener("DOMContentLoaded", () => {
    const savedDirection = sessionStorage.getItem("direction") || '';
    if (savedDirection) {
      document.querySelector(`button#${savedDirection}`).classList.add('active');
    }
  });
  
  async function setDirection(direction) {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    
    // إرسال الرسالة بدون انتظار
    browser.tabs.sendMessage(tab.id, { action: "applyDirection", direction });
    
    // حفظ مؤقت في sessionStorage
    sessionStorage.setItem("direction", direction);
    
    // تحديث الواجهة
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button#${direction}`).classList.add('active');
  }
  
  document.getElementById("rtl").addEventListener("click", () => setDirection("rtl"));
  document.getElementById("ltr").addEventListener("click", () => setDirection("ltr"));
  document.getElementById("auto").addEventListener("click", () => {
    sessionStorage.removeItem("direction");
    browser.tabs.reload();
  });