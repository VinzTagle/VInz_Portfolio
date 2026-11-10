
function changeMenu() {
    const navLinks = document.getElementById("navLinks");
    const menuButton = document.getElementById("menuButton");

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        menuButton.innerHTML = "☰";
    } else {
        navLinks.style.display = "flex";
        menuButton.innerHTML = "✕";
    }
}

function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    const menuButton = document.getElementById("menuButton");

    if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
        menuButton.innerHTML = "☰";
    }
}

function changeMode() {
    const modeButton = document.getElementById("modeButton");
    const aboutCard = document.getElementById("aboutCard");
    const contactCard = document.getElementById("contactCard");

    if (modeButton.innerHTML === "Dark Mode") {
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "white";

        document.getElementById("navLinks").style.backgroundColor = "#111111";

        aboutCard.style.backgroundColor = "#292929";
        contactCard.style.backgroundColor = "#292929";

        document.getElementById("educationCard1").style.backgroundColor = "#292929";
        document.getElementById("educationCard2").style.backgroundColor = "#292929";
        document.getElementById("educationCard3").style.backgroundColor = "#292929";

        document.getElementById("skillCard1").style.backgroundColor = "#292929";
        document.getElementById("skillCard2").style.backgroundColor = "#292929";
        document.getElementById("skillCard3").style.backgroundColor = "#292929";
        document.getElementById("skillCard4").style.backgroundColor = "#292929";
        document.getElementById("skillCard5").style.backgroundColor = "#292929";
        document.getElementById("skillCard6").style.backgroundColor = "#292929";
        document.getElementById("skillCard7").style.backgroundColor = "#292929";

        document.getElementById("workCard1").style.backgroundColor = "#292929";
        document.getElementById("workCard2").style.backgroundColor = "#292929";

        document.getElementById("achievementCard1").style.backgroundColor = "#292929";
        document.getElementById("achievementCard2").style.backgroundColor = "#292929";
        document.getElementById("achievementCard3").style.backgroundColor = "#292929";
        document.getElementById("achievementCard4").style.backgroundColor = "#292929";
        document.getElementById("achievementCard5").style.backgroundColor = "#292929";

        document.getElementById("hobbyCard1").style.backgroundColor = "#292929";
        document.getElementById("hobbyCard2").style.backgroundColor = "#292929";
        document.getElementById("hobbyCard3").style.backgroundColor = "#292929";
        document.getElementById("hobbyCard4").style.backgroundColor = "#292929";
        document.getElementById("hobbyCard5").style.backgroundColor = "#292929";
        document.getElementById("hobbyCard6").style.backgroundColor = "#292929";

        document.getElementById("projectCard1").style.backgroundColor = "#292929";

        document.getElementById("about").style.backgroundColor = "#181818";
        document.getElementById("education").style.backgroundColor = "#181818";
        document.getElementById("skills").style.backgroundColor = "#181818";
        document.getElementById("work").style.backgroundColor = "#181818";
        document.getElementById("achievements").style.backgroundColor = "#181818";
        document.getElementById("hobbies").style.backgroundColor = "#181818";
        document.getElementById("projects").style.backgroundColor = "#181818";
        document.getElementById("contact").style.backgroundColor = "#181818";

        document.getElementById("about").style.color = "white";
        document.getElementById("education").style.color = "white";
        document.getElementById("skills").style.color = "white";
        document.getElementById("work").style.color = "white";
        document.getElementById("achievements").style.color = "white";
        document.getElementById("hobbies").style.color = "white";
        document.getElementById("projects").style.color = "white";
        document.getElementById("contact").style.color = "white";

        modeButton.innerHTML = "Light Mode";
    } else {
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#333333";

        document.getElementById("navLinks").style.backgroundColor = "#222222";

        aboutCard.style.backgroundColor = "white";
        contactCard.style.backgroundColor = "white";

        document.getElementById("educationCard1").style.backgroundColor = "white";
        document.getElementById("educationCard2").style.backgroundColor = "white";
        document.getElementById("educationCard3").style.backgroundColor = "white";

        document.getElementById("skillCard1").style.backgroundColor = "white";
        document.getElementById("skillCard2").style.backgroundColor = "white";
        document.getElementById("skillCard3").style.backgroundColor = "white";
        document.getElementById("skillCard4").style.backgroundColor = "white";
        document.getElementById("skillCard5").style.backgroundColor = "white";
        document.getElementById("skillCard6").style.backgroundColor = "white";
        document.getElementById("skillCard7").style.backgroundColor = "white";

        document.getElementById("workCard1").style.backgroundColor = "white";
        document.getElementById("workCard2").style.backgroundColor = "white";

        document.getElementById("achievementCard1").style.backgroundColor = "white";
        document.getElementById("achievementCard2").style.backgroundColor = "white";
        document.getElementById("achievementCard3").style.backgroundColor = "white";
        document.getElementById("achievementCard4").style.backgroundColor = "white";
        document.getElementById("achievementCard5").style.backgroundColor = "white";

        document.getElementById("hobbyCard1").style.backgroundColor = "white";
        document.getElementById("hobbyCard2").style.backgroundColor = "white";
        document.getElementById("hobbyCard3").style.backgroundColor = "white";
        document.getElementById("hobbyCard4").style.backgroundColor = "white";
        document.getElementById("hobbyCard5").style.backgroundColor = "white";
        document.getElementById("hobbyCard6").style.backgroundColor = "white";

        document.getElementById("projectCard1").style.backgroundColor = "white";

        document.getElementById("about").style.backgroundColor = "#f4f4f4";
        document.getElementById("education").style.backgroundColor = "#f4f4f4";
        document.getElementById("skills").style.backgroundColor = "#f4f4f4";
        document.getElementById("work").style.backgroundColor = "#f4f4f4";
        document.getElementById("achievements").style.backgroundColor = "#f4f4f4";
        document.getElementById("hobbies").style.backgroundColor = "#f4f4f4";
        document.getElementById("projects").style.backgroundColor = "#f4f4f4";
        document.getElementById("contact").style.backgroundColor = "#f4f4f4";

        document.getElementById("about").style.color = "#333333";
        document.getElementById("education").style.color = "#333333";
        document.getElementById("skills").style.color = "#333333";
        document.getElementById("work").style.color = "#333333";
        document.getElementById("achievements").style.color = "#333333";
        document.getElementById("hobbies").style.color = "#333333";
        document.getElementById("projects").style.color = "#333333";
        document.getElementById("contact").style.color = "#333333";

        modeButton.innerHTML = "Dark Mode";
    }
}

function changeProfileImage() {
    const profileImage = document.getElementById("profileImage");

    if (profileImage.src.includes("pfp.jpg")) {
        profileImage.src = "pfpchange.png";
    } else {
        profileImage.src = "pfp.jpg";
    }
}