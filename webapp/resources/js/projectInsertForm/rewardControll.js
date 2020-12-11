'use strict'

//리워드 제공 가능수 옵션 클릭했을때 수량을 입력받는 input 보여줄지 말지.
$("#reward_condition1").click(function () {
    $("#rewardAmount").css('display', 'none');
})
$("#reward_condition2").click(function () {
    $("#rewardAmount").css('display', 'flex');
})

//리워드 옵션 선택자  20201211 여기부터 진행 해야함.
$("#rewardInputBtn").click(function () {

    let optionValues = $("#reward-options").val();
    let createLi = document.createElement('li');
    let createInput = document.createElement('input')
    createInput.setAttribute('type', 'hidden')
    createInput.setAttribute('name', 'tempName');
    createLi.setAttribute('onclick', 'deleteList(this)');


    if (optionValues.trim().length != 0) { //뭔가가 입력 된 경우

        if ($("#reward_list > li").length > 4) {//li 가 5보다 크면 넣을수 없음 0 1 2 3 4 까지 실행.
            alert("최대 5개의 옵션만 추가가 가능합니다");
        } else {
            createLi.innerHTML = optionValues;
            createInput.setAttribute("value", optionValues);
            $("#reward_list").append(createLi); //리스트에 추가됨.
            $("#reward-options").val('');
        }
    } else {
        alert("입력값이 없습니다.")
    }
});

function deleteList(event) {
    let rewardOption = event.innerHTML;

    //이거 input none=options 요소도 나중에 반드시 삭제하는 로직 만들어야함
    if (confirm(rewardOption + "항목을 삭제 하시겠습니까?")) {
        event.remove();
    }

}

$("#insertRewardBtn").click(function () {

    const rewardPrice_check = $("#rewardPrice").val().trim().length == 0; //리워드 금액 null 아님 뭐라도 적으면 true;
    const rewardCondition = $("input[name='options']:checked").val(); //리워드 제공수 가져옴.
    const addrCheck = $("input[name='addrCheck']:checked").val(); //Y 필요 N 불필요.
    const rewardCount = $("#rewardCount").val().trim().length == 0;
    const rewardList = $("#reward_list > li");
    const displayResult = $("#reward_result_display");
    let rewardResult = "";

    // Y 로 넘어오면 제한 없음
    // N 로 넘어오면 input 받아야함.

    if (!rewardPrice_check && rewardCondition != null && addrCheck != null) { //전부 입력이 되었을경우

        //입력 되었지만 리워드 제공수
        if (rewardCondition == 'Y') { //무제한 이면서 빈칸이 모두 채워진 케이스

            rewardResult += `<div class="rewardContaioner">
                                    <div class="rewardTitleWrapper">
                                    <div class="reward-font">${$("#rewardPrice").val()}원 리워드</div> 
                                    <div class="reward-font">제공수:무제한</div>
                                </div>
                                <ul class="rewardOptionLists">       
                                `
            if (rewardList.length == 0) {
                rewardResult += `<li>옵션이 없는 리워드가 생성됩니다.</li>`
            } else {

                for (let j = 0; j < rewardList.length; j++) {

                    rewardResult += `<li>${rewardList[j].innerHTML}</li>`
                }
            }
            rewardResult += `
                                </ul>
                                <div class="rewardTitleWrapper">
                                <div class="reward-font">배송지 필요여부 : '${addrCheck}'</div>
                                <i class="fas fa-trash-alt deleteReward" removeReward(this)></i>
                                </div>
                                </div>
                                `
            $("#rewardemptyMessage").css('display', 'none');
            //입력값을 초기화.
            clearValues();
            displayResult.append(rewardResult);

        } else { //유제한

            if (rewardCount) { //유제한 빈칸 입력 안됨.
                $("#rewardCount").focus();
                alert("리워드 제공 수를 입력해주세요!");
            } else {//유제한 이면서 빈칸이 모두 채워진 케이스

                rewardResult += `<div class="rewardContaioner">
                                        <div class="rewardTitleWrapper">
                                        <div class="reward-font">${$("#rewardPrice").val()}원 리워드</div> 
                                        <div class="reward-font">제공수:${$("#rewardCount").val()}</div>
                                        </div>
                                    <ul class="rewardOptionLists">       
                                    `
                if (rewardList.length == 0) {
                    rewardResult += `<li>옵션이 없는 리워드가 생성됩니다.</li>`
                } else {

                    for (let j = 0; j < rewardList.length; j++) {

                        rewardResult += `<li>${rewardList[j].innerHTML}</li>`
                    }
                }
                rewardResult += `
                                </ul>
                                <div class="rewardTitleWrapper">
                                <div class="reward-font">배송지 필요여부 : '${addrCheck}'</div>
                                <i class="fas fa-trash-alt deleteReward" onclick=removeReward(this)></i>
                                </div>
                                </div>
                                `
                $("#rewardemptyMessage").css('display', 'none');
                //입력갑 초기화 하는 함수
                clearValues();
                displayResult.append(rewardResult);

            }
        }

    } else {
        alert("필수항목을 모두 입력해주세요!")
    }

})

function clearValues() {

    $("#rewardPrice").val('');
    $("#rewardCount").val('');
    $("#reward-options").val('');

    $("#reward_list > li").remove();


}


/*
                              <div class="rewardContaioner">
                                    <div class="rewardTitleWrapper">
                                    <div class="reward-font">29,000</div>
                                    <div class="reward-font">제공수:</div>
                                </div>`
                                <ul class="rewardOptionLists">
                                    <li>asd</li>
                                    <li>asd</li>
                                    <li>asd</li>
                                </ul>
                                <div class="rewardTitleWrapper">
                                <div class="reward-font">배송지 필요여부 : 'Yes'</div>
                                <i class="fas fa-trash-alt deleteReward"></i>
                            </div>
                            </div>

*/


