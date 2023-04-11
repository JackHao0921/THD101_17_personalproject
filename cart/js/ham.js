// 取得漢堡列按鈕及導覽列元素
const menuBtn = document.querySelector(".menu-btn-rwd");
const navbar = document.querySelector(".navbar-rwd");
const modalRwd = document.querySelector(".modal-rwd");
const navbarItems = document.querySelectorAll(".navbar-rwd li");
const rwdNavBg = document.getElementsByClassName('rwdNavBg')[0];

// 在寬度414時，滑鼠往下滾之後導覽列自動出現底色
// 監聽畫面寬度是否小於 414
const mediaQuery = window.matchMedia('(max-width: 414px)');

// 如果畫面寬度小於 414，則監聽頁面滾動事件，顯示或隱藏按鈕
if (mediaQuery.matches) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      rwdNavBg.style.opacity = '.4';
    } else {
      rwdNavBg.style.opacity = '0';
    }
  });
}

// 當漢堡列按鈕被點
menuBtn.addEventListener('click',function(){
  menuBtn.classList.toggle("open");
  modalRwd.classList.toggle("-modal_style");
  navbar.classList.toggle("open");

  // 切換導覽列的開關狀態
  if (navbar.classList.contains("open")) {
    // 開啟時固定背景滾動
    document.body.style.overflow = "hidden";
  } else {
    // 關閉時恢復背景滾動
    document.body.style.overflow = "auto";
  }
});

// 點黑背景時關閉導覽列
modalRwd.addEventListener('click',function(){
  menuBtn.classList.remove("open");
  modalRwd.classList.remove("-modal_style");
  navbar.classList.remove("open");

  // 關閉時恢復背景滾動
  document.body.style.overflow = "auto";
});

// 導覽列項目被點時的樣式
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