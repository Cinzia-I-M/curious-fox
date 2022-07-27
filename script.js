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

// Pick for me random choice

function PickRandom(){
    const myrandom=Math.round(Math.random()*8)
    const link1="https://www.netflix.com/title/81000864"
    const link2="https://www.amazon.co.uk/Age-AI-Our-Human-Future/dp/1529375975/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1657824167&sr=8-1"
    const link3="https://www.amazon.co.uk/Lord-Rings-Fellowship-Alan-Howard/dp/B00IHRUR3I"
    const link4="https://www.youtube.com/c/ZoeSugg"
    const link5="https://twitter.com/TheMontyDon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    const link6="https://www.skysports.com/womens-football"
    const link7="https://www.amazon.co.uk/Knitting-Book-Step-Step-Techniques/dp/024136194X/ref=asc_df_024136194X/?tag=googshopuk-21&linkCode=df0&hvadid=375480601620&hvpos=&hvnetw=g&hvrand=8872891340466283660&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1006490&hvtargid=pla-815171494739&psc=1&th=1&psc=1&tag=&ref=&adgrpid=76471992426&hvpone=&hvptwo=&hvadid=375480601620&hvpos=&hvnetw=g&hvrand=8872891340466283660&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1006490&hvtargid=pla-815171494739"
    const link8="https://www.bbc.co.uk/programmes/m001955r"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
    else if (myrandom==3)
        window.location=link4
    else if (myrandom==4)
        window.location=link5
    else if (myrandom==5)
        window.location=link6
    else if (myrandom==6)
        window.location=link7
    else if (myrandom==7)
        window.location=link8
}