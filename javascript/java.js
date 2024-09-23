function handleSubmit() {
  // Lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLowerCase();
  // Lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  // Điều kiện để là 1 email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Dùng match để kiểm tra với email vừa nhập
  const checkEmail = emailValue.match(regex);

  // Lấy phần chứa thông tin user
  const content1 = document.querySelector(".info .content1");
  console.log("check content", content1);

  // Lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    content1.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng Email";
  }
}

const deleteElement = document.querySelectorAll(".viewMore");
deleteElement.forEach((bt) => {
  bt.addEventListener("click", () => {
    let parent = bt.closest(".box");
    console.log(parent);
    let child = parent.querySelector(".timeline");
    child.classList.remove("hide");
  });
});

function handleonMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleonMouseOut(element) {
  const viewMore = element.querySelector(".viewMore");
  if (!viewMore.classList.value.includes("viewLess")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".section-content");

  if (viewMore.classList.value.includes("viewMore")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });

    viewMore.classList.remove("viewMore");
    viewMore.classList.add("viewLess");
    viewMore.innerHTML = "View Less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("viewLess");
    viewMore.classList.add("viewMore");
    viewMore.innerHTML == "View More";
  }
}
