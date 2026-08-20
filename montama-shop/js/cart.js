function getCart() {

    return JSON.parse(
        localStorage.getItem("montama_cart") || "[]"
    );

}


function saveCart(cart) {

    localStorage.setItem(
        "montama_cart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


function addToCart(
    id,
    quantity = 1,
    size = "",
    color = ""
) {

    const product = getProductById(id);

    if (!product) {
        return;
    }


    const cart = getCart();


    const key =
        `${id}-${size}-${color}`;


    const existing =
        cart.find(item => item.key === key);


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            key: key,

            id: Number(id),

            quantity: quantity,

            size: size,

            color: color

        });

    }


    saveCart(cart);


    alert("Added to cart!");

}


function removeFromCart(key) {

    const cart =
        getCart().filter(
            item => item.key !== key
        );


    saveCart(cart);

}


function updateCartCount() {

    const element =
        document.getElementById("cartCount");


    if (!element) {
        return;
    }


    const count =
        getCart().reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    element.textContent = count;

}


document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);
