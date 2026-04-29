window.addEventListener(
"scroll",
()=>{

const y=
window.scrollY;

document.querySelector(
".hero-phone"
).style.transform=`

rotateY(-12deg)
rotateX(6deg)
translateY(${y*0.03}px)

`;

}
);
