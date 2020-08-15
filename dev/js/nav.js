// window.onload=function(){
window.addEventListener("load",function(){
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
    //登入，點擊fb彈出完成燈箱
    document.getElementById('fb').onclick = function(){ 
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';    
        document.getElementById('login').classList.remove("open");
        document.getElementById('providerRegistSucess').classList.add("open");
    }
    //登入，點擊google彈出完成燈箱
    document.getElementById('google').onclick = function(){ 
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';    
        document.getElementById('login').classList.remove("open");
        document.getElementById('providerRegistSucess').classList.add("open");
    }
    //登入，點擊登入彈出完成燈箱
    document.getElementById('loginFormLogin').onclick = function(){  
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';   
        document.getElementById('login').classList.remove("open");
        document.getElementById('providerRegistSucess').classList.add("open");
    }

    //點擊 Be a Provider彈出燈箱
    document.getElementById('beAprovider').onclick = function(){
        document.getElementById('providerRegist').classList.add("open");
    }
    //點擊返回關閉燈箱
    document.getElementById('formBtnReset').onclick = function(){     
        document.getElementById('providerRegist').classList.remove("open");
    }
    //點擊繼續關閉燈箱，彈出完成燈箱
    document.getElementById('formBtnSubmit').onclick = function(){     
        document.getElementById('providerRegist').classList.remove("open");
        document.getElementById('providerRegistSucess').classList.add("open");
    }

    //點擊Later關閉燈箱
    document.getElementById('providerRegistSucessLater').onclick = function(){     
        document.getElementById('providerRegistSucess').classList.remove("open");
    }

    //點擊登入後頭像，彈出登出選項
    document.getElementById('navLi4').onclick = function(){  
        console.log('123');  
        let navLi4Logout = document.getElementById('navLi4Logout');
        if(navLi4Logout.classList.contains('open')){
            navLi4Logout.classList.remove("open");
        }else{
            navLi4Logout.classList.add("open");
        }
    }

    //註冊，點擊各種註冊鍵後切換到登入狀態
    document.getElementById('registBtn').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('regist').classList.remove("open");
    }
    document.getElementById('registFB').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('regist').classList.remove("open");
    }
    document.getElementById('registGoogle').onclick = function(){   
        document.getElementById('nav').style.display = 'none';
        document.getElementById('nav2').style.display = 'block';
        document.getElementById('regist').classList.remove("open");
    }

    //點擊logout，切換到登出狀態
    document.getElementById('navLi4Logout').onclick = function(){   
        document.getElementById('nav').style.display = 'block';
        document.getElementById('nav2').style.display = 'none';
        document.getElementById('navLi4Logout').classList.remove("open");
    }
},false);


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