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
}