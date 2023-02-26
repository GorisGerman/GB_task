// Проверка пароля

document.querySelector(".form-auth-btn").onclick = function () {
    const userPassFirst = document.querySelector("#password1").value;
    const userPassSecond = document.querySelector("#password2").value;
    if (userPassFirst == "") {
        document.getElementById("password1").style = "border: 1px solid red";
        document.getElementById("password2").style = "border: 1px solid red";
    } else if (userPassFirst != userPassSecond) {
        document.getElementById("password1").style = "border: 1px solid red";
        document.getElementById("password2").style = "border: 1px solid red";
        return false;
    } else if (userPassFirst == userPassSecond) {
        document.getElementById("password1").style = "border: 1px solid green";
        document.getElementById("password2").style = "border: 1px solid green";
    }
    return false; // сделано, чтобы страница не обновлялась и можно было увидеть зеленую рамку.
};

// Рейтинг со звездочками
const form = document.querySelector('.form-stars-rating');
const ratingStars = form.querySelectorAll('.rating-star-input');

ratingStars.forEach((radio) => {
    radio.addEventListener('change', function () {
        const checkedNumber = document.querySelector('.rating-star-input:checked').value || undefined;
        ratingStars.forEach((item) => {
            const currentLabel = item.nextElementSibling;
            if (item.value <= checkedNumber) {
                currentLabel.classList.add('check');
            } else {
                currentLabel.classList.remove('check');
            }
        });
    })
});
