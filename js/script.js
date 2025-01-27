var p = document.querySelector("p");
var text = p.textContent;
var numberFalling = 6;

p.innerHTML = "";
for (var i = 0; i < text.length; i++) {
  var span = document.createElement("span");
  span.textContent = text[i];
  p.appendChild(span);
}

for (var i = 0; i < numberFalling; i++) {
  (function(){
    return (setTimeout(function(){
      var el = p.children[Math.floor(Math.random() * p.children.length)];
      el.className = "falling";
      el.addEventListener("animationend", animateNext);
    }, i * (3000 / numberFalling))
    )
  })();
}

function animateNext() {
  var notFalling = p.querySelectorAll(":not(.falling)");
  this.className = "";
  
  var newEl = notFalling[Math.floor(Math.random() * notFalling.length)];
  newEl.className = "falling";
  newEl.addEventListener("animationend", animateNext);
}
  