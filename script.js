// locomotive js - smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// gsap to animate(it's insane)
gsap.from(".nlink", {
    stagger:0.2,
    y:10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y:30,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,
    duration: 1
})

Shery.imageEffect("#imgntext img", {
    style: 3,
    config:{"uFrequencyX":{"value":14.05,"range":[0,100]},"uFrequencyY":{"value":4.13,"range":[0,100]},"uFrequencyZ":{"value":15.7,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999743635942},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect(".imgeff img", {
    style: 5,
    config:{"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.8,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666894545837},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

gsap.from("#imgntext img", {
    y: "70",
    opacity: 0,
    duration: 2,
    ease: Expo
})

Shery.imageEffect("#bimg", {
    style: 5,
    config:{"a":{"value":0.25,"range":[0,30]},"b":{"value":-0.9,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1713484208380103},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":6.21,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.74,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.83,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.07,"range":[0,2]},"noise_scale":{"value":34.71,"range":[0,100]}},
    gooey: true, 
})
// shrey js to animate images accordingly

document.querySelector("#future button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity: 1,
        duration: 1.5,
        ease: Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})
