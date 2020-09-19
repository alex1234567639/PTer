window.addEventListener("load",function(){
    //上傳檔案後，顯示檔案名稱
    document.getElementById('uploadInput').onchange = function(){
        let file = document.getElementById('uploadInput');
        let showFileName = document.getElementById('showUploadFileName');
        showFileName.innerHTML = file.value.split(/(\\|\/)/g).pop();
    }

    //點擊首頁explore the Marketplace彈出上鏈燈箱
    let landingPage4thContentCard = document.getElementsByClassName('landingPage4thContentCard');
    for(let i=0; i<5; i++){
        landingPage4thContentCard[i].onclick = function(){
            document.getElementById('matchInfo').classList.add("open");
        }
    }
    //點擊cancel關閉上鏈燈箱
    document.getElementById('matchInfoBtnReset').onclick = function(){
        document.getElementById('matchInfo').classList.remove("open");
    }
},false);