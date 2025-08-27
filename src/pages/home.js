
const home = () => {
    const section = document.createElement("section");
    section.classList.add("container");
    console.log(section);
    section.textContent = "Home Page";
    return section;
}

export default home;