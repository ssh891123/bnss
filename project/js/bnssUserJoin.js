var BNSS_USER_JOIN = {
    _passIdChk : false,
    _passEmailChk : false,

    eventListener : function() {
        $('#join_req').on('click', BNSS_USER_JOIN.request);
        $('#btn_idDupChk').on('click', BNSS_USER_JOIN.chkIdDup);
        $('#btn_emailDupChk').on('click', BNSS_USER_JOIN.chkEmailDup);
        $('#join_userEmail').on('focusout', function() {
            var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            var email = $('#join_userEmail').val();

            if(email.match(regExp) == null) {
                alert( 'Email 형식을 준수해주세요. ex) bboong@naver.com' );
                return;
            } 
        });
    }

    ,chkIdDup : function() {
        var id = $('#ipt_loginId').val();
        if( id == null || id == '' || id == undefined ){
            alert( 'ID 를 입력해주세요.' );
            return;
        }

        var pw = $('#ipt_loginPw').val();
        if( pw == null || pw == '' || pw == undefined ){
            alert( 'PW 를 입력해주세요.' );
            return;
        }

        $.ajax({
            url: "/userJoin/chkIdDup",
            type: "POST",
            dataType: "json",
            data: {
                userId : id,
                pw : pw
            },
            complete: function(data) {
            },
            success: function(data) {
                var count = data.chkCnt;
                if( count == 0 ) {
                    alert( chkId + '는 사용할 수 있습니다.' );
                    BNSS_USER_JOIN._passIdChk = true;
                    $('#join_userId').attr('readonly', 'true');
                } else {
                    alert( chkId + '는 이미 존재합니다. 다른 ID를 입력해 주세요.' );
                }


                
            },
            error: function() {
            },
        });
    }

    ,chkEmailDup : function() {
        var chkEmail = $('#join_userEmail').val();

        if( chkEmail == null || chkEmail == '' || chkEmail == undefined ) {
            alert( 'Email을 입력해주세요.' );
            return;
        }

        $.ajax({
            url: "/userJoin/chkEmailDup",
            type: "POST",
            dataType: "json",
            data: {
                joinEmail : chkEmail
            },
            complete: function(data) {
            },
            success: function(data) {
                var count = data.chkCnt;
                if( count == 0 ) {
                    alert( chkEmail + '는 사용할 수 있습니다.' );
                    BNSS_USER_JOIN._passEmailChk = true;
                    $('#join_userEmail').attr('readonly', 'true');
                } else {
                    alert( chkEmail + '는 이미 존재합니다. 다른 Email을 입력해 주세요.' );
                }
            },
            error: function() {
            },
        });
    }

    ,chkValidation : function() {
        //ID 중복 체크 검사
        if( !BNSS_USER_JOIN._passIdChk ) {
            alert( 'ID 중복체크를 해주세요.' );
        }

        //EMAIL 중복 체크 검사
        if( !BNSS_USER_JOIN._passEmailChk ) {
            alert( 'Email 중복체크를 해주세요.' );
        }

        // ID Null Check
        var id = $('#join_userId').val();
        if( id == null || id == '') {
            alert('ID를 입력해주세요.');
            return false;
        }

        // 비밀번호 정합성 체크
        var pw = $('#join_userPw').val();
        var newPw = $('#join_userPwCnfm').val();

        if( pw == null || pw == '' || newPw == null || newPw == '') {
            alert('비밀번호를 입력해주세요.');
            return false;
        }

        if( pw != newPw ) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }

        // EMAIL 정합성 체크
        var email = $('#join_userEmail').val();
        if( email == null || email == '') {
            alert('E-Mail 주소를 입력해주세요.');
            return false;
        }

        // 휴대폰 번호 Null 체크
        var hpNo = $('#join_userTelNo').val();
        if( hpNo == null || hpNo == '') {
            alert('휴대폰 번호를 입력해주세요.');
            return false;
        }

        // 이름 Null 체크
        var nm = $('#join_userNm').val();
        if( nm == null || nm == '') {
            alert('이름을 입력해주세요.');
            return false;
        }

        // 성별 Null 체크
        var genderChk = !$('#join_genderIsM')[0].checked && !$('#join_genderIsF')[0].checked ? false : true ;
        if( !genderChk ) {
            alert('성별을 체크해주세요.');
            return false;
        }

        // 생년월일 Null 체크
        var birth = $('#join_userBirth').val();
        if( birth == null || birth == '') {
            alert('생년월일을 입력해주세요.');
            return false;
        }

        // 교회 이름 Null 체크
        var churchNm = $('#join_churchNm').val();
        if( churchNm == null || churchNm == '') {
            alert('교회 이름을 입력해주세요.');
            return false;
        }

        // 교회 주소 Null 체크
        var zipCd = $('#join_churchZipCd').val();
        if( zipCd == null || zipCd == '') {
            alert('우편번호를 입력해주세요.');
            return false;
        }

        var srchAddr = $('#join_churchSrchAddr').val();
        if( srchAddr == null || srchAddr == '') {
            alert('검색주소를 입력해주세요.');
            return false;
        }

        var detlAddr = $('#join_churchDetlAddr').val();
        if( detlAddr == null || detlAddr == '') {
            alert('상세주소를 입력해주세요.');
            return false;
        }

        return true;
    }

    ,request : function() {
        var joinId = $('#join_userId').val();
        var joinPw = $('#join_userPw').val();
        var joinEmail = $('#join_userEmail').val();
        var joinTelNo = $('#join_userTelNo').val();
        var joinNm = $('#join_userNm').val();
        var joinGen = $('#join_genderIsM')[0].checked ? 'M' : 'F';
        var joinBirth = $('#join_userBirth').val();
        var joinChurchNm = $('#join_churchNm').val();
        var joinChurchZipCd = $('#join_churchZipCd').val();
        var joinChurchAddr = $('#join_churchSrchAddr').val() + ' ' + $('#join_churchDetlAddr').val();

        //밸리데이션 체크
        if( !BNSS_USER_JOIN.chkValidation() ){                     
            return;
        }        

        $.ajax({
            url: "/userJoin",
            type: "POST",
            dataType: "json",
            data: {
                joinId : joinId,
                joinPw : joinPw,
                joinEmail : joinEmail,
                joinTelNo : joinTelNo,
                joinGen : joinGen,
                joinBirth : joinBirth,
                joinChurchNm : joinChurchNm,
                joinChurchZipCd : joinChurchZipCd,
                joinChurchAddr : joinChurchAddr
            },
            complete: function(data) {
            },
            success: function(data) {
                if(data.res == 'S'){
                    alert("성공적으로 가입이 되었습니다. 로그인 하세요.");
                    location.href="../html/bnssAdmLogin.html";
                } else if(data.res == 'F'){
                    alert("회원가입에 실패하였습니다. 관리자에게 문의하세요.");
                    location.href="../html/bnssUserJoin.html";
                }
            },
            error: function() {
            },
        });
    }
};


$( document ).ready(function() {
    console.log("User Join Page Load start");
    BNSS_USER_JOIN.eventListener();
    console.log("User Join Page Load End");
});