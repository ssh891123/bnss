$( document ).ready(function() {
    console.log('left Menu');

    var joiner = '신청자';
    var manager = '관리자';
                 
    var $nav1 = $('<div class="col-sm-2"> ' +
    '<nav class="nav-sidebar navbar-fixed-left hidden-xs-down" > ' +
    '<ul class="nav flex-column"> ' +
    '<li class="active">  ' +
    '<a href="javascript:;">Home</a> ' +
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
    '<a href="javascript:;">Home</a> ' +
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

    $('#div_leftMenu2').append($nav2);

    // var nav = document.createElement('div');
    // var text = document.createTextNode('Hello');
    // div.appendChild(text);
});