var ADM_MNG = {

    srchList : []
    ,pageNo : 1

    ,onSearch : function() {
        $.ajax({
            url: "/admMng/getUserReqList",
            type: "POST",
            dataType: "json",
            data: {                
            },
            complete: function(data) {
                console.log( 'completed' );
            },
            success: function(data) {
                console.log( 'success' );
                console.log(data);  
                ADM_MNG.onMakeGrid(data);
            },
            error: function() {

            },
        });
    }
    
    ,onMakeGrid : function(data) {
        var rowcnt = Object.keys(data).length;
        
        var trHTML = '';
        var forcnt = 0;

        for( var key in data ) {
            console.log( key + '=>' + data[key] );
            var date = new Date(data[key].depositDtm);
            var curr_date = date.getDate();
            var curr_month = date.getMonth() + 1; //Months are zero based
            var curr_year = date.getFullYear();

            var rwHTML = '';
            var raHTML = '';
            var rjHTML = '';
            if( data[key].atndStsCd == 'RW' ) {
                rwHTML = 'selected="selected"';
            }else if( data[key].atndStsCd == 'RA' ) {
                raHTML = 'selected="selected"';
            }else if( data[key].atndStsCd == 'RJ' ) {
                rjHTML = 'selected="selected"';
            }
            
            trHTML += (`<tr id='tr_` + key + `'>` 
                        + `<td><p>` + (Number(key)+1) + `</p></td>`
                        + `<td>` + data[key].churchNm + `</td>`
                        + `<td>` + data[key].userNm + `</td>`
                        + `<td>` + data[key].depositorNm + `</td>`
                        + `<td>` + curr_year + "-" + curr_month + "-" + curr_date + `</td>`
                        + `<td>` + data[key].depositorAmt + `</td>`
                        + `<td>` + data[key].atndCnt + `</td>`
                        + `<td data-name="sel">
                        <select name="sel0" style="padding-bottom:2px">
                            <option ` + rwHTML + `value "1" id="btn-offline">접수요청</option>
                            <option ` + raHTML + `value "2" id="btn-online">접수승인</option>
                            <option ` + rjHTML + `value "3" id="btn-out-of-order">접수기각</option>
                        </select>
                        </td>
                        <td>
                        <a data-placement="top" data-toggle="tooltip" title="가입자 정보">
                            <button class="btn btn-primary btn-xs" data-title="reg_info" data-toggle="modal" data-target="#reg_info">
                            <span class="glyphicon glyphicon-user"></span>
                            </button>
                        </a>
                        <a data-placement="top" data-toggle="tooltip" title="세미나 신청 정보">
                            <button class="btn btn-danger btn-xs" data-title="join_info" data-toggle="modal" data-target="#join_info">
                            <span class="glyphicon glyphicon-pencil">
                            </span>
                            </button>
                        </a>
                        </td>
                    </tr> `);

                forcnt++;
                if( rowcnt > 10 && forcnt == 10 ) {
                    ADM_MNG.srchList.push( trHTML );
                    trHTML = '';
                    forcnt = 0;
                    rowcnt -= 10;
                }

                if( rowcnt <= 10 && forcnt == rowcnt ) {
                    ADM_MNG.srchList.push( trHTML );
                }
        }

        

        $('#id_tbody').append( ADM_MNG.srchList[0] );    
        ADM_MNG.pageNo = 1;
    }

    ,EventListener : function() {
        $('#li_prevPage').on('click', function() {
            if( ADM_MNG.pageNo == 1 ) {
                alert( '첫 페이지 입니다.' );
                return;
            }

            ADM_MNG.pageNo -= 1;
            $('#id_tbody').text('');
            $('#id_tbody').append( ADM_MNG.srchList[ ADM_MNG.pageNo - 1 ] );
            //$('#li_pageNo').text( ADM_MNG.pageNo );
        });

        $('#li_nextPage').on('click', function() {
            if( ADM_MNG.pageNo == ADM_MNG.srchList.length ) {
                alert( '마지막 페이지 입니다.' );
                return;
            }

            ADM_MNG.pageNo += 1;
            $('#id_tbody').text('');
            $('#id_tbody').append( ADM_MNG.srchList[ ADM_MNG.pageNo - 1 ] );
           // $('#li_pageNo').text( ADM_MNG.pageNo );
        });
    }
};


$( document ).ready(function() {
    
    ADM_MNG.onSearch();
    ADM_MNG.EventListener();

});