const wrapper = document.querySelector('.wrapper-cd');
const audio = document.querySelector('.audio');

wrapper.addEventListener('mouseenter', ()=> {
    audio.play();
});

wrapper.addEventListener('mouseleave', ()=> {
    audio.pause();
})