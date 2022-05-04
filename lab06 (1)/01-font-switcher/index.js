const makeBigger = (ev) => {
   // alert('make bigger!');
   console.log("make bigger!")
   const elementClicked = ev.currentTarget;
   curr_size_h = parseFloat(window.getComputedStyle(document.querySelector("h1"), null).getPropertyValue('font-size'))
   curr_size_d  = parseFloat(window.getComputedStyle(document.querySelector("div.content"), null).getPropertyValue('font-size'))
   // get current font size & increase by certain number of pixels
   // h1.style.fontSize = (h1Size + 2) + 'px';
   // parseFloat
   console.log(curr_size_h)
   if (elementClicked.id == "a1"){
      document.querySelector("h1").style.fontSize = (curr_size_h + 5) + 'px';
      document.querySelector("div.content").style.fontSize = (curr_size_d + 5) + 'px';
   }
};

const makeSmaller = (ev) => {
   // alert('make smaller!');
   console.log("make smaller!")
   const elementClicked = ev.currentTarget;

   curr_size_h = parseFloat(window.getComputedStyle(document.querySelector("h1"), null).getPropertyValue('font-size'))
   curr_size_d  = parseFloat(window.getComputedStyle(document.querySelector("div.content"), null).getPropertyValue('font-size'))

   if (elementClicked.id == "a2"){
      document.querySelector("h1").style.fontSize = (curr_size_h - 5) + 'px';
      document.querySelector("div.content").style.fontSize = (curr_size_d - 5) + 'px';
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

