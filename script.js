gsap.from("#nav",{
    delay:0.2,
    opacity:0,
    duration:0.5,
    y:-80, 
})
gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1.5,
    y:60
})
gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1.5,
    x:60
})
gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1.5,
    y:-60
})
gsap.from("#main h1",{
    delay:0.4,
    opacity:0,
    duration:2
})

gsap.from("#card-container",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        start:"top 75%"
    }
})

var t1 = gsap.timeline();
t1.from("#about h5",{
    opacity:0,
    duration:1,
})
t1.from("#about h1",{
    opacity:0,
    duration:1,
})
t1.from("#about #about-us",{
    opacity:0,
    duration:1,
})