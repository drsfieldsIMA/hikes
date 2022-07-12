var coll = document.getElementsByClassName("accordion_label");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", 
  function() {
      this.classList.toggle("active");
            var content = this.nextElementSibling;
              if (content.style.display === "block") {
                  content.style.display = "none";
                  } else {
                  content.style.display = "block";
                  }
  });
}

window.addEventListener("scroll",function(){
  var header =document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})