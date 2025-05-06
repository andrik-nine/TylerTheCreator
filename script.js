const skipIntroBtnElem = document.querySelector(".skipIntro-btn");
const introElem = document.querySelector(".intro");
const homePageElem = document.querySelector(".home-page");

let mainTl = gsap.timeline();

setTimeout(() => {
    skipIntroBtnElem.style.setProperty("display","none");
},10000);
setTimeout(() => {
    introElem.style.setProperty("display","none");
    homePageElem.style.setProperty("opacity","1");
    homePageElem.style.setProperty("pointer-events","all");
    homePageElem.style.setProperty("background-color","#1C1C1C");

    const beatDelay = 0.62;

    mainTl.to(".tyler-logo-container",{
        opacity:1,
        duration:0.2
    })
    mainTl.to(".tyler-logo-container *",{
        opacity:1,
        delay:beatDelay,
        duration:0.2
    })
    mainTl.to(".albums-section",{
        opacity:1,
        duration:0.2,
        delay:beatDelay
    })
    mainTl.to(".albums-section *:not(#go-arrow)",{
        opacity:1,
        duration:0.4,
        delay:beatDelay
    }) // first appearance end

    mainTl.to(".home-page .header",{
        opacity:1,
        duration:0.4,
        delay:0.3
    })
    mainTl.to(".home-page .header *",{
        opacity:1,
        delay:beatDelay,
        duration:0.2
    })
    mainTl.to(".about-tyler-container",{
        opacity:1,
        duration:0.2,
        delay:beatDelay
    })
    mainTl.to(".about-tyler-container *:not(.ab-overlay)",{
        opacity:1,
        duration:0.4,
        delay:beatDelay
    })
    document.querySelector(".aboutTylerFs").style.setProperty("display","block");

   
},12300);
skipIntroBtnElem.addEventListener('click',() => {
    skipIntroBtnElem.style.setProperty("display","none");
    homePageElem.style.setProperty("animation","home-pageAni 2.5s cubic-bezier(0.41,-0.07, 0, 0.99) forwards");

    mainTl.pause();

    setTimeout(() => {
        introElem.style.setProperty("display","none");
    },2000);

    setTimeout(() => {

        secTl = gsap.timeline()

        secTl.to(".home-page .header",{
            opacity:1,
            duration:0.4,
        },"header")
        secTl.from(".home-page .header",{
            y:10,
            duration:0.4,
        },"header")
        secTl.to(".home-page .header *",{
            opacity:1,
            delay:0.3,
            duration:0.4,
        },"tyler")
        secTl.from(".home-page .header *",{
            y:100,
            duration:0.4,
        },"tyler")


        secTl.to(".tyler-logo-container",{
            opacity:1,
            duration:0.5,
            delay:0.2
        },"tyler")
        secTl.from(".tyler-logo-container",{
            scale:0,
            duration:0.5
        },"tyler")

        secTl.to(".tyler-logo-container *",{
            opacity:1,
            delay:0.3,
            duration:0.4,
            delay:0.5
        },"tyler")
        secTl.from(".tyler-logo-container *",{
            y:100,
            duration:0.5,
            delay:0.3
        },"tyler")



        secTl.to(".albums-section",{
            opacity:1,
            duration:0.5,
            delay:0.5
        },"tyler")
        secTl.from(".albums-section",{
            scale:0,
            duration:0.5
        },"tyler")

        secTl.to(".albums-section *:not(#go-arrow)",{
            opacity:1,
            duration:0.5,
        },"last")

        secTl.to(".about-tyler-container",{
            opacity:1,
            duration:0.5,
        },"last")
        secTl.from(".about-tyler-container",{
            y:10,
            duration:0.5,
        },"last")

        secTl.to(".about-tyler-container *:not(.ab-overlay)",{
            opacity:1,
            duration:0.5,
        },"last")
        secTl.from(".about-tyler-container *",{
            y:10,
            duration:0.5,
        },"last")


        secTl.to(".home-page",{
            pointerEvents:"all",
            duration:0.1,
        })
        document.querySelector(".aboutTylerFs").style.setProperty("display","block");
        
    },2000);
    
});




function epxloreSliderAnimation(){
    const exSliderH3ELems = document.querySelectorAll(".album-cover-container");
    exSliderH3ELems.forEach(exH3 => {
    const delay = parseFloat(getComputedStyle(exH3).getPropertyValue('--slide-delay'));
    let calculatdDelay = 20 / 8 * (8 - delay) * -1

    let tl = gsap.timeline()
    tl.to(exH3, {
        left:"-20vw",
        duration: 20,
        delay: calculatdDelay,
        repeat: -1, 
        ease: "linear" 
    });
})   
}
epxloreSliderAnimation()


function cursorAnimation(){
    window.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            x:dets.x,
            y:dets.y,
            duration: 1.5,
            ease:"expo"
        })
    })
}

cursorAnimation()

const cursorElem = document.querySelector(".cursor");

document.querySelector(".albums-section").addEventListener("mouseenter",function(){
    cursorElem.innerHTML = `Click`
    gsap.to(".cursor",{
        height : "4vw",
        width :"4vw",
        mixBlendMode:"normal",
        backgroundColor:"#3a3434",
        boxShadow:"0 0 7px rgba(0, 0, 0, 0.27)",
        fontSize:"1vw",
        duration:0.5     
    })
    gsap.to("#go-arrow",{
        opacity:1,
        duration:0.1
    })
})

document.querySelector(".albums-section").addEventListener("mouseleave",function(){
    cursorElem.innerHTML = ``;
    gsap.to(".cursor",{
        height : "0.8vw",
        width :"0.8vw",
        mixBlendMode:"difference",
        backgroundColor:"rgb(158, 140, 140)",
        boxShadow:"none",
        fontSize:"0vw",
        duration:0.5
    })
    gsap.to("#go-arrow",{
        opacity:0,
        duration:0.1
    })
})

const headerELems  = document.querySelectorAll(".header-elem");
headerELems.forEach(headerLink => {
    headerLink.addEventListener("mouseenter",function(){
        gsap.from(headerLink.querySelector("span"),{
            opacity:0,
            y:100,
            duration:0.5,
            ease:"power3"
        })
    })  
})





document.querySelector(".about-tyler-container").addEventListener("mouseenter",function(){
    gsap.to(".abTy-textContainer",{
        opacity:0,
        duration:0.2     
    })
    gsap.to(".ab-overlay",{
        opacity:1,
        duration:0.2
    })
    gsap.to(".abTy-imgContainer img",{
        scale:1.1,
        duration:0.2
    })
    gsap.to(".about-tyler-container",{
        boxShadow:"-4px 4px 1px rgb(135, 83, 83)",
        duration:0.2
    })
})

document.querySelector(".about-tyler-container").addEventListener("mouseleave",function(){
    gsap.to(".abTy-textContainer",{
        opacity:1,
        duration:0.2     
    })
    gsap.to(".ab-overlay",{
        opacity:0,
        duration:0.2
    })
    gsap.to(".abTy-imgContainer img",{
        scale:1,
        duration:0.2
    })
    gsap.to(".about-tyler-container",{
        boxShadow:"none",
        duration:0.2
    })
})

let aboutTylerTL = gsap.timeline()

aboutTylerTL
.from(".aboutTylerFs h2",{
    opacity:0,
    transform:"translateY(1vw)",
    duration:0.4,
},">")
.from(".aboutTylerFs i",{
    opacity:0,
    transform:"translateY(1vw)",
    duration:0.4,
},">")
.from(".at-main .description",{
    opacity:0,
    transform:"translateY(1vw)",
    duration:0.4,
    delay:0.1
},"<")
.from(".at-main .tyler-photos",{
    opacity:0,
    transform:"translateY(1vw)",
    duration:0.4,
    delay:0.2
},"<")
.from(".at-main .T-clothingSection",{
    opacity:0,
    transform:"translateY(1vw)",
    duration:0.4,
    delay:0.2
},"<")
.from(".at-main .T-socialsSection",{
    opacity:0,
    transform:"translateY(1vw)",
    duration:0.4,
    delay:0.2
},"<")
aboutTylerTL.pause()

document.querySelector(".about-tyler-container").addEventListener("click",function(){
    gsap.to(".aboutTylerFs",{
        top:0,
        duration:0.7,
        ease:"power2.inOut"
    })
    setTimeout(() => {
        aboutTylerTL.play()
    }, 700);
})
document.querySelector("#atFsCloseBtn").addEventListener("click",function(){
    aboutTylerTL.reverse()
    setTimeout(() => {
        gsap.to(".aboutTylerFs",{
            top:"-100%",
            duration:0.7,
            ease:"power2.inOut"
        })
    }, 1200);
})

document.querySelectorAll(".T-brand-container").forEach(container => {
    container.addEventListener("mouseenter",() => {
        gsap.to(".cursor",{
            height : "2vw",
            width :"2vw",
            mixBlendMode:"normal",
            backgroundColor:"#3a3434",
            boxShadow:"0 0 7px rgba(0, 0, 0, 0.27)",
            fontSize:"1vw",
            duration:0.5     
        })
        cursorElem.innerHTML = `<i class="ri-arrow-right-up-line"></i>`;
    })
    container.addEventListener("mouseleave",() => {
        gsap.to(".cursor",{
            height : "0.8vw",
            width :"0.8vw",
            mixBlendMode:"difference",
            backgroundColor:"rgb(158, 140, 140)",
            boxShadow:"none",
            fontSize:"0vw",
            duration:0.5
        })
        cursorElem.innerHTML = ``
    })
    
})

document.querySelector(".TBC1").addEventListener("mouseenter",() => {
    gsap.to(".TBC2",{
        filter:"blur(2px)",
        duration:0.5     
    })
})
document.querySelector(".TBC1").addEventListener("mouseleave",() => {
    gsap.to(".TBC2",{
    filter:"blur(0px)",
    duration:0.5     
    })
})

document.querySelector(".TBC2").addEventListener("mouseenter",() => {
        gsap.to(".TBC1",{
            filter:"blur(2px)",
            duration:0.5     
        })
    })
document.querySelector(".TBC2").addEventListener("mouseleave",() => {
        gsap.to(".TBC1",{
        filter:"blur(0px)",
        duration:0.5     
        })
    })



