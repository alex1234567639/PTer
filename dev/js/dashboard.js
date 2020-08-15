//tab切換內容
function tabChange(evt, tabName) {
    var i, tabcontent, tablinks; 

    //將所有 class="tabcontent" 的標籤隱藏
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //將所有 class="tablinks" 的 class="active" 移除
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show 出點擊的tab內容並加上 class="active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//預設載入網頁後點擊第一個tab
document.getElementById("dashboardRightTopTabButton1").click();

// function move() {
//   var elem = document.getElementById("myBar"); 
//   var width = 10;
//   var id = setInterval(frame, 10);
//   function frame() {
//       if (width >= 100) {
//           clearInterval(id);
//       } else {
//           width++; 
//           elem.style.width = width + '%'; 
//           document.getElementById("label").innerHTML = width * 1 + '%';
//       }
//   }
// }

window.onload=function(){
  //點擊付款，彈出付款燈箱
  document.getElementById('dashboardRightTopTabContent1Part1BtnPay').onclick = function(){
    document.getElementById('payBill').classList.add("open");
  }
  //點擊取消訂單，關閉燈箱
    document.getElementById('detailForPayBillBtnCancel').onclick = function(){     
     document.getElementById('payBill').classList.remove("open");
  }
  
  //點擊聯絡我，彈出聯絡燈箱
  $('.dashboardRightTopTabContent1Part1BtnContact').each(function () {
    $(this).click(function(){
    	document.getElementById('contactMe').classList.add("open");
    });
  });
  //點擊取消，關閉聯絡燈箱
  document.getElementById('contactMeLightboxBtnCancel').onclick = function(){     
    document.getElementById('contactMe').classList.remove("open");
    document.getElementById('contactMeLightboxAttachmentThing').innerHTML = '';
    document.getElementById('contactMeLightboxPhotoThing').innerHTML = '';
  } 
}

//在textarea輸入時，監控輸入的字數
var txt = document.getElementById("contactMeLightboxTextarea");
var txtNum = document.getElementById("txtcontactMeLightboxTextareaNum");
var sw = false; //定義關閉的開關
txt.addEventListener("keyup", function(){
  if(sw == false){
    countTxt();
  }
});

txt.addEventListener("compositionstart", function(){
  sw = true;
});

txt.addEventListener("compositionend", function(){
  sw = false;
  countTxt();
});

function countTxt(){ //計數函式
  if(sw == false){ //只有開關關閉時，才賦值
    txtNum.textContent = txt.value.length;
  }
}

//上傳檔案後，顯示檔案名稱
document.getElementById('contactMeLightboxAttachment').onchange = function(){
  let attachment = document.getElementById('contactMeLightboxAttachment');
  let attachmentThing = document.getElementById('contactMeLightboxAttachmentThing');
  attachmentThing.innerHTML = attachment.value.split(/(\\|\/)/g).pop();
}
document.getElementById('contactMeLightboxPhoto').onchange = function(){
  let photo = document.getElementById('contactMeLightboxPhoto');
  let photoThing = document.getElementById('contactMeLightboxPhotoThing');
  photoThing.innerHTML = photo.value.split(/(\\|\/)/g).pop();
}