// 取得漢堡列按鈕及導覽列元素
const menuBtn = document.querySelector(".menu-btn-rwd");
const navbar = document.querySelector(".navbar-rwd");

// 當漢堡列按鈕被點
menuBtn.addEventListener('click',function(){
    // console.log('test')
    menuBtn.classList.toggle("open");
  
  // 切換導覽列的開關狀態
  navbar.classList.toggle("open");
})

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