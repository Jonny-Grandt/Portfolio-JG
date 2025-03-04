const outerCursor = document.querySelector('.custom-cursor-outer');
const innerCursor = document.querySelector('.custom-cursor-inner');

document.addEventListener('mousemove', (e) => {
  outerCursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
  innerCursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
});