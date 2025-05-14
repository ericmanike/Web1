const menubar = document.getElementById("menubar");
const links = document.querySelectorAll("a");
const navigations = document.getElementById("nav");
const top1 = document.getElementById("top1");

 let form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("my-form-status");
    let data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "<h3>Thanks message received.<br> we will get back to you shortly!<h3>";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit);

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