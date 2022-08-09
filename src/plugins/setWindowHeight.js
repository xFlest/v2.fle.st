const setFillHeight = () => {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const root = document.querySelector(':root').style;
  root.setProperty('--vh', `${vh}px`);
  if (vw > vh) {
    root.setProperty('--vmin', `${vh}px`);
  } else {
    root.setProperty('--vmin', `${vw}px`);
  }
};
window.addEventListener('resize', setFillHeight);
setFillHeight();