// index.js

import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

const routerConfig = {
    baseUrl: window.location.href,
    routes: [
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
]
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Content Loaded");
    const header = document.getElementById("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);

    // const url = `${routerConfig.baseUrl}${routerConfig.routes[0].path}`;
    // console.log(url);
    // window.location.replace(url);
});