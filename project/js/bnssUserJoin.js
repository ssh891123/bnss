var BNSS_USER_JOIN = {
    
    eventListener : function() {
        $('#join_req').on('click', BNSS_USER_JOIN.request);
        //$('#btn_idDupChk').on('click', BNSS_USER_JOIN.chkIdDup);

        $('#join_userTelNo').addEventListener("input", myFunction);
        // document.getElementById("join_userTelNo").addEventListener("input", myFunction);
    }



    ,chkIdDup : function() {
        console.log('asdfasdf');
        var joinId = $('#join_userId').val();

        //POST 방식 세팅
        var form = document.createElement("form");
        form.setAttribute("charset", "UTF-8");        
        form.setAttribute("method", "post");        
        form.setAttribute("action", "/userJoin/chkIdDup");        
         
        // ID
        var hiddenField = document.createElement("input");        
        hiddenField.setAttribute("type", "hidden");        
        hiddenField.setAttribute("name", "joinId");        
        hiddenField.setAttribute("value", joinId);        
        form.appendChild(hiddenField);

        document.body.appendChild(form);
        var result = form.submit();
    }

    ,chkValidation : function() {
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
        if( BNSS_USER_JOIN.chkValidation() ){
            
            //POST 방식 세팅
            var form = document.createElement("form");
            form.setAttribute("charset", "UTF-8");        
            form.setAttribute("method", "post");        
            form.setAttribute("action", "/userJoin");        
            
            // ID
            var hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinId");        
            hiddenField.setAttribute("value", joinId);        
            form.appendChild(hiddenField);
            
            // PW
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinPw");        
            hiddenField.setAttribute("value", joinPw);        
            form.appendChild(hiddenField);

            // E-mail
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinEmail");        
            hiddenField.setAttribute("value", joinEmail);        
            form.appendChild(hiddenField);

            // Phone No.
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinTelNo");        
            hiddenField.setAttribute("value", joinTelNo);        
            form.appendChild(hiddenField);
                
            // 이름
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinNm");        
            hiddenField.setAttribute("value", joinNm);        
            form.appendChild(hiddenField);

            // 성별
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinGen");        
            hiddenField.setAttribute("value", joinGen);        
            form.appendChild(hiddenField);

            // 생년월일
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");        
            hiddenField.setAttribute("name", "joinBirth");        
            hiddenField.setAttribute("value", joinBirth);        
            form.appendChild(hiddenField);

            // 교회
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", "joinChurchNm");        
            hiddenField.setAttribute("value", joinChurchNm);        
            form.appendChild(hiddenField);
            
            // 교회 우편번호
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", "joinChurchZipCd");        
            hiddenField.setAttribute("value", joinChurchZipCd);        
            form.appendChild(hiddenField);

            // 교회 상세주소
            hiddenField = document.createElement("input");        
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", "joinChurchAddr");        
            hiddenField.setAttribute("value", joinChurchAddr);        
            form.appendChild(hiddenField);

            document.body.appendChild(form);
            var result = form.submit();
        }        
    }
};


$( document ).ready(function() {
    console.log("User Join Page Load start");
    BNSS_USER_JOIN.eventListener();
    console.log("User Join Page Load End");
});