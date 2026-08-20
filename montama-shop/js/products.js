const productId =
    new URLSearchParams(
        location.search
    ).get("id");


const product =
    getProductById(productId);


const root =
    document.getElementById(
        "productDetails"
    );


if (!product) {

    root.innerHTML =
        "<h1>Product not found</h1>";

} else {


    const sizeOptions =
        product.variants.sizes
            .map(
                size =>
                    `<option>${size}</option>`
            )
            .join("");


    const colorOptions =
        product.variants.colors
            .map(
                color =>
                    `<option>${color}</option>`
            )
            .join("");


    root.innerHTML = `

        <div class="product-detail">


            <div class="product-image large">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div>

                <p class="eyebrow">
                    ${product.category}
                </p>


                <h1>
                    ${product.name}
                </h1>


                <p class="product-rating">
                    ⭐ ${product.rating}
                    (${product.reviews} reviews)
                </p>


                <h2>
                    ${product.price} MAD
                </h2>


                <p class="description">
                    ${product.description}
                </p>


                <label>

                    Size

                    <select id="size">
                        ${sizeOptions}
                    </select>

                </label>


                <label>

                    Color

                    <select id="color">
                        ${colorOptions}
                    </select>

                </label>


                <label>

                    Quantity

                    <input
                        id="qty"
                        type="number"
                        min="1"
                        value="1"
                    >

                </label>


                <button
                    class="button"
                    id="add"
                >
                    ADD TO CART
                </button>


            </div>


        </div>

    `;


    document
        .getElementById("add")
        .onclick = () => {


            const quantity =
                Number(
                    document.getElementById(
                        "qty"
                    ).value
                );


            const size =
                document.getElementById(
                    "size"
                ).value;


            const color =
                document.getElementById(
                    "color"
                ).value;


            addToCart(
                product.id,
                quantity,
                size,
                color
            );

        };

}
