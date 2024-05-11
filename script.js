let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        //ye mention mahi kiya tha isliye trigger
        start: "top top",
        end:"bottom bottom",
        scrub: 1,

    },
})

let a =0;
num={
    var: a
};

function topBannerTextSplitter(){
    let topBanner = document.querySelector(".topBanner")

    let bannertext = topBanner.textContent;

    let splittedTextBanner = bannertext.split("");
    clutter="";
    splittedTextBanner.forEach(function(e){
        if(e ==" "){
            clutter +=" ";
        }
        else{
            clutter += `<span>${e}</span>`;
        }
        
    })
    topBanner.innerHTML = clutter;
}


function changeNumber() {
    document.querySelector(".women_text").innerHTML = (num.var).toFixed();
};

function changeNumberMillionText(){
    document.querySelector(".millionText").innerHTML = (num.var).toFixed();
}
function changeNumberNationalityText(){
    document.querySelector(".nationalityText").innerHTML = (num.var).toFixed();
}

function textChanging(){
        let tl1 =  
    gsap.timeline({
        scrollTrigger:{
            trigger:".women_text",
            start: "0% 50%",
            end:"80% 0",
            toggleActions: "restart none none reverse"

    }});

    tl1.to(".women_text",{
    textContent : 49 + "%",
    snap : {textContent : 1},
    duration : 1.8,

    ease: "none",
    onUpdate: changeNumber(),
    });


    let tl2 =  
    gsap.timeline({
        scrollTrigger:{
            trigger:".millionText",
            start: "0% 50%",
            end:"80% 0",
            toggleActions: "restart none none reverse"

    }});

    tl2.to(".millionText",{
        textContent : 20.4+ "M",
        snap : {textContent : 1.2},
        duration : 1.8,
        
        ease: "none",
        onUpdate: changeNumberMillionText(),
        });

    let tl3 =  
    gsap.timeline({
        scrollTrigger:{
            trigger:".nationalityText",
            start: "0% 50%",
            end:"80% 0",
            toggleActions: "restart none none reverse"

    }});

    tl3.to(".nationalityText",{
        textContent : 13,
        snap : {textContent : 1},
        duration : 2.7,
        ease: "none",
        onUpdate: changeNumberNationalityText(),
        });

}


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
    .from(".topBanner span",{
 
        opacity: 0,
        stagger: 0.02,
        ease:Power4,
        scrub:2
    },'b')
}



function teamAnimation(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener("mouseover", function(dets){
            //we will learn about gsap map range
            // details ke under clientX hota hai uske andr 
            
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                y:gsap.utils.mapRange(0,window.innerHeight, -100, 100, dets.clientY),
                ease: Power4,
                duration: 1,
                
            },'c')
            gsap.to(this.querySelector(".bluelayer"),{
                height: "100%",
                ease:Power4,
                duration: 1,
            },'c')
        });
    
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease: Power4,
                duration: 0.5,
                
            })
            gsap.to(this.querySelector(".bluelayer "),{
                height: 0,
                duration: 0.4,
                ease:Power4,
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
        bottom: "bottom 40%",
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
topBannerTextSplitter();
homepageAnimation();
midPageAnimation();
teamAnimation();
paraAnimation();
capsuleAnimation();
bodyColorChange();
textChanging();