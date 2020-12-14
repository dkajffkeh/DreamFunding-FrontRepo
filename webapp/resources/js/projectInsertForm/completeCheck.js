'user strict'

$(function () {

    $(".btn-primary.btn4").attr('disabled', true);


})

$("#story_wrapper input").on('focus keyup change', function () {

    const projectCondition = $("input[name='projectSuccessCondition']:checked").val() != "";
    const categoryCheck = $("#exampleFormControlSelect1").val() != "";
    const titleCheck = $("input[name='projectTitle']").val() != "";
    const subTitleCheck = $("input[name='projectSubTitle']").val() != "";
    const projectGoalCheck = $("input[name='projectGoal']").val() > 0;
    const urlCheck = $("input[name='projectUrl']").val() != "";

    let startArr = $("input[name='projectStartDate']").val().split('-');
    let endArr = $("input[name='projectEndDate']").val().split('-');

    let startDate = new Date(startArr[0], startArr[1], startArr[2]);
    let endDate = new Date(endArr[0], endArr[1], endArr[2])

    let diff = endDate - startDate;
    let day = 1000 * 60 * 60 * 24;

    const dateCheck = (diff / day) > 0;
    const thumbnailFile = $("input[name='thumbfile']").val() != "";
    const profileCheck = $("input[name='profile']").val() != "";
    const introCheck = $("input[name='creatorIntro']").val() != "";
    const contentCehck = CKEDITOR.instances['editor.ck'].getData() != "";

    if (projectCondition
        && categoryCheck
        && titleCheck
        && subTitleCheck
        && projectGoalCheck
        && urlCheck
        && dateCheck
        && thumbnailFile
        && profileCheck
        && introCheck
        && contentCehck
    ) {

        $("#first_bar").css('background-color', '#8c2a2a');
        $("#first_bar").css('color', '#ffffffff');
        $("#first_bar").text('스토리  (작성완료)');



    } else {

        $("#first_bar").css('background-color', ' #c6a36e');
        $("#first_bar").css('color', '#ffffffff');
        $("#first_bar").text('스토리  (미완료)');

    }

    completeCheck();

})


$("#notice_wrapper input").on('keyup', function () {

    const policyCehck1 = CKEDITOR.instances['editor2.ck'].getData() != "";
    const phoneCheck = $("input[name='email']").val() != "";


    if (policyCehck1 && phoneCheck
    ) {

        $("#third_bar").css('background-color', '#8c2a2a');
        $("#third_bar").css('color', '#ffffffff');
        $("#third_bar").text('안내사항  (작성완료)');




    } else {

        $("#third_bar").css('background-color', ' #c6a36e');
        $("#third_bar").css('color', '#ffffffff');
        $("#third_bar").text('안내사항  (미완료)');


    }


})

$("#subinfo_wrapper").on('keyup focus', function () {

    const bankCheck = $("input[name='bank']").val() != "";
    const bankAccountCheck = $("input[name='bankAccount']").val() != "";
    const holderCheck = $("input[name='accountHolder']").val() != "";

    if (bankCheck && bankAccountCheck && holderCheck) {

        $("#forth_bar").css('background-color', '#8c2a2a');
        $("#forth_bar").css('color', '#ffffffff');
        $("#forth_bar").text('제작자/부가정보  (작성완료)');



    } else {

        $("#forth_bar").css('background-color', ' #c6a36e');
        $("#forth_bar").css('color', '#ffffffff');
        $("#forth_bar").text('제작자/부가정보   (미완료)');


    }

})

$("input").on('focus keyup change', function () {
    const barColor = $(".bar.upper");
    let result = 0;


    for (let i = 0; i < barColor.length; i++) {

        if (barColor[i].style.backgroundColor == 'rgb(140, 42, 42)') {
            result++;
        }
        console.log(result);

    }

    if (result == 4) {

        $(".btn-primary.btn4").attr('disabled', false);
    } else {
        $(".btn-primary.btn4").attr('disabled', true);
    }

})

