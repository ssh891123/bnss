var BNSS_FIND_PW = {
    eventListener : function() {
        $('#findPwCnfm').on('click', BNSS_FIND_PW.confirm);
    }

    ,confirm : function() {
        console.log('confirm event start!');

        var findIdId = $('#findIdId').val();
        var findIdNm = $('#findIdNm').val();
        var findIdEmail = $('#findIdEmail').val();
        var findIdHpNo = $('#findIdHpNo').val();

        //POST 방식 세팅
        var form = document.createElement("form");
        form.setAttribute("charset", "UTF-8");        
        form.setAttribute("method", "post");        
        form.setAttribute("action", "/login/findPw");  
        
        // ID
        var hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "findIdId");        
        hiddenField.setAttribute("value", findIdId);        
        form.appendChild(hiddenField);
         
        // 이름
        var hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "findIdNm");        
        hiddenField.setAttribute("value", findIdNm);        
        form.appendChild(hiddenField);     
        
        // 이메일
        hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "findIdEmail");        
        hiddenField.setAttribute("value", findIdEmail);        
        form.appendChild(hiddenField);

        // 핸드폰 번호
        hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "findIdHpNo");        
        hiddenField.setAttribute("value", findIdHpNo);        
        form.appendChild(hiddenField);
              
        document.body.appendChild(form);
        var result = form.submit();

        console.log('confirm event end!');
    }    
};

$( document ).ready(function() {
    console.log("Find Pw Page Load start");
    BNSS_FIND_PW.eventListener();
    console.log("Find Pw Page Load End");
});