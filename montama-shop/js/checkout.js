document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const cart =
                getCart();


            const message =
                document.getElementById(
                    "checkoutMessage"
                );


            if (!cart.length) {

                message.textContent =
                    "Your cart is empty.";

                return;

            }


            const formData =
                new FormData(
                    event.target
                );


            const order = {

                id:
                    "KB-" +
                    Date.now(),

                customer:
                    Object.fromEntries(
                        formData.entries()
                    ),

                items:
                    cart,

                createdAt:
                    new Date().toISOString()

            };


            localStorage.setItem(

                "montama_last_order",

                JSON.stringify(order)

            );


            localStorage.removeItem(
                "montama_cart"
            );


            message.innerHTML = `

                <div class="success">

                    Order
                    <strong>
                        ${order.id}
                    </strong>
                    placed successfully!

                    <br><br>

                    We will contact you
                    for delivery.

                </div>

            `;


            event.target.reset();


            updateCartCount();

        }
    );
