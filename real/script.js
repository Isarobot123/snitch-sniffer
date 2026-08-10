
function openPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=document.getElementById(id)||document.getElementById("home");
  target.classList.add("active");
  window.scrollTo(0,0);
  history.replaceState(null,"","#"+target.id);
}
document.querySelectorAll("[data-page]").forEach(link=>{
  link.addEventListener("click",function(e){
    e.preventDefault();
    openPage(this.dataset.page);
  });
});
openPage((location.hash||"#home").slice(1));
