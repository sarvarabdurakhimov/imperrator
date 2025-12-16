// DATA
let arr = [
    {
        img: "./image 23 (13).png",
        title: "LOREM IPSUM DOLOR SIT AMET",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        rating: 3.5,
        price: "855 у.е."
    },
    {
        img: "./image 23 (12).png",
        title: "LOREM IPSUM DOLOR SIT AMET",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        rating: 3.5,
        price: "855 у.е."
    },
    {
        img: "./image 23 (11).png",
        title: "LOREM IPSUM DOLOR SIT AMET",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        rating: 3.5,
        price: "855 у.е."
    },
    {
        img: "./image 23 (10).png",
        title: "LOREM IPSUM DOLOR SIT AMET",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        rating: 3.5,
        price: "855 у.е."
    }
]

// TITLE
document.getElementById("title").textContent = "Похожие товары";

// WRAPPER
let products = document.getElementById("products");
products.style.display = "flex";
products.style.gap = "25px";
products.style.justifyContent = "center";
products.style.marginTop = "40px";

// CREATE CARDS
arr.map(item => {

    let card = document.createElement("div");
    card.style.width = "260px";
    card.style.background = "#fff";
    card.style.borderRadius = "12px";
    card.style.overflow = "hidden";
    card.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

    let img = document.createElement("img");
    img.src = item.img;
    img.style.width = "100%";

    let box = document.createElement("div");
    box.style.padding = "15px";

    let h4 = document.createElement("h4");
    h4.textContent = item.title;
    h4.style.fontSize = "15px";
    h4.style.fontWeight = "700";
    h4.style.marginBottom = "10px";

    let p = document.createElement("p");
    p.textContent = item.desc;
    p.style.fontSize = "13px";
    p.style.color = "#444";
    p.style.marginBottom = "15px";

    // Rating + Price block
    let rp = document.createElement("div");
    rp.style.display = "flex";
    rp.style.justifyContent = "space-between";
    rp.style.marginBottom = "15px";

    let rating = document.createElement("span");
    rating.innerHTML = "⭐ 3,5";

    let price = document.createElement("span");
    price.textContent = item.price;

    rp.appendChild(rating);
    rp.appendChild(price);

    // Button
    let btn = document.createElement("button");
    btn.textContent = "ДОБАВИТЬ В КОРЗИНУ";
    btn.style.background = "#FFC000";
    btn.style.width = "100%";
    btn.style.padding = "12px 0";
    btn.style.borderRadius = "8px";
    btn.style.fontWeight = "700";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.marginTop = "10px";

    // append to card
    box.appendChild(h4);
    box.appendChild(p);
    box.appendChild(rp);
    box.appendChild(btn);

    card.appendChild(img);
    card.appendChild(box);

    products.appendChild(card);
});
