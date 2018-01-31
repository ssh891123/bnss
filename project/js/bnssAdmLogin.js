var BNSS_LOGIN = {
    eventListener : function() {
        $('#findId').on('click', BNSS_LOGIN.findId);
        $('#findPw').on('click', BNSS_LOGIN.findPw);
        $('#btn_login').on('click', BNSS_LOGIN.onLogin);
    }

    ,findId : function() {
        window.open("../html/bnssFindIdP01.html", "FIND_ID", "width=700, height=500, left=300, top=100");
    }
    
    ,findPw : function() {
        window.open("../html/bnssFindPwP01.html", "FIND_PW", "width=700, height=500, left=300, top=100");
    }

    ,onLogin : function() {
        $.ajax({
            url: "/login/admOrUser",
            type: "POST",
            dataType: "json",
            data: {
                userId : $('#ipt_loginId').val(),
                pw : $('#ipt_loginPw').val(),
            },
            complete: function(data) {
            },
            success: function(data) {
                var authLv = data.authLv;
                
                if( authLv == 'F' ) {
                    alert("ID 또는 비밀번호가 틀립니다.");
                }

                if( authLv == 'LV1' || authLv == 'LV2' ) {      
                    location.href="../html/bnssUserReg.html";
                } else if ( authLv == 'LV3' || authLv == 'LV4' ) {  
                    location.href="../html/bnssAdmMng.html";
                } else if ( authLv == 'LV5') {                  
                    alert('개발중 나중에 로그인하면 됨');
                }                
            },
            error: function() {
            },
        });
    }
};

$( document ).ready(function() {
    console.log("Login Page Load start");
    BNSS_LOGIN.eventListener();
    console.log("Login Page Load End");
});