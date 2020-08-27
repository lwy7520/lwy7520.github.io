function charToHTML(c, i){
  return `<span class="title" style="animation-delay: ${i*0.5}s">${c}</span>`;
}

var title = document.getElementById("word");
var charArray = title.innerHTML.split("")

title.innerHTML = charArray.map(charToHTML).join("")