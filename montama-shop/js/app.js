document.addEventListener(
    "DOMContentLoaded",
    () => {

        const box =
            document.getElementById(
                "featuredProducts"
            );


        if (!box) {
            return;
        }


        const featured =
            products.filter(
                product =>
                    product.featured &&
                    product.active
            );


        box.innerHTML =
            featured
                .map(productCard)
                .join("");

    }
);


function productCard(product) {

    return `

        <a
            class="product-card"
            href="product.html?id=${product.id}"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>


                <h3>
                    ${product.name}
                </h3>


                <div class="product-rating">

                    ⭐ ${product.rating}

                    <span>
                        (${product.reviews})
                    </span>

                </div>


                <div class="product-price">

                    ${product.price} MAD

                    ${
                        product.oldPrice
                            ?
                        `<span class="old-price">
                            ${product.oldPrice} MAD
                        </span>`
                            :
                        ""
                    }

                </div>

            </div>

        </a>

    `;

}
