var time = gsap.timeline();
time.from(".nav-p img,.nav-p h1,.nav-p2 h1,.nav-p3 h1 ",{
    opacity:0,
    y:-100,
    // duration:0.3,
    stagger:0.3
})
time.from("#title h1,#title img,.fpnl ,.fpnl h2,.fpnl h3",{
    opacity:0,
    x:200,
    // duration:0.3,
    stagger:0.3
}
)
time.from(".box2 img",{
    opacity:0,
    // x:200,
    scale:1.2,
    stagger:0.5
}
)
gsap.from(".box,.layover img,.layover h1",{
    // duration:0.7,
    scale:1.1,
    opacity:0,

    scrollTrigger:{
        trigger:(".layover img,.layover h1"),
        scroller:("body"),
        start:"top 80%",
        end:"top 40%",
        // markers:true,
        
        scrub:3


    }
})