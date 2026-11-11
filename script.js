const cursor = document.querySelector('.cursor');
let x = 0, y = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; });

function animar(){
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(animar);
}
animar();

document.querySelectorAll('a, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});