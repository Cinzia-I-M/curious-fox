// Hero header word changing in h1

if (document.getElementById("keyWord")) {
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'book';
    }, 2000);
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'tiktok';
    }, 4000);
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'film';
    }, 6000);
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'podcast';
    }, 8000);
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'instagram';
    }, 10000);
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'TV show';
    }, 12000);
    setTimeout(function () {
        document.getElementById("keyWord").innerHTML = 'obsession';
    }, 14000);
}


// Thank you message for contact form and checking inputs

function thankYouMsg() {
    const button = document.getElementById("submit-btn")
    button.addEventListener('click', () => {
        if (document.getElementById('yes-choice').checked) {
            if ((document.getElementById("fname").value.length == 0) || (document.getElementById("lname").value.length == 0) || (document.getElementById("email").value.length == 0) || (document.getElementById("myform_phone").value.length == 0) || (document.getElementById("description").value.length == 0)) {
                document.getElementById("error-msg").style.display = "block";
                const fname = document.getElementById("namef");
                fname.classList.add("error-field");
                const lname = document.getElementById("namel");
                lname.classList.add("error-field");
                const email = document.getElementById("mail");
                email.classList.add("error-field");
                const phone = document.getElementById("tel");
                phone.classList.add("error-field");
                const description = document.getElementById("describe");
                description.classList.add("error-field");
            } else {
                document.getElementById("error-msg").style.display = "none";
                document.getElementById("contact-form").style.display = "none";
                document.getElementById("thank-you-submit").style.display = "block"
            }
        } else if (document.getElementById('no-choice').checked) {
            if ((document.getElementById("fname").value.length == 0) || (document.getElementById("lname").value.length == 0) || (document.getElementById("description").value.length == 0)) {
                document.getElementById("error-msg").style.display = "block";
                const fname = document.getElementById("namef");
                fname.classList.add("error-field");
                const lname = document.getElementById("namel");
                lname.classList.add("error-field");
                const description = document.getElementById("describe");
                description.classList.add("error-field");
            } else {
                document.getElementById("error-msg").style.display = "none";
                document.getElementById("contact-form").style.display = "none";
                document.getElementById("thank-you-submit").style.display = "block"
            }
        }
    })
}

thankYouMsg();


// Connect form hide/show fields

const yesChoice = document.getElementById("yes-choice")

yesChoice.addEventListener('click', () => {
    document.getElementById("form-1").style.display = "block";
    document.getElementById("form-2").style.display = "block";
    document.getElementById("form-3").style.display = "block";
})

const noChoice = document.getElementById("no-choice")

noChoice.addEventListener('click', () => {
    document.getElementById("form-1").style.display = "block";
    document.getElementById("form-2").style.display = "none";
    document.getElementById("form-3").style.display = "block";
})

// Connect form validation

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid e-mail address.");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});

