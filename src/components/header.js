// header.js
import Button from "./button.js";
import { navigate } from "../utils/router.js"

const Header = ({ logoUrl, routes }) => {
    const header = document.createElement("header");

    // Logo
    const logo = document.createElement("img");
    logo.classList.add("header-logo");
    logo.setAttribute("src", logoUrl);
    logo.setAttribute("alt", "Wannabee Yours Logo");

    // Nav Menu
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    const navMenu = document.createElement("ul");
    navMenu.classList.add("nav-menu");
    routes.forEach((route) => {
        const navItem = document.createElement("li");
        navItem.classList.add("nav-item");
        const button = Button({
            variant: "menu",
            label: route.title,
            onClick: () => navigate(route.page()),
        });
        navItem.appendChild(button);
        navMenu.appendChild(navItem);
    });
    nav.appendChild(navMenu);


    // Add elements to header element
    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}

export default Header;