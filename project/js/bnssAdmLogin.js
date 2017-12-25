var BNSS_LOGIN = {
    eventListener : function() {
        $('#findId').on('click', BNSS_LOGIN.findId);
        $('#findPw').on('click', BNSS_LOGIN.findPw);
    }

    ,findId : function() {
        window.open("../html/bnssFindIdP01.html", "FIND_ID", "width=700, height=500, left=300, top=100");
    }
    
    ,findPw : function() {
        window.open("../html/bnssFindPwP01.html", "FIND_PW", "width=700, height=500, left=300, top=100");
    }
};

$( document ).ready(function() {
    console.log("Login Page Load start");
    BNSS_LOGIN.eventListener();
    console.log("Login Page Load End");
});