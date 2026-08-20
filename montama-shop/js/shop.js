const params =
    new URLSearchParams(
        location.search
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );


const category =
    params.get("category");


if (category) {

    categoryFilter.value =
        category;

}


function renderShop() {

    const search =
        (
            searchInput.value || ""
        ).toLowerCase();


    const selectedCategory =
        categoryFilter.value;


    const list =
        products.filter(product => {

            if (!product.active) {
                return false;
            }


            if (
                selectedCategory &&
                product.category !==
                selectedCategory
            ) {

                return false;

            }


            const searchableText =

                `${product.name}
                ${product.category}
                ${product.description}`
                    .toLowerCase();


            if (
                search &&
                !searchableText.includes(search)
            ) {

                return false;

            }


            return true;

        });


    const container =
        document.getElementById(
            "shopProducts"
        );


    if (!list.length) {

        container.innerHTML =
            "<p>No products found.</p>";

        return;

    }


    container.innerHTML =
        list.map(shopProductCard).join("");

}


function shopProductCard(product) {

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
                    (${product.reviews})
                </div>


                <div class="product-price">
                    ${product.price} MAD
                </div>

            </div>

        </a>

    `;

}


searchInput.addEventListener(
    "input",
    renderShop
);


categoryFilter.addEventListener(
    "change",
    renderShop
);


renderShop();
