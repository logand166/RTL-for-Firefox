browser.runtime.onMessage.addListener((message) => {
    if (message.action === "applyDirection") {
      setTimeout(() => {
        applyDirection(message.direction);
      }, 150); // تأخير لتحسين الأداء
    }
  });