window.onload=function(){
    let join = document.getElementById('join');
    let regist = document.getElementById('regist');
    let cross = document.getElementById('cross');
    let alreadyMember = document.getElementById('alreadyMember');

    let signIn = document.getElementById('signIn');
    let login = document.getElementById('login');
    let loginCross = document.getElementById('loginCross');
    //點擊註冊彈出註冊燈箱
    join.onclick = function(){      
        regist.classList.add("open");
    }
    //點擊叉叉關閉註冊燈箱
    cross.onclick = function(){      
        regist.classList.remove("open");
    }
    //點擊已是會員－登入，關閉註冊燈箱
    alreadyMember.onclick = function(){      
        regist.classList.remove("open");
        login.classList.add("open");
    }

    //點擊登入彈出登入燈箱
    signIn.onclick = function(){     
        login.classList.add("open");
    }
    //點擊叉叉關閉登入燈箱
    loginCross.onclick = function(){      
        login.classList.remove("open");
    }

    //點擊 Be a Provider彈出燈箱
    document.getElementById('beAprovider').onclick = function(){
        document.getElementById('providerRegist').classList.add("open");
    }
    //點擊叉叉關閉燈箱
    // document.getElementById('providerRegistCross').onclick = function(){      
    //     document.getElementById('providerRegist').classList.remove("open");
    // }
    //點擊返回關閉燈箱
    document.getElementById('formBtnReset').onclick = function(){     
        document.getElementById('providerRegist').classList.remove("open");
    }
}


//寫手註冊燈箱
//選擇大頭照後顯示預覽在畫面上
window.addEventListener("load", function(){
	document.getElementById("chooseFileLabel").onchange = function(e){
        console.log('123');
        document.getElementById("showPhoto").innerHTML = `<img id="imgPreview">`;
		let file = e.target.files[0];
		let reader = new FileReader();
		reader.onload = function(){       //讀取完畢後執行function
			document.getElementById("imgPreview").src = reader.result;
		}
		reader.readAsDataURL(file);
	}
})