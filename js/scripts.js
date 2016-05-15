var link=document.querySelector(".btn_write");
var popup=document.querySelector(".modal_content");
var close=document.querySelector(".modal_button_close");
var enter=popup.querySelector("[name=name]");


link.addEventListener("click",function(event) {
	event.preventDefault();
	popup.classList.add("modal_content_show");
  enter.focus();
});
close.addEventListener("click",function(event) {
	event.preventDefault();
popup.classList.remove("modal_content_show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal_content_show")) {
    popup.classList.remove("modal_content_show");
    }
  }
});