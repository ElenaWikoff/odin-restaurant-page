
export const navigate = (page) => {
    const container = document.getElementById("content");
    container.replaceChildren(container.firstChild, page);
}