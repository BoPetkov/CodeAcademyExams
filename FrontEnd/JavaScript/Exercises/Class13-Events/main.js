function startupWebpage() {

    var mainContainer = document.getElementById("main-container");
    mainContainer.style.display = "flex";
    mainContainer.style.flexDirection = "column";

    leftContainer = document.createElement("span")
    leftContainer.style.width = "200px";
    leftContainer.style.height = "200px";
    leftContainer.style.background = "black";
    leftContainer.style.margin = "10px";
    mainContainer.appendChild(leftContainer);

    rightContainer = document.createElement("span")
    rightContainer.style.width = "200px";
    rightContainer.style.height = "200px";
    rightContainer.style.background = "black";
    rightContainer.style.margin = "10px";
    mainContainer.appendChild(rightContainer);

    var containers = document.getElementsByTagName("span");

    for (var i = 0; i < containers.length; i++) {

        containers[i].addEventListener("mouseenter", function (event) {
            event.target.style.background = "red";
        })

        containers[i].addEventListener("mouseout", function (event) {
            event.target.style.background = "black";
        })

    }


    // EXERCISE #1

    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    paragraph.style.fontFamily = "Arial";
    paragraph.style.fontSize = "13px";
    paragraph.style.color = "green";
    paragraph.style.width = "500px";

    mainContainer.appendChild(paragraph);

    var editTextButton = document.createElement("button");
    editTextButton.textContent = "Edit Text - double click styles change back";
    editTextButton.style.width = "100px";

    editTextButton.addEventListener("click", function () {
        paragraph.style.fontFamily = "Helvetica";
        paragraph.style.fontSize = "20px";
        paragraph.style.color = "red";
    });

    editTextButton.addEventListener("dblclick", function () {
        paragraph.style.fontFamily = "Arial";
        paragraph.style.fontSize = "13px";
        paragraph.style.color = "green";
    });

    mainContainer.appendChild(editTextButton);


    // EXERCISE #2

    console.log(window.innerWidth);
    console.log(window.innerHeight);

    window.addEventListener("resize", function () {
        console.log("width " + window.innerWidth);
        console.log("height " + window.innerHeight);
    })


    // EXERCISE #3

    var firstName = document.createElement("input");
    firstName.style.marginRight = "10px";
    firstName.placeholder = "First Name";
    firstName.style.width = "200px";
    mainContainer.appendChild(firstName);

    var lastName = document.createElement("input");
    lastName.style.marginRight = "10px";
    lastName.placeholder = "Last Name";
    lastName.style.width = "200px";
    mainContainer.appendChild(lastName);

    var email = document.createElement("input");
    email.style.marginRight = "10px";
    email.placeholder = "Insert e-mail";
    email.style.width = "200px";
    mainContainer.appendChild(email);

    function isEmail(email) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
    }

    var password = document.createElement("input");
    password.type = "password";
    password.style.marginRight = "10px";
    password.placeholder = "Insert password";
    password.style.width = "200px";
    mainContainer.appendChild(password);

    var button = document.createElement("button");
    button.textContent = "Submit";
    button.style.width = "100px";
    button.addEventListener("click", function () {
        var user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }

        if (user.password.length < 8) {
            console.log("short password, insert at least 8 characters");
        } else if (!isEmail(email.value)) {
            console.log("invalid email");
        } else { console.log(user); }
    })
    mainContainer.appendChild(button);

}

startupWebpage();