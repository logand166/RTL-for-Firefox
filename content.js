let styleElement = null;

function applyDirection(direction) {
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'rtl-toggle-style';
    document.head.appendChild(styleElement);
  }

  styleElement.innerHTML = `
    body { direction: ${direction} !important; }
    *:not([dir]) { direction: ${direction} !important; }
  `;

  document.documentElement.setAttribute('dir', direction);
}

// مراقبة تغييرات السمة dir فقط
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'dir') return;
  });
  
  browser.storage.local.get({ direction: '' }).then(({ direction }) => {
    if (direction) applyDirection(direction);
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['dir']
});

// التحميل الأولي
browser.storage.local.get({ direction: '' }).then(({ direction }) => {
  if (direction) applyDirection(direction);
});