'use strict'


$("#tagInsertBtn").click(function () {
    let checker = /^[A-Z|a-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|,|]*$/g;

    if (!checker.test($("#hasgtagInput").val())) {

        alert("올바른 해시태그 입력값이 아닙니다.")

    } else { //해시태그 입력값이 format 에 맞음
        //유저 입력값을 hashArr 로 받게됨.
        if ($("#hasgtagInput").val().trim().length == 0) {//입력값이 공백일 경우

            alert("입력된 값이 없습니다.");
            $("#hashtags").remove('value');
            $("#hashtagDisplayArea").css('display', 'none');

        } else {//입력값이 공백이 아닐경우
            let hashArr = $("#hasgtagInput").val().split(",");
            let resultArr = new Array;
            if (hashArr[hashArr.length - 1] == '') {//,로 끝나는 경우 끝 index제거
                hashArr.pop();
            }

            for (let j = 0; j < hashArr.length; j++) {
                if (hashArr[j] != '') {
                    resultArr.push(hashArr[j]);
                };
            }

            if (resultArr.length < 10) { //해시태그 입력값이 10보다 아래일때.

                let hashHTML = "";
                let valueresult = "";
                $("#hashtagDisplayArea").css('display', 'block');

                for (let i = 0; i < resultArr.length; i++) {

                    hashHTML += `<div class=hashtag>#${resultArr[i]}</div>`

                };
                //해시테그 입력값을 태그에 뿌려줌.
                $("#hasgtagInput").val('');
                $("#hashtagDisplayArea").html(hashHTML);
                valueresult = '#' + resultArr.join("#");
                $("#hashtags").attr('value', valueresult);

            } else {
                alert("태그 입력값이 10개를 초과했습니다.");
            }
        }
    }
});


