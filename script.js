let big_img = document.getElementById("big_img");
let small_img1 = document.getElementById("small_img1");
let small_img2 = document.getElementById("small_img2");
let small_img3 = document.getElementById("small_img3");
let small_img4 = document.getElementById("small_img4");
big_img.src =
    "https://www.uzlidep.uz/storage/uploads/shop/KFOappKT5vuBGPrflTQ5BIiVLLNBglH9QCeRUWTM.jpg";
small_img1.src =
    "https://m.media-amazon.com/images/I/61Bd24JXECL._AC_UY1100_.jpg";

small_img2.src =
    "https://aafnopashal.com/php_assets/uploads/2023/10/Black-Full-hudi-T-shirt-aafnopashal.webp";

small_img3.src =
    "https://res.cloudinary.com/dzdgpwtox/image/upload/w_900,c_scale/l_final_designs:seller_design_475013:f_20230502131058.png,w_300,h_300,c_fit,x_0,y_0/hoodies/black_front.jpg";
small_img4.src =
    "https://cdn.othoba.com/images/thumbs/1249035_england-hudi-for-man-stylish-premium-hoodies-for-man-england-hudi.jpeg";

small_img1.addEventListener("click", () => {
    big_img.src = small_img1.src;
});
small_img2.addEventListener("click", () => {
    big_img.src = small_img2.src;
});
small_img3.addEventListener("click", () => {
    big_img.src = small_img3.src;
});
small_img4.addEventListener("click", () => {
    big_img.src = small_img4.src;
});

// let katta = document.getElementById("katta")
let card = document.getElementById("card")
let image_1 = document.getElementById("image_1")
let text = document.getElementById("text")
let text_1 = document.getElementById("text_1")
let image_2 = document.getElementById("image_2")
let btn = document.getElementById("btn")



let arr = [
    {
        img: "./image 23 (5).png",
        h6: "Lorem ipsum dolor sit amet",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        icon: "./group 24 (3).png",
        btn: "Добавить в корзину"
    },
    {
        img: "./image 23 (5).png",
        h6: "Lorem ipsum dolor sit amet",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        icon: "./group 24 (3).png",
        btn: "Добавить в корзину"
    },
    {
        img: "./image 23 (5).png",
        h6: "Lorem ipsum dolor sit amet",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        icon: "./group 24 (3).png",
        btn: "Добавить в корзину"
    },
    {
        img: "./image 23 (5).png",
        h6: "Lorem ipsum dolor sit amet",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.",
        icon: "./group 24 (3).png",
        btn: "Добавить в корзину"
    },
    // qolganlari...
]

let wrapper = document.getElementById("wrapper")

// wrapperga style
wrapper.style.display = "flex"
wrapper.style.flexWrap = "wrap"
wrapper.style.gap = "20px"

arr.map((item) => {

    let card = document.createElement("div")
    let img = document.createElement("img")
    let h6 = document.createElement("h6")
    let p = document.createElement("p")
    let icon = document.createElement("img")
    let btn = document.createElement("button")

    img.src = item.img
    h6.textContent = item.h6
    p.textContent = item.p
    icon.src = item.icon
    btn.textContent = item.btn

    card.appendChild(img)
    card.appendChild(h6)
    card.appendChild(p)
    card.appendChild(icon)
    card.appendChild(btn)
    wrapper.appendChild(card)

    // card style
    card.style.background = "#FFFFFF"
    card.style.width = "264px"
    card.style.height = "522px"
    card.style.display = "flex"
    card.style.flexDirection = "column"
    card.style.gap = "10px"
    card.style.padding = "20px"
    card.style.borderRadius = "8px"
    card.style.alignItems = "ceneter"
})
