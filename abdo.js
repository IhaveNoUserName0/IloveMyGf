let con = document.getElementById("container");
let msg = document.getElementById("msg");
let l1 = document.getElementById("lidOne");
let l2 = document.getElementById("lidTwo");
con.addEventListener("touchstart",()=>{
  msg.style.transform = "translateY(-90px)";
  l1.style.zIndex = "-2";
  l2.style.zIndex = "-2";
  l1.style.transform = "rotateX(90deg)";
  l2.style.transform = "rotateX(180deg)";
});
