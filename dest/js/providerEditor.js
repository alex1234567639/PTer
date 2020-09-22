window.addEventListener("load",function(){
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
        $( "#tags" )
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
                document.getElementById('repeatWords').innerHTML = repeatString;
                
                return false;
            }
        });
    });
    myFunction = function(e){
        // alert(e);
        // console.log(repeatStringResult5);
        repeatStringResult5.pop(e);
        // console.log(repeatStringResult5);
        document.getElementById('tags').value += ' '+e;
    }

    document.getElementById('editBoard').onclick = function(){
        document.getElementById('tags').focus();
    }

    //markush . jepson切換
    document.getElementById('changeToJepson').onclick = function(){
        document.getElementById('providerEditorLeftBot-markush').classList.add("close");
        document.getElementById('providerEditorLeftBot-jepson').classList.add("open");
    }
    document.getElementById('changeToMarkush').onclick = function(){
        document.getElementById('providerEditorLeftBot-markush').classList.remove("close");
        document.getElementById('providerEditorLeftBot-jepson').classList.remove("open");
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

        document.getElementById('showbox').innerHTML = year+'/'+Appendzero(month)+'/'+Appendzero(day)+' '+h+':'+m+':'+s;
        setTimeout('ShowTime()',1000);
    }
    ShowTime();
},false);