/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (ev) => {
   const domElement = ev.currentTarget;
   console.log(domElement);
   document.querySelector("body").className = domElement.id;
}

document.querySelector("#default").onclick = changeTheme;
document.querySelector("#desert").onclick = changeTheme;
document.querySelector("#ocean").onclick = changeTheme;
document.querySelector("#high-contrast").onclick = changeTheme;