gsap.registerPlugin(ScrollTrigger);


// hero entrance
gsap.from(
".fade-up",
{
y:80,
opacity:0,
duration:1.2,
stagger:.25
}
);


// floating phone parallax
gsap.to(
".hero-phone",
{
y:-40,
repeat:-1,
yoyo:true,
duration:4,
ease:"power1.inOut"
}
);


// scroll reveal sections
gsap.utils.toArray(".step")
.forEach(section=>{

gsap.from(
section,
{
opacity:0,
y:100,
duration:1,

scrollTrigger:{
trigger:section,
start:"top 75%"
}
}

);

});


// cards reveal
gsap.from(
".card",
{
opacity:0,
y:70,
stagger:.2,

scrollTrigger:{
trigger:".benefits",
start:"top 75%"
}

}
);
