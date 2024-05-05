import data from "./data.js";

const div = document.querySelector(".products")
data.forEach((product) => {
    const {
        id,
        title,
        description,
        thumbnail,
        price,
        discountPercentage,
        rating,
        brand,
        stock,
        category,
        images,
    } = product;

    const img = document.createElement("img")
    const divv = document.createElement("div")
    const p = document.createElement("p")
    const h4 = document.createElement("h4")
    const h1 = document.createElement("h1")
    const h6 = document.createElement("h6")

    h1.textContent = title;
    p.textContent = description;
    h4.textContent = `${product.price}$`;
    h6.textContent = "If you buy two, you'll get a third at 50% off 🎁";

    img.src = thumbnail;

    img.height = 300;

    img.width = 600;

    divv.appendChild(img);
    div.appendChild(divv);
    divv.appendChild(h1);
    divv.appendChild(p);
    divv.appendChild(h4);
    divv.appendChild(h6);

    console.log(divv)
}); 