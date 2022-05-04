/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const toggle = (ev) => {
  const domElement = ev.currentTarget;
  console.log(domElement);
  txt = document.querySelector("body")
  if (txt.className == "dyslexia-mode") {
    txt.className = "default";
  }
  else {
    document.querySelector("body").className = "dyslexia-mode";
  }
}

document.querySelector("#dyslexia-toggle").onclick = toggle;