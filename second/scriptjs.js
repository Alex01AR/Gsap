var time = gsap.timeline();
time.from("nav img,nav h2,nav button",{
    y:-100,
    duration:0.4,
    opacity:0,
    
    stagger:0.4
})

time.from("#main h1",{
    y:400,
    duration:0.4,
    opacity:0,
    
    stagger:0.5
})

time.from("#main img",{
  scale:1.4,

  stagger:0.4,
  opacity:0,

})
time.from("#scroll h1",{
    y:20,
    duration:0.7,
    opacity:0,
   repeat:-1,
   yoyo:true,



})