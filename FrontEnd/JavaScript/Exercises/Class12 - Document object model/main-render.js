function PageRenderer() {
    

    this.renderAll = function () {
        var mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "flex";
        mainContainer.style.position = "relative";
        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());
    }

    this.renderLeft = function () {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "35%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";

        var profileContainer = document.createElement("div");
        var profileImage = document.createElement("img");
        profileImage.style.width = "200px";
        profileImage.style.height = "200px";

        profileImage.src = "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg";
        profileImage.alt = "profile Picture";

        profileContainer.appendChild(profileImage);

        var aboutMeContainer = document.createElement("div");
        var aboutHeader = document.createElement("h1");
        var aboutText = document.createElement("p");

        aboutHeader.innerHTML = "About me";
        aboutText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);
        return leftContainer;
    }

    this.renderRight = function () {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "65%";
        rightContainer.style.display = "flex";
        rightContainer.style.flexDirection = "column";


        var albumContainer = document.createElement("div");
        // albumContainer.style.position = "relative";
        // albumContainer.style.width = "150%";
        var images = [];

        for (var i = 0; i < 14; i++) {

            var albumImage = document.createElement("img");
            albumImage.id = i;
            albumImage.src = "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg";
            albumImage.style.width = "100px";
            albumImage.style.height = "100px";
            albumImage.style.margin = "10px";
            images[i] = albumImage;
            albumContainer.appendChild(albumImage);
        }        
        

        for(var j = 0; j < images.length; j++) {

            images[j].addEventListener("mouseenter", function(event){
                event.target.style.zIndex = "1";
                event.target.style.position = "absolute";
                event.target.style.width = "200px";
                event.target.style.height = "200px";
            })

            images[j].addEventListener("mouseout", function(event){
                event.target.style.zIndex = "0";
                event.target.style.position = "relative";
                event.target.style.width = "100px";
                event.target.style.height = "100px";
            })

        }




        var storiesContainer = document.createElement("div");

        for (var k = 0; k < 6; k++) {

            var boxContainer = document.createElement("div");

            var storiesHeader = document.createElement("h1");
            storiesHeader.innerHTML = "Stories";
            var storiesDate = document.createElement("h4");
            storiesDate.innerHTML = "Date";
            var storiesText = document.createElement("p");
            storiesText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

            boxContainer.appendChild(storiesHeader);
            boxContainer.appendChild(storiesDate);
            boxContainer.appendChild(storiesText);

            storiesContainer.appendChild(boxContainer);

        }

        rightContainer.appendChild(albumContainer);
        rightContainer.appendChild(storiesContainer);

        return rightContainer;
    }
}
