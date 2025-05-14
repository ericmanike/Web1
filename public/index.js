const menubar = document.getElementById("menubar");
const links = document.querySelectorAll("a");
const navigations = document.getElementById("nav");
const top1 = document.getElementById("top1");

menubar.addEventListener('click',()=>{
    if(menubar.src.includes("images/menu1.png")){
    nav.style.display ="flex";
   menubar.src="images/clos1.png"}
  
   else if  (menubar.src.includes("images/clos1.png")){
        nav.style.display = "none";
        menubar.src ="images/menu1.png";
    }
 })

 links.forEach(link =>{
    link.addEventListener('click',()=>{
      if(menubar.src.includes("images/clos1.png")){
        nav.style.display = "none";
        menubar.src ="images/menu1.png"
    }
    })
 });

 function Update(){

 links.forEach(link=>{
  if(window.location.hash == link.hash){
    link.classList.add("active");
    
  }
  else{
    link.classList.remove("active")
  }
})
 };
 window.addEventListener('hashchange',Update);



 window.onscroll =function(){

  if (document.body.scrollTop >100 || document.documentElement.scrollTop>100){
    top1.style.display = "block"
  } else{
    top1.style.display="none"
  }
 }

 top1.onclick =function(){
  document.body.scrollTop =0;
  document.documentElement.scrollTop =0;
 }