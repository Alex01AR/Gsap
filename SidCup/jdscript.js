var crsr = document.querySelector("#cursor")
var crsrblr= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x-150+"px"
    crsrblr.style.top = dets.y-150+"px"

})
var hallsub = document.querySelectorAll("#nav h4")
// console.log(hallsub);
hallsub.forEach(function(elem){
    console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.color = "#95c11E"

        crsr.style.border= "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "0.09s"
        

        
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border= "0px solid #95C11E ";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.color = "#fff"
    }
    )
})


var crsrblr= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    

})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top - 11%",
        scrub:1

    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // marker:true,
        start:"top 40%",
        end:"top 20%",
        scrub:3,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    Stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2,
    }
})

gsap.from("#colon1",{
    y:70,
    x:90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 30%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:-70,
    x:-90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 30%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})

var footsub= document.querySelectorAll("#footer h3")
// console.log(hallsub);
footsub.forEach(function(element){
    console.log(element);
    element.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.color = "white";
        
        crsr.style.border= "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.delay ="0.2s";
        crsr.style.transition = "0.09s";
           
    })
    element.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border= "0px solid #95C11E ";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.color = "black";
    }
    )
})