//拖曳bar
jQuery(document).ready(function ($) {
    $("#scale_budget").each(function () {
        let $this = $(this);
        let min = parseInt($this.data('min'));
        let max = parseInt($this.data('max'));

        $this.slider({
            animate: true,
            range: "min",
            value: 5,
            min: min,
            max: max,
            step: 1,
            slide: function (event, ui) {
                $("#scale-budget_btn_dropdown").text(ui.value);
                $("#scale-budget_input").val(ui.value);
            }
        });
    });
});

window.addEventListener("load",function(){
    //上傳檔案後，顯示檔案名稱
    // document.getElementById('uploadInput').onchange = function(){
    //     let file = document.getElementById('uploadInput');
    //     let showFileName = document.getElementById('showUploadFileName');
    //     showFileName.innerHTML = file.value.split(/(\\|\/)/g).pop();
    // }
    document.getElementById('lastStepLeftUpload').onchange = function(){
        let file = document.getElementById('lastStepLeftUpload');
        let showFileName = document.getElementById('lastStepLeftUploadFileName');
        showFileName.innerHTML = file.value.split(/(\\|\/)/g).pop();
    }
    document.getElementById('lastStepLeftUploadImg').onchange = function(){
        let file = document.getElementById('lastStepLeftUploadImg');
        let showFileName = document.getElementById('lastStepLeftUploadImgFileName');
        showFileName.innerHTML = file.value.split(/(\\|\/)/g).pop();
    }

    //matchInfo 點擊首頁explore the Marketplace彈出上鏈燈箱
    let landingPage4thContentCard = document.getElementsByClassName('landingPage4thContentCard');
    for(let i=0; i<5; i++){
        landingPage4thContentCard[i].onclick = function(){
            document.getElementById('matchInfo').classList.add("open");
        }
    }

    //matchInfo 點擊cancel關閉上鏈燈箱
    document.getElementById('matchInfoBtnReset').onclick = function(){
        document.getElementById('matchInfo').classList.remove("open");
    }
    //matchInfo 點擊continue彈出security燈箱
    document.getElementById('matchInfoBtnSubmit').onclick = function(){
        document.getElementById('matchInfo').classList.remove("open");
        document.getElementById('security').classList.add("open");
    }
    //security 點擊continue彈出securityRegist燈箱 或 securityEnforce燈箱
    document.getElementById('securityBtnSubmit').onclick = function(){
        document.getElementById('security').classList.remove("open");
        let registrationBlockChain = document.getElementById('registrationBlockChain');
        // let enforcementBlockChain = document.getElementById('enforcementBlockChain');
        if(registrationBlockChain.checked === true){
            document.getElementById('security').classList.remove("open");
            document.getElementById('securityRegist').classList.add("open");
        }else{
            document.getElementById('security').classList.remove("open");
            document.getElementById('securityEnforce').classList.add("open");
            document.getElementById('inputIdentification').value = 'EK1J24TC8';
        }
    }
    //security 點擊cancel關閉security燈箱
    document.getElementById('securityBtnReset').onclick = function(){
        document.getElementById('security').classList.remove("open");
    }
    //securityRegist 點擊cancel關閉securityRegist燈箱
    document.getElementById('securityRegistBtnReset').onclick = function(){
        document.getElementById('securityRegist').classList.remove("open");
    }
    //securityRegist 點擊continue開啟security燈箱
    document.getElementById('securityRegistBtnSubmit').onclick = function(){
        document.getElementById('securityRegist').classList.remove("open");
        document.getElementById('security').classList.add("open");
        //儲存textarea內容
        let textValue = document.getElementById('ideaDisclosure').value;
        localStorage.setItem('textValue', textValue);
    }
    //securityEnforce 點擊cancel關閉securityEnforce燈箱
    document.getElementById('securityEnforceBtnReset').onclick = function(){
        document.getElementById('securityEnforce').classList.remove("open");
    }
    //securityEnforce 點擊continue開啟personalOrCompany燈箱
    document.getElementById('securityEnforceBtnSubmit').onclick = function(){
        document.getElementById('securityEnforce').classList.remove("open");
        document.getElementById('personalOrCompany').classList.add("open");
    }
    //personalOrCompany 點擊cancel關閉personalOrCompany燈箱
    document.getElementById('personalOrCompanyBtnReset').onclick = function(){
        document.getElementById('personalOrCompany').classList.remove("open");
    }
    //personalOrCompany 點擊continue開啟lastStep燈箱
    document.getElementById('personalOrCompanyBtnSubmit').onclick = function(){
        document.getElementById('personalOrCompany').classList.remove("open");
        document.getElementById('lastStep').classList.add("open");
        let lastStepRightTextarea = document.getElementById('lastStepRightTextarea');
        lastStepRightTextarea.value = localStorage.getItem('textValue');
    }
    //lastStep 點擊cancel關閉lastStep燈箱
    document.getElementById('lastStepBtnReset').onclick = function(){
        document.getElementById('lastStep').classList.remove("open");
        localStorage.removeItem('textValue');
    }
    //lastStep 點擊continue開啟上鏈完成燈箱
    document.getElementById('lastStepBtnSubmit').onclick = function(){
        document.getElementById('lastStep').classList.remove("open");
        localStorage.removeItem('textValue');
        document.getElementById('blockChainCompleted').classList.add("open");
    }
    //上鏈完成 點擊Finish關閉上鏈完成燈箱
    document.getElementById('blockChainCompletedBtnClose').onclick = function(){
        document.getElementById('blockChainCompleted').classList.remove("open");
    }
},false);