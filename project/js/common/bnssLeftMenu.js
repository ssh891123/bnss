$( document ).ready(function() {
    console.log('left Menu');

    var joiner = '신청자';
    var manager = '관리자';
                 
    var $nav1 = $('<div class="col-sm-2"> ' +
    '<nav class="nav-sidebar navbar-fixed-left hidden-xs-down" > ' +
    '<ul class="nav flex-column"> ' +
    '<li class="active">  ' +
    '<a  data-class="navbar-fixed-left" href="javascript:;">신청자 접수화면</a> ' +
    '</li> ' +
    '<li> ' +
    '<a href="javascript:;">About</a> ' +
    '</li> ' +
    '<li class="nav-divider"></li> ' +
    '<li> ' +
    '<a href="javascript:;"> ' +
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
    '<a href="#">신청자 접수</a> ' +
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
    '<a href="#">회원 정보 수정</a> ' +
    '</li> ' +
    '</ul> ' +
    '</nav> ' +
    '</div> ' ); 

    $('#div_leftMenu2').append($nav2);

    // var nav = document.createElement('div');
    // var text = document.createTextNode('Hello');
    // div.appendChild(text);
});