const form = document.querySelector("form");
const feedbackInput = document.getElementById("feedback");

form.addEventListener("submit", function (event) {
    window.location.href = "thankyou.html"; 

    const content = feedbackInput.value.trim();

    if (content === "") {
        alert("Vui lòng nhập nội dung phản hồi!");
        return;
    }

    alert("Cảm ơn bạn! Phản hồi đã được ghi nhận.");

    feedbackInput.value = "";
});
