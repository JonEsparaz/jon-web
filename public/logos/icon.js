function main() {
  const matcher = window.matchMedia('(prefers-color-scheme:dark)');
  matcher.addListener(onUpdate);
  function onUpdate() {
    const lightSchemeIcon = document.querySelector('link#light-mode');
    const darkSchemeIcon = document.querySelector('link#dark-mode');
    if (matcher.matches) {
      if (lightSchemeIcon) {
        lightSchemeIcon.remove();
      }
      addDarkIconToHead();
    } else {
      if (darkSchemeIcon) {
        darkSchemeIcon.remove();
      }
      addLightIconToHead();
    }
  }

  function addDarkIconToHead() {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/svg+xml';
    link.href = '/logos/je-white.svg';
    link.id = 'dark-mode';
    document.head.append(link);
  }
  function addLightIconToHead() {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/svg+xml';
    link.href = '/icons/je.svg';
    link.id = 'light-mode';
    document.head.append(link);
  }
  onUpdate();
}

main();
