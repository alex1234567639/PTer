window.addEventListener("load",function(){
    //markush
    var repeatStringResult5 = [];
    $(function() {
        var availableTags = [
            "medium segment",
            "transmission",
            "availableTags",
            "a first",
            "a second",
            "a third",
            "An analog surface wave multi-point repeater comprising:"
        ];

        function split( val ) {
            return val.split( ' ' );
        }

        function extractLast( term ) {
            //輸入的值
            return split( term ).pop();
        }

        // let repeatString = '';
        $( "#tags-markush" )
        .bind( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 0,
            source: function( request, response ) {
                //回到 autocomplete，但是提取最后的条目
                response( $.ui.autocomplete.filter(
                availableTags, extractLast( request.term ) ) );
            },
            search: function() {
                // 自定義最小長度
                var term = extractLast( this.value );
                if ( term.length < 1 ) {
                    return false;
                }
            },
            focus: function() {
                // 防止在获得焦点时插入值
                return false;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                // 移除當前输入
                terms.pop();
                // 添加被选项
                terms.push( ui.item.value );
                //將陣列所有內容取出，以空格連接
                this.value = terms.join( " " );
                // console.log(terms);
                //挑出重複的值放入陣列
                var repeat = terms.filter(function(element, index, arr){
                    return arr.indexOf(element) !== index;
                });
                //去除陣列中重複的值
                var repeatStringResult = repeat.filter(function(element, index, arr){
                    return arr.indexOf(element) === index;
                });
                //去除陣列中長度少於5的值
                repeatStringResult5 = repeatStringResult.filter(function(element, index, arr){
                    return element.length>=7;
                });
                var repeatString = '';
                for(let i=0; i<repeatStringResult5.length; i++){
                    // repeatString += ' '+repeat[i];
                    repeatString += ' ' + `<button class="suggestBtn" onclick="myFunction('${repeatStringResult5[i]}');">${repeatStringResult5[i]}</button>`;
                }
                
                console.log(repeatStringResult);
                console.log(repeatStringResult5);
                document.getElementById('repeatWords-markush').innerHTML = repeatString;
                
                return false;
            }
        });
    });
    myFunction = function(e){
        // alert(e);
        // console.log(repeatStringResult5);
        repeatStringResult5.pop(e);
        // console.log(repeatStringResult5);
        document.getElementById('tags-markush').value += ' '+e;
    }

    //jepson
    var repeat2StringResult5 = [];
    $(function() {
        var availableTags = [
            "medium segment",
            "transmission",
            "availableTags",
            "a first",
            "a second",
            "a third",
            "An analog surface wave multi-point repeater comprising:"
        ];

        function split( val ) {
            return val.split( ' ' );
        }

        function extractLast( term ) {
            //輸入的值
            return split( term ).pop();
        }

        // let repeatString = '';
        $( "#tags-jepson" )
        .bind( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 0,
            source: function( request, response ) {
                //回到 autocomplete，但是提取最后的条目
                response( $.ui.autocomplete.filter(
                availableTags, extractLast( request.term ) ) );
            },
            search: function() {
                // 自定義最小長度
                var term = extractLast( this.value );
                if ( term.length < 1 ) {
                    return false;
                }
            },
            focus: function() {
                // 防止在获得焦点时插入值
                return false;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                // 移除當前输入
                terms.pop();
                // 添加被选项
                terms.push( ui.item.value );
                //將陣列所有內容取出，以空格連接
                this.value = terms.join( " " );
                // console.log(terms);
                //挑出重複的值放入陣列
                var repeat = terms.filter(function(element, index, arr){
                    return arr.indexOf(element) !== index;
                });
                //去除陣列中重複的值
                var repeatStringResult = repeat.filter(function(element, index, arr){
                    return arr.indexOf(element) === index;
                });
                //去除陣列中長度少於5的值
                repeat2StringResult5 = repeatStringResult.filter(function(element, index, arr){
                    return element.length>=7;
                });
                var repeatString = '';
                for(let i=0; i<repeat2StringResult5.length; i++){
                    // repeatString += ' '+repeat[i];
                    repeatString += ' ' + `<button class="suggestBtn" onclick="my2Function('${repeat2StringResult5[i]}');">${repeat2StringResult5[i]}</button>`;
                }
                
                console.log(repeatStringResult);
                console.log(repeat2StringResult5);
                document.getElementById('repeatWords-jepson').innerHTML = repeatString;
                
                return false;
            }
        });
    });
    my2Function = function(e){
        // alert(e);
        // console.log(repeat2StringResult5);
        repeat2StringResult5.pop(e);
        // console.log(repeat2StringResult5);
        document.getElementById('tags-jepson').value += ' '+e;
    }
    

    document.getElementById('editBoard-markush').onclick = function(){
        document.getElementById('tags-markush').focus();
    }
    document.getElementById('editBoard-jepson').onclick = function(){
        document.getElementById('tags-jepson').focus();
    }

    //markush . jepson切換
    document.getElementById('changeToJepson').onclick = function(){
        document.getElementById('providerEditorLeftBot-markush').classList.add("close");
        document.getElementById('providerEditorLeftBot-jepson').classList.add("open");
        document.getElementById('editBoard-markush').classList.add("close");
        document.getElementById('editBoard-jepson').classList.add("open");
    }
    document.getElementById('changeToMarkush').onclick = function(){
        document.getElementById('providerEditorLeftBot-markush').classList.remove("close");
        document.getElementById('providerEditorLeftBot-jepson').classList.remove("open");
        document.getElementById('editBoard-markush').classList.remove("close");
        document.getElementById('editBoard-jepson').classList.remove("open");
    }

    //顯示時間
    ShowTime = function(){
        var NowDate=new Date();
        var year=NowDate.getFullYear();
        var month=NowDate.getMonth()+1;
        var day=NowDate.getDate();
        var h=NowDate.getHours();
        var m=NowDate.getMinutes();
        var s=NowDate.getSeconds();　

        //小於10的數在前面補0
        function Appendzero(obj){
            if(obj<10) return "0" +""+ obj;
            else return obj;
        }

        document.getElementById('showbox').innerHTML = year+'/'+Appendzero(month)+'/'+Appendzero(day)+' '+Appendzero(h)+':'+Appendzero(m)+':'+Appendzero(s);
        setTimeout('ShowTime()',1000);
    }
    ShowTime();

    //輸入超過一定字數後，顯示專利照片
    document.getElementById('tags-markush').addEventListener("keyup", add = function(){
        let value = document.getElementById('tags-markush');
        console.log(value.value.length);
        if(value.value.length>=56){
            document.getElementById('patentImg').style.display = 'block';
            document.getElementById('tags-markush').removeEventListener("keyup",add,false);
        }
    },false)
    //點擊close，關閉專利照片
    document.getElementById('closePatentImg').onclick = function(){
        document.getElementById('patentImg').style.display = 'none';
    }

    //圖片庫 點擊圖片庫icon，顯示圖片庫燈箱
    document.getElementById('library-markush').onclick = function(){
        document.getElementById('libraryPopUp').classList.add("open");
    }
    document.getElementById('library-jepson').onclick = function(){
        document.getElementById('libraryPopUp').classList.add("open");
    }
    //圖片庫 點擊叉叉，關閉圖片庫燈箱
    document.getElementById('libraryCross').onclick = function(){
        document.getElementById('libraryPopUp').classList.remove("open");
        for(let i=0; i<13; i++){
            document.getElementsByClassName('libraryImg')[i].style.width = "160px";
            document.getElementsByClassName('libraryImg')[i].style.height = "200px";
            document.getElementsByClassName('libraryImg')[i].style.border = "1px solid lightgray";
        }
    }
    //圖片庫 點擊圖片庫中圖片，放大
    for(let i=0; i<13; i++){
        document.getElementsByClassName('libraryImg')[i].onclick = function(){
            for(let i=0; i<13; i++){
                document.getElementsByClassName('libraryImg')[i].style.width = "160px";
                document.getElementsByClassName('libraryImg')[i].style.height = "200px";
                document.getElementsByClassName('libraryImg')[i].style.border = "1px solid lightgray";
            }
            this.style.width = "340px";
            this.style.height = "470px";
            this.style.border = "1px solid rgb(19, 64, 153)";
        }
    }
},false);