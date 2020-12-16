const commentBtn = document.querySelectorAll(".comment-open-btn");
// console.log(commentBtn);
// 대댓글 리스트 조회 버튼

const editInput = document.querySelectorAll(".edit-comment");
// edit 수정 입력
const editBtn = document.querySelectorAll(".edit-btn");
// edit 수정 버튼
const editCancelBtn = document.querySelectorAll(".edit-cancel-btn");
// edit 취소 버튼

const rereplyInput = document.querySelectorAll(".add-rereply");
// 대댓글 입력
const rereplyBtn = document.querySelectorAll(".rereply-btn");
// 대댓글 버튼
const rereplyCancelBtn = document.querySelectorAll(".rereply-cancel-btn");
// 대댓글 취소

const rereplyList = document.querySelectorAll(".rereply_list");
// console.log(rereplyList);

// 대댓글 존재 유무 => 공백일 경우 No Comment 출력
function validReply() {
  rereplyList.forEach((v, i) => {
    if (v.innerHTML === "") {
      commentBtn[i].innerText = "No Comment!";
    }
  });
}

// comment 버튼 클릭 시, Comments면 Hide Comments, 공백이면 No Comment!, 둘다 아니면 Comments
commentBtn.forEach((v, i) => {
  v.addEventListener("click", () => {
    if (v.innerText === "Comments") {
      v.innerText = "Hide Comments";
    } else if (rereplyList[i].innerHTML === "") {
      commentBtn[i].innerText = "No Comment!";
    } else {
      v.innerText = "Comments";
    }
    document.querySelectorAll(".comments")[i].classList.toggle("reply_active");
  });
});

// edit 버튼 클릭 시
editBtn.forEach((v, i) => {
  v.addEventListener("click", () => {
    rereplyInput[i].classList.add("is_not_active");
    editInput[i].classList.toggle("is_not_active");
  });
});

// edit cancel 버튼 클릭시
editCancelBtn.forEach((v, i) => {
  v.addEventListener("click", () => {
    editInput[i].classList.toggle("is_not_active");
  });
});

// rereplyBtn 클릭 시
rereplyBtn.forEach((v, i) => {
  v.addEventListener("click", () => {
    editInput[i].classList.add("is_not_active");
    rereplyInput[i].classList.toggle("is_not_active");
  });
});

// rereplyBtn cancel 버튼 클릭 시
rereplyCancelBtn.forEach((v, i) => {
  v.addEventListener("click", () => {
    rereplyInput[i].classList.toggle("is_not_active");
  });
});

validReply();
