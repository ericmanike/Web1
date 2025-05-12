const menubar = document.getElementById("menubar");
const links =document.querySelectorAll("a");
const navigations = document.getElementById("nav");

menubar.addEventListener('click',()=>{
    if(menubar.src.includes("images/menu1.png")){
    nav.style.display ="flex";
   menubar.src="images/clos1.png"}
  
   else if  (menubar.src.includes("images/clos1.png")){
        nav.style.display = "none";
        menubar.src ="images/menu1.png"
    }
 })

 links.forEach(link =>{
    link.addEventListener('click',()=>{
      if(menubar.src.includes("images/clos1.png")){
        nav.style.display = "none";
        menubar.src ="images/menu1.png"
    }
    })
 })