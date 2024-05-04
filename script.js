let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        //ye mention mahi kiya tha isliye trigger
        start: "top top",
        end:"bottom bottom",
        scrub: 1,

    },
})


function midPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start: "top top",
            end:"bottom bottom",
            scrub:1
        },
        xPercent: -300,
        ease: Power4,
    })       
}

function homepageAnimation(){
    //Herewe are doing same event together by passing the same flag sop that they occur at the same time

    tl
    .to(".vdodiv",{
        '--clip':"0%",
        ease:Power2
    },'a')
    .to(".slidesmaster",{
        scale:1,
        ease:Power2,
    },'a')
    .to(".lft",{
        xPercent: 10,
        stagger: 0.03,
        ease:Power4,
    },'b')
    .to(".rgit",{
        xPercent: -10 ,
        stagger:0.03,
        ease:Power4,
    },'b')
}



function teamAnimation(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            //we will learn about gsap map range
            // details ke under clientX hota hai uske andr 
            
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power4,
                duration: 0.5
            })
        });
    
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease: Power4,
                duration: 0.5
            })
            });
        });
    
}


function paraAnimation(){
var clutter="";
document.querySelector(".texttpara")
.textContent.split("")
.forEach(function(e){
    if(e == " "){
        clutter+=`<span>&nbsp;</span>`
    }else{
    clutter +=`<span>${e}</span>`// span tag space nahi jod pata hai isliye if condition lagayenge
    }
    
    document.querySelector(".texttpara").innerHTML=clutter;
})

gsap.set(".texttpara span",{opacity: 0});

gsap.to(".texttpara span", {
    scrollTrigger:{
        trigger:".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub:0.8
 },
    opacity:1,
    stagger:0.03,
    ease: Power2
});

};


function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1,
 
        },
        y:0,
        ease:Power4,
    })
};


function bodyColorChange(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        top: "top 35%",
        bottom: "bottom 35%",
        onEnter: function(){
            document.body.setAttribute("theme",e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme",e.dataset.color)
        }
    })
})


}


loco();
homepageAnimation();
midPageAnimation();
teamAnimation();
paraAnimation();
capsuleAnimation();
bodyColorChange();



