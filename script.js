// scroll reveal

const reveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
});

reveal.forEach(el=>observer.observe(el));

/* rain canvas */

const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for(let i=0;i<120;i++){
drops.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
l:Math.random()*1,
s:Math.random()*4+2
});
}

function rain(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle="rgba(160,200,255,0.25)";
ctx.lineWidth=1;

for(let d of drops){
ctx.beginPath();
ctx.moveTo(d.x,d.y);
ctx.lineTo(d.x,d.y+d.s*3);
ctx.stroke();

d.y += d.s*4;
if(d.y>canvas.height){
d.y = -10;
d.x = Math.random()*canvas.width;
}
}

requestAnimationFrame(rain);
}

rain();

/* gallery lightbox */

const imgs = document.querySelectorAll(".img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

imgs.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxImg.src = img.src;
});
});

lightbox.addEventListener("click",()=>{
lightbox.style.display="none";
});

/* subtle parallax */

document.addEventListener("mousemove",(e)=>{
document.querySelector(".hero-inner").style.transform =
`translate(${e.clientX*0.01}px, ${e.clientY*0.01}px)`;
});
