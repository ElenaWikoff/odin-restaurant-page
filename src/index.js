// index.js

import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";
import Header from "./components/header.js";

const routes = [
    {
        title: "Home",
        path: "",
        page: home,
    },
    {
        title: "Menu",
        path: "/menu",
        page: menu,
    },
    {
        title: "About",
        path: "/about",
        page: about,
    },
];

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Content Loaded");

    // Add Header
    const app = document.getElementById("app");
    const header = Header({
        logoUrl: "./assets/logos/wannabee-yours-logo.svg",
        routes,
    });
    app.appendChild(header);

    // Add Content Container
    const container = document.createElement("main");
    container.setAttribute("id", "content");
    container.appendChild(routes[0].page());
    app.appendChild(container);

    // Add Footer
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    app.appendChild(footer);
});