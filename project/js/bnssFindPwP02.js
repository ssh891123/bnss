var BNSS_FIND_PW_UPD = {

    init : function() {
        //ID 세팅
        $('#userId').val($('#param_userId').text());
    }

    ,eventListener : function() {
        //확인 버튼
        $('#findPwCnfm').on('click', BNSS_FIND_PW_UPD.confirm);
    }    

    ,confirm : function() {
        console.log('confirm event start!');

        var userId = $('#userId').val();
        var newPw = $('#newPw').val();        

        //비밀번호 validation
        if( !BNSS_FIND_PW_UPD.validationForPw() ) {
            return;
        }

        //POST 방식 세팅
        var form = document.createElement("form");
        form.setAttribute("charset", "UTF-8");        
        form.setAttribute("method", "post");        
        form.setAttribute("action", "/login/findPwUpd");  
        
        //ID
        var hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "userId");        
        hiddenField.setAttribute("value", userId);        
        form.appendChild(hiddenField);
         
        //비밀번호
        var hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "newPw");        
        hiddenField.setAttribute("value", newPw);        
        form.appendChild(hiddenField);         
              
        document.body.appendChild(form);
        form.submit();

        console.log('confirm event end!');
    }

    ,validationForPw : function() {
        var newPw = $('#newPw').val();
        var newPwCnfm = $('#newPwCnfm').val();

        if( newPw == null || newPw == '' || newPwCnfm == null || newPwCnfm == '') {
            alert('비밀번호를 입력해주세요.');
            return false;
        }

        if( newPw != newPwCnfm ) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }

        return true;
    }
};

$( document ).ready(function() {
    console.log("Find Pw Confirm Page Load start");
    
    BNSS_FIND_PW_UPD.init();
    BNSS_FIND_PW_UPD.eventListener();
    
    console.log("Find Pw Confirm Page Load end");
});