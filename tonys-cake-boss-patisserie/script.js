document.documentElement.classList.add("js");
const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector(".main-nav");
if(menuButton&&navigation){
  const closeMenu=()=>{menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Open navigation");navigation.classList.remove("is-open");};
  menuButton.addEventListener("click",()=>{const isOpen=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!isOpen));menuButton.setAttribute("aria-label",isOpen?"Open navigation":"Close navigation");navigation.classList.toggle("is-open",!isOpen);});
  navigation.querySelectorAll("a").forEach((link)=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",(event)=>{if(event.key==="Escape")closeMenu();});
  document.addEventListener("click",(event)=>{if(!navigation.contains(event.target)&&!menuButton.contains(event.target))closeMenu();});
}
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  const observer=new IntersectionObserver((entries,currentObserver)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");currentObserver.unobserve(entry.target);}});},{threshold:.12});
  revealItems.forEach((item)=>observer.observe(item));
}else{revealItems.forEach((item)=>item.classList.add("is-visible"));}