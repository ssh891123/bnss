$( document ).ready(function() {
    console.log('top Menu');

    var joiner = '신청자';
    var manager = '관리자';
                 
    var $nav1 = $(' <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">' +
        '<div class="container"> ' +
        '<div class="navbar-header"> ' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> ' +
        '<span class="sr-only">Toggle navigation</span> ' +
        '</button> ' +
        '<a class="navbar-brand" href="#">관리자 계정</a> ' +
        '</div> ' +
        '<div id="navbar" class="navbar-collapse collapse"> ' +
        '<ul class="nav navbar-nav"> ' +
        '<li class="dropdown"> ' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a> ' +
        '<ul class="dropdown-menu" role="menu"> ' +
        '<li><a href="#">Action</a></li> ' +
        '<li><a href="#">Another action</a></li> ' +
        '<li><a href="#">Something else here</a></li> ' +
        '</ul> ' +
        '</li> ' +
        '</ul> ' +
        '</div> ' +
        '</div> ' +
        '</nav> ' );
                 
    $('#div_topMenu').append($nav1);

    var $nav2 = $(' <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">' +
        '<div class="container"> ' +
        '<div class="navbar-header"> ' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> ' +
        '<span class="sr-only">Toggle navigation</span> ' +
        '</button> ' +
        '<a class="navbar-brand" href="#">신청자 계정</a> ' +
        '</div> ' +
        '<div id="navbar" class="navbar-collapse collapse"> ' +
        '<ul class="nav navbar-nav"> ' +
        '<li class="dropdown"> ' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a> ' +
        '<ul class="dropdown-menu" role="menu"> ' +
        '<li><a href="#">Action</a></li> ' +
        '<li><a href="#">Another action</a></li> ' +
        '<li><a href="#">Something else here</a></li> ' +
        '</ul> ' +
        '</li> ' +
        '</ul> ' +
        '</div> ' +
        '</div> ' +
        '</nav> ' );
    $('#div_topMenu2').append($nav2);

    // var nav = document.createElement('div');
    // var text = document.createTextNode('Hello');
    // div.appendChild(text);
});