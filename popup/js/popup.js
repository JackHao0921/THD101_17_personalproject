// ----------- 彈窗ID
// 黑背景
var modal = document.getElementById("modal");
// 聯繫我們彈窗
var commPopupId = document.getElementById("commPopupId");
// 登入會員彈窗
var popupId = document.getElementById("popupId");
// 註冊會員彈窗
var popupRegId = document.getElementById("popupRegId");
// 忘記密碼彈窗
var popupForgetId = document.getElementById("popupForgetId");
// 購物車彈窗
var popupSmCartId = document.getElementById("popupSmCartId");

// ----------- 開關按鈕
// 關閉按鈕
var btnCloses = document.querySelectorAll(".btnClose");
var cartCloseBtn = document.querySelectorAll(".cartCloseBtn")[0];
// 打開聯繫按鈕
var commBtns = document.querySelectorAll(".commBtn");
// 打開登入按鈕
var memberBtns = document.querySelectorAll(".memberBtn");
// 打開註冊按鈕
var regBtns = document.querySelectorAll(".regBtn");
// 忘記密碼按鈕
var forgetPBtns = document.querySelectorAll("#forgetPBtn");
// 開關購物車按鈕
var cartBtns = document.querySelectorAll(".cartBtn");
var cartCloseBtn = document.querySelector(".cartCloseBtn");

//-----------關閉視窗
// 關閉的所有視窗的函式
function closePopup() {
  commPopupId.classList.remove("-popup_style");
  popupId.classList.remove("-popup_style");
  popupRegId.classList.remove("-popup_style");
  popupForgetId.classList.remove("-popup_style");
  popupSmCartId.classList.remove("-carPopup_style");

  modal.classList.remove("-modal_style");
}
//點關閉按鈕關閉視窗
btnCloses.forEach(function(e) {
  e.addEventListener("click", function() {
    closePopup();
    // ----彈窗打開時固定背景
    if (modal.classList.contains("-modal_style")) {
      // 隱藏 body 捲軸
      document.body.style.overflow = "hidden";
    } else {
      // 顯示 body 捲軸
      document.body.style.overflow = "auto";
    }
  });
});

// 點黑背景關閉視窗
modal.addEventListener("click", function(){
  closePopup();
  // ----彈窗打開時固定背景
  if (modal.classList.contains("-modal_style")) {
    // 隱藏 body 捲軸
    document.body.style.overflow = "hidden";
  } else {
    // 顯示 body 捲軸
    document.body.style.overflow = "auto";
  }
});

// ----------- 填空警告
// const msginputs = document.querySelectorAll(".msginput")
// const wrongInfos = document.querySelectorAll(".wrongInfo")
// const sendBtns = document.querySelectorAll(".sendBtn")
// sendBtns.addEventListener('click', () => {
//     // 檢查輸入是否為空
//     if (msginputs.value.trim() === '') {
//       wrongInfos.style.visibility = 'visible';
//     } else {
//       $(this)onclick="window.location.href='../member/member.html'"
//     }
// });
const msgform = document.getElementById("msgform")
const wrongInfo = document.getElementById("wrongInfo")
msgform.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止默認送出

    const nameinput = document.getElementById('nameinput');
    const emailinput = document.getElementById('emailinput');
    const textinput = document.getElementById('textinput');

    // 檢查輸入是否為空
    if (nameinput.value.trim() === '' || 
        emailinput.value.trim() === '' || 
        textinput.value.trim() === '' ) {
        wrongInfo.style.visibility = 'visible';
    } else {
        msgform.submit(); // 送出
    }
});
// !====================== 打開彈窗 ======================!
// ====================== 聯繫彈窗 ======================
commBtns.forEach(function(e) {
  e.addEventListener("click", function(){
    // ----關閉其他彈窗
    // 登入會員
    popupId.classList.remove("-popup_style");
    // 註冊會員
    popupRegId.classList.remove("-popup_style");
    // 忘記密碼
    popupForgetId.classList.remove("-popup_style");
    // 小購物車
    popupSmCartId.classList.remove("-carPopup_style");
    //----打開視窗
    commPopupId.classList.add("-popup_style");
    //----打開背景
    modal.classList.add("-modal_style");
    // ----彈窗打開時固定背景
    if (modal.classList.contains("-modal_style")) {
      // 隱藏 body 捲軸
      document.body.style.overflow = "hidden";
    } else {
      // 顯示 body 捲軸
      document.body.style.overflow = "auto";
    }
  });
});
// ====================== 登入會員彈窗 ======================
memberBtns.forEach(function(e) {
  e.addEventListener("click", function() {
    // ----關閉其他彈窗
    // 聯繫我們
    commPopupId.classList.remove("-popup_style");
    // 註冊會員
    popupRegId.classList.remove("-popup_style");
    // 忘記密碼
    popupForgetId.classList.remove("-popup_style");
    // 小購物車
    popupSmCartId.classList.remove("-carPopup_style");

    //----打開視窗
    popupId.classList.add("-popup_style");
    //----打開背景
    modal.classList.add("-modal_style");
    // ----彈窗打開時固定背景
    if (modal.classList.contains("-modal_style")) {
      // 隱藏 body 捲軸
      document.body.style.overflow = "hidden";
    } else {
      // 顯示 body 捲軸
      document.body.style.overflow = "auto";
    }
  });
});
// ====================== 註冊會員彈窗 ======================
regBtns.forEach(function(e) {
  e.addEventListener("click", function() {
    // ----關閉其他彈窗
    // 聯繫我們
    commPopupId.classList.remove("-popup_style");
    // 登入會員
    popupId.classList.remove("-popup_style");
    
    // 忘記密碼
    popupForgetId.classList.remove("-popup_style");
    // 小購物車
    popupSmCartId.classList.remove("-carPopup_style");
    
    //----打開視窗
    popupRegId.classList.add("-popup_style");
    //----打開背景
    modal.classList.add("-modal_style");
    // ----彈窗打開時固定背景
    if (modal.classList.contains("-modal_style")) {
      // 隱藏 body 捲軸
      document.body.style.overflow = "hidden";
    } else {
      // 顯示 body 捲軸
      document.body.style.overflow = "auto";
    }
  });
});
// ====================== 忘記密碼彈窗 ======================
forgetPBtns.forEach(function(e) {
  e.addEventListener("click", function() {
    // ----關閉其他彈窗
    // 聯繫我們
    commPopupId.classList.remove("-popup_style");
    // 登入會員
    popupId.classList.remove("-popup_style");
    // 註冊會員
    popupRegId.classList.remove("-popup_style");
    // 小購物車
    popupSmCartId.classList.remove("-carPopup_style");
    
    //----打開視窗
    popupForgetId.classList.add("-popup_style");
    //----打開背景
    modal.classList.add("-modal_style");
    // ----彈窗打開時固定背景
    if (modal.classList.contains("-modal_style")) {
      // 隱藏 body 捲軸
      document.body.style.overflow = "hidden";
    } else {
      // 顯示 body 捲軸
      document.body.style.overflow = "auto";
    }
  });
});
// ====================== 右邊滑入小購物車視窗 ======================
cartBtns.forEach(function(cartBtn) {
  cartBtn.addEventListener("click", function() {
    // ----關閉其他彈窗
    // 聯繫我們
    commPopupId.classList.remove("-popup_style");
    // 登入會員
    popupId.classList.remove("-popup_style");
    // 註冊會員
    popupRegId.classList.remove("-popup_style");
    // 忘記密碼
    popupRegId.classList.remove("-popup_style");
    
    //----打開視窗
    popupSmCartId.classList.add("-carPopup_style");
    // ----檢查螢幕寬度是否為414
    var mediaQuery = window.matchMedia("(max-width: 414px)");
    if (mediaQuery.matches) {
      // ----打開背景
      modal.classList.add("-modal_style");
      // ----彈窗打開時固定背景
      if (modal.classList.contains("-modal_style")) {
        // 隱藏 body 捲軸
        document.body.style.overflow = "hidden";
      } else {
        // 顯示 body 捲軸
        document.body.style.overflow = "auto";
      }
    }
  });
});

//點叉叉關閉視窗
cartCloseBtn.addEventListener("click", function(){
  closePopup();
});
