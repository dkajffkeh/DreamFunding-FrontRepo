'use strict'
//클릭했을때 스로라이드 해주는 자바스크립트
$("#first_bar").click(function () { scrolltoggleFirstbar() }); //스토리 바 눌렀을때 토글
$("#firstbar_remote").click(function () { scrolltoggleFirstbar(); }); //리모트 스토리 바 눌렀을때 토글.

$("#second_bar").click(function () { scrolltoggleSecondbar(); });
$("#secondbar_remote").click(function () { scrolltoggleSecondbar(); });

$("#third_bar").click(function () { scrolltoggleThirdbar(); });
$("#thirdbar_remote").click(function () { scrolltoggleThirdbar(); });

$("#forth_bar").click(function () { scrolltoggleForthbar(); });
$("#forthbar_remote").click(function () { scrolltoggleForthbar(); });


function scrolltoggleFirstbar() {


    $("#reward_wrapper").css('display', 'none');
    $("#notice_wrapper").css('display', 'none');
    $("#subinfo_wrapper").css('display', 'none');
    $("#story_wrapper").slideToggle('slow');
    window.scrollTo(0, 0);
};
function scrolltoggleSecondbar() {


    $("#story_wrapper").css('display', 'none');
    $("#notice_wrapper").css('display', 'none');
    $("#subinfo_wrapper").css('display', 'none');
    $("#reward_wrapper").slideToggle('slow');
    window.scrollTo(0, 0);

}

function scrolltoggleThirdbar() {

    $("#story_wrapper").css('display', 'none');
    $("#reward_wrapper").css('display', 'none');
    $("#subinfo_wrapper").css('display', 'none');
    $("#notice_wrapper").slideToggle('slow');
    window.scrollTo(0, 0);

}

function scrolltoggleForthbar() {
    console.log("실행");
    $("#story_wrapper").css('display', 'none');
    $("#reward_wrapper").css('display', 'none');
    $("#notice_wrapper").css('display', 'none');
    $("#subinfo_wrapper").slideToggle('slow');
    window.scrollTo(0, 0);

}