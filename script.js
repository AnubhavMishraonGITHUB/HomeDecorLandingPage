var tl = gsap.timeline();

tl.from('#left', {
    width: 0,
    ease: Expo.easeInOut,
    duration: 2
})
.from('#right', {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1
})
.from('#first', {
    height: 0,
    ease: Expo.easeInOut,
    duration: 2
}, '-=1.5')
.from('#second', {
    height: 0,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2
}, '-=1')
.from('.lbtmstag', {
    stagger: .2,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5
}, '-=2')
.from('.navstag', {
    stagger: .3,
    x: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2
}, '-=4')
.from('.detsstag', {
    stagger: .3,
    y: 30,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2
}, '-=2')
