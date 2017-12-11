$(document).ready(function(){
    // var i=1;
//    $("#add_row").click(function(){
//     $('#addr'+i).html("<td>"+
//      (i+1) +
//      "</td><td><input name='name"+
//      i+
//      "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+
//      i+
//      "' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+
//      i+
//      "' type='text' placeholder='Mobile'  class='form-control input-md'></td>");

//     $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
//     i++; 
// });
var num = 1;
var churchName = '서울진주초대교회';
var userName = '손성문';
var depositName = '손성현';
var depositDate = '2017년 12월 01일';
var attendNumber = 20;
var attendExpense = 20000;
var totalDepositNumber = attendNumber * attendExpense;

//테이블 추가
$("#add_row").click(function(){
    $('#addr'+num).html(
        '<td>' + (num+1) + '</td>' +
        '<td>' +  churchName + '</td>' +
        '<td>' +  userName + '</td>' +
        '<td>' +  depositName + '</td>' +
        '<td>' +  depositDate + '</td>' +
        '<td>' +  totalDepositNumber + '</td>' +
        '<td>' +  attendNumber + '</td>' +
        '<td data-name="sel">' +
            '<select name="sel0" style="padding-bottom:2px">' +
                '<option value "1">접수요청</option>' +
                '<option value "2">접수승인</option>' +
                '<option value "3">접수기각</option>' +
            '</select>' +
        '</td>' +
        '<td>' +
        '<a data-placement="top" data-toggle="tooltip" title="가입자 정보">' +
            '<button class="btn btn-primary btn-xs" data-title="reg_info" data-toggle="modal" data-target="#reg_info">' +
                '<span class="glyphicon glyphicon-user"></span>' +
            '</button>' +
        '</a>' +
        '<a data-placement="top" data-toggle="tooltip" title="세미나 신청 정보">' +
            '<button class="btn btn-danger btn-xs" data-title="join_info" data-toggle="modal" data-target="#join_info">' +
                '<span class="glyphicon glyphicon-pencil">' +
                '</span>' +
            '</button>' +
        '</a>' +
        '</td>'
    );

    $('#tab_logic').append('<tr id="addr'+(num+1)+'"></tr>');
    num++; 
});


// 버튼 상태에 따라 테이블의 접수상태 뷰가 달라지도록
// [출처] https://bootsnipp.com/snippets/ORE6d
$(document).ready(function () {
    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table tbody tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table tbody tr').css('display', 'none').fadeIn('slow');
        }
    });

    $('#checkall').on('click', function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
});







   $("#delete_row").click(function(){
       if(i>1){
       $("#addr"+(i-1)).html('');
       i--;
       }
   });

});