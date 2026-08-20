function renderCart() {

    const items =
        getCart();
    

    const box =
        document.getElementById(
            "cartItems"
        );


    const summary =
        document.getElementById(
            "cartSummary"
        );


    if (!items.length) {

        box.innerHTML =
            "<p>Your cart is empty.</p>";

        summary.innerHTML = "";

        return;

    }


    let total = 0;


    box.innerHTML =
        items.map(item => {


            const product =
                getProductById(
                    item.id
                );


            const lineTotal =
                product.price *
                item.quantity;


            total += lineTotal;


            return `

                <div class="cart-item">

                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ${item.size}
                            ${item.color}
                        </p>

                        <p>
                            ${product.price} MAD
                            ×
                            ${item.quantity}
                            =
                            ${lineTotal} MAD
                        </p>

                    </div>


                    <button
                        onclick="
                            removeFromCart(
                                '${item.key}'
                            );
                            renderCart();
                        "
                    >
                        Remove
                    </button>

                </div>

            `;

        }).join("");


    summary.innerHTML = `

        <h2>
            Total: ${total} MAD
        </h2>


        <a
            class="button"
            href="checkout.html"
        >
            CHECKOUT
        </a>

    `;

}


renderCart();
