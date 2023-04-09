const menuBtn = document.querySelector(".menu-btn-rwd");
const navbar = document.querySelector(".navbar-rwd");
const modalRwd = document.querySelector(".modal-rwd");
const menuContent = document.querySelector(".menu-content");

menuBtn.addEventListener('click',function(){
  menuBtn.classList.toggle("open");
  modalRwd.classList.toggle("-modal_style");
  navbar.classList.toggle("open");

  if (navbar.classList.contains("open")) {
    // 隱藏 body 捲軸
    document.body.style.overflow = "hidden";
    // 顯示菜單內容捲軸
    menuContent.style.overflowY = "scroll";
  } else {
    // 顯示 body 捲軸
    document.body.style.overflow = "auto";
    // 隱藏菜單內容捲軸
    menuContent.style.overflowY = "hidden";
  }
});

modalRwd.addEventListener('click',function(){
  menuBtn.classList.toggle("open");
  modalRwd.classList.toggle("-modal_style");
  navbar.classList.toggle("open");

  // 顯示 body 捲軸
  document.body.style.overflow = "auto";
  // 隱藏菜單內容捲軸
  menuContent.style.overflowY = "hidden";
});

const navbarItems = document.querySelectorAll(".navbar-rwd li");
navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 移除所有項目的 active class
    navbarItems.forEach((item) => {
      item.classList.remove("active");
    });

    // 為被點擊的項目加上 active class
    item.classList.add("active");
  });
});


// // 取得漢堡列按鈕及導覽列元素
// const menuBtn = document.querySelector(".menu-btn-rwd");
// const navbar = document.querySelector(".navbar-rwd");
// const modalRwd = document.querySelector(".modal-rwd");
// // 當漢堡列按鈕被點
// menuBtn.addEventListener('click',function(){
//     // console.log('test')
//     menuBtn.classList.toggle("open");
//     modalRwd.classList.toggle("-modal_style");
  
//   // 切換導覽列的開關狀態
//   navbar.classList.toggle("open");
// })

// modalRwd.addEventListener('click',function(){
//   menuBtn.classList.toggle("open");
//   modalRwd.classList.toggle("-modal_style");
//   navbar.classList.toggle("open");
// });

// const navbarItems = document.querySelectorAll(".navbar-rwd li");
// navbarItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // 移除所有項目的 active class
//     navbarItems.forEach((item) => {
//       item.classList.remove("active");
//     });

//     // 為被點擊的項目加上 active class
//     item.classList.add("active");
//   });
// });