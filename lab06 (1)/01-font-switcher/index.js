const makeBigger = (ev) => {
   // alert('make bigger!');
   console.log("make bigger!")
   const elementClicked = ev.currentTarget;
   curr_size_h = document.querySelector("h1").style.fontSize;
   curr_size_d = document.querySelector("div.content").style.fontSize;
   console.log(curr_size_h)
   if (elementClicked.id == "a1"){
      document.querySelector("h1").style.fontSize = "250%";
      document.querySelector("div.content").style.fontSize = "200%";
   }
};

const makeSmaller = (ev) => {
   // alert('make smaller!');
   console.log("make smaller!")
   const elementClicked = ev.currentTarget;
   if (elementClicked.id == "a2"){
      document.querySelector("h1").style.fontSize = "150%";
      document.querySelector("div.content").style.fontSize = "100%";
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

