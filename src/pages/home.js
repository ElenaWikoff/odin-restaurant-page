import ReviewCard from "../components/review.js";

const reviews = [
    {
        quote: "Sweetest dining experience ever!",
        stars: 5,
        name: "Jerry Stinger"
    },
    {
        quote: "A refreshing surprise—I'll bee back!",
        stars: 4,
        name: "B.J. Novak"
    },
    {
        quote: "Their honey-butter biscuits were un-bee-lievable!",
        stars: 5,
        name: "Jana Beesley"
    },
    {
        quote: "Amazing! The trenchcoats that kept on buzzing made for weird uniforms though.",
        stars: 3,
        name: "Thomas Combs"
    },
]

const home = () => {
    const section = document.createElement("section");
    section.classList.add("container");

    // Header
    const heading = document.createElement("h2");
    heading.textContent = "Where Every Bite is Golden."
    heading.setAttribute("style", "font-style: italic");

    // Reviews
    const cardGrid = document.createElement("div");
    cardGrid.classList.add("card-grid");
    reviews.forEach(({ quote, stars, name }) => {
        const reviewCard = ReviewCard({ quote, stars, name });
        cardGrid.appendChild(reviewCard);
    });

    // Append Children to section
    section.appendChild(heading);
    section.appendChild(cardGrid);

    return section;
}

export default home;