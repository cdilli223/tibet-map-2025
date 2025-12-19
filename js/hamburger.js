function runHamburgerPeek() {
    
    // const zone = document.getElementById("hamburger-zone");
    // if (!zone) return;  

    // setTimeout(() => {
    //     zone.classList.add("peek"); 
    //     setTimeout(() => {
    //         zone.classList.remove("peek");
    //     }, 2000);
    // }, 1200);

    const zone = document.getElementById("hamburger-zone");
    if (!zone) return;

    // reset in case we run multiple times
    zone.classList.remove("peek");

    setTimeout(() => {
        zone.classList.add("peek");
        setTimeout(() => zone.classList.remove("peek"), 2000);
    }, 450);
}

function initHamburgerMenu() {
    const hamburgerZone = document.getElementById("hamburger-zone");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    function openMenu() {
        hamburgerZone.classList.add("open");
        hamburgerBtn.setAttribute("aria-expanded", "true");
        hamburgerMenu.setAttribute("aria-hidden", "false");
    }
    function closeMenu() {
        hamburgerZone.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        hamburgerMenu.setAttribute("aria-hidden", "true");
    }
    function toggleMenu() {
        hamburgerZone.classList.contains("open") ? closeMenu() : openMenu();
    }

    hamburgerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // click outside closes
    document.addEventListener("click", () => closeMenu());

    // escape closes
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // Prevent menu clicks from closing immediately (since document click closes)
    hamburgerMenu.addEventListener("click", (e) => e.stopPropagation());

    runHamburgerPeek();
}
