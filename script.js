// reveal scroll
const blocks=document.querySelectorAll(".reveal");

function reveal(){
blocks.forEach(block=>{
const top=block.getBoundingClientRect().top;
if(top<window.innerHeight-100){
block.classList.add("visible");
}
});
}

window.addEventListener("scroll",reveal);


// counters
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
let start=0;
let end=counter.dataset.count;

let timer=setInterval(()=>{
start += Math.ceil(end/100);

if(start>=end){
start=end;
clearInterval(timer);
}

counter.innerText=start;
},20);
});
