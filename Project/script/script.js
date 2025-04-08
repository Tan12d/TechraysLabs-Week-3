/*
document.getElementById('btn2').addEventListener("click", function() {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');

    btn2.style.backgroundColor = getComputedStyle(btn1).backgroundColor;
    btn2.style.color = getComputedStyle(btn2).color;
    btn2.style.outlineColor = getComputedStyle(btn2).outlineColor;
    btn2.style.outlineOffset = getComputedStyle(btn2).outlineOffset;
    
    btn1.style.backgroundColor = "white";
    btn1.style.color = "black";
    btn1.style.outlineColor = "#94A3B8";
});


document.getElementById('btn1').addEventListener("click", function() {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');

    btn1.style.backgroundColor = "#9EB3C2";
    btn1.style.color = "#1B3B6F";
    btn1.style.outlineColor = "#1B3B6F";
    btn1.style.outlineOffset = "2px";
    
    btn2.style.backgroundColor = "#FFFFFF";
    btn2.style.color = "black";
    // btn2.style.outlineColor = "#94A3B8";
    btn2.style.outlineOffset = "2px";
});
*/

let isBtn1Active = true; // Tracks which button has the active style

  function toggleStyles() {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

    if (isBtn1Active) {
      // Apply btn1 styles to btn2
      btn2.style.backgroundColor = getComputedStyle(btn1).backgroundColor;
      btn2.style.color = getComputedStyle(btn1).color;
      btn2.style.outlineColor = getComputedStyle(btn1).outlineColor;
      btn2.style.outlineOffset = getComputedStyle(btn1).outlineOffset;

      // Reset btn1 styles
      btn1.style.backgroundColor = "white";
      btn1.style.color = "black";
      btn1.style.outlineColor = "#94A3B8";
    } else {
      // Apply btn2 styles back to btn1
      btn1.style.backgroundColor = "#9EB3C2";
      btn1.style.color = "#1B3B6F";
      btn1.style.outlineColor = "#1B3B6F";
      btn1.style.outlineOffset = "2px";

      // Reset btn2 styles
      btn2.style.backgroundColor = "white";
      btn2.style.color = "black";
      btn2.style.outlineColor = "#94A3B8";
      btn2.style.outlineOffset = "2px";
    }

    isBtn1Active = !isBtn1Active; // Toggle state
  }

  document.getElementById("btn1").addEventListener("click", toggleStyles);
  document.getElementById("btn2").addEventListener("click", toggleStyles);