var tm = gsap.timeline();


function time() {
    var a = 0;
    setInterval(function () {
        a = a + Math.floor(Math.random() * 15)
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
        else {
            a = 100;
            document.querySelector("#loader h1").innerHTML = a + "%";

        }
    }, 150)


}
// time();
tm.to("#loader", {
    delay: 0.5,
    duration: 1.5,
    onStart: time(),

})
tm.to("#loader", {
    top: "-100%",
    delay: 0.7,
    duration: 1,

})
tm.to(" #page1 h1", {
    // transform:"translateX(-1600px)",
    transform: "translateX(-105vw)",
delay:4,
    fontWeight: 1300,
    scrollTrigger: {
        trigger: " #page1",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        pin: true
    }

})




// gsap.to(".extra",{
//     scale:1,
//     opacity:1,

// })




// gsap.to(".extra",{
//     scale:1,
//     opacity:1,
//     scrollTrigger:{
//         trigger:".extra",
//         scroller:"body",
//         markers:true,
//         start:"left -150vw",
//         end:"top -200vw",
//         scrub:2,
//         // pin:true
//     }
// })