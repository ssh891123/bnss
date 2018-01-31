$( document ).ready(function() {
    console.log('left Menu');

    var joiner = '신청자';
    var manager = '관리자';
                 
    var $nav1 = $('<div class="col-sm-2"> ' +
    '<nav class="nav-sidebar navbar-fixed-left hidden-xs-down" > ' +
    '<ul class="nav flex-column"> ' +
    '<li class="active">  ' +
    '<a href="bnssAdmMng.html">세미나 접수 관리</a> ' +
    '</li> ' +
    '<li> ' +
    '<a href="bnssSeminarReg.html">세미나 등록 </a> ' +
    '</li> ' +
    '<li> ' +
    '<a href="bnssAdmMng2.html">사용자 등록 내역</a> ' +
    '</li> ' +
    '<li class="nav-divider"></li> ' +
    '<li> ' +
    '<a href="bnssAdmLogin.html"> ' +
    '<i class="glyphicon glyphicon-off"></i> Log Out</a> ' +
    '</li> ' +
    '</ul> ' +
    '</nav> ' +
    '</div> ' );       

    $('#div_leftMenu').append($nav1);

    var $nav2 = $('<div class="col-sm-2"> ' +
    '<nav class="nav-sidebar navbar-fixed-left hidden-xs-down" > ' +
    '<ul class="nav flex-column"> ' +
    '<li class="active">  ' +
    '<a href="bnssUserReg.html">신청자 접수</a> ' +
    '</li> ' +
    '<li> ' +
    '<a href="bnssUserSmnResult.html">세미나 신청 결과</a> ' +
    '</li> ' +
    '<li> ' +
    '<a href="#">세미나 신청 내역</a> ' +
    '</li> ' +
    '<li class="nav-divider"></li> ' +
    '<li> ' +
    '<a href="bnssAdmLogin.html"> ' +
    '<i class="glyphicon glyphicon-off"></i> Log Out</a> ' +
    '</li> ' +
    '<li> ' +
    '<a href="bnssUserModify.html">회원 정보 수정</a> ' +
    '</li> ' +
    '</ul> ' +
    '</nav> ' +
    '</div> ' ); 

    $('#div_leftMenu2').append($nav2);

    // var nav = document.createElement('div');
    // var text = document.createTextNode('Hello');
    // div.appendChild(text);
});