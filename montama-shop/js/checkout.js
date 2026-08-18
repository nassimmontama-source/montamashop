document.getElementById("checkoutForm").addEventListener("submit",e=>{
 e.preventDefault(); const cart=getCart();
 if(!cart.length){document.getElementById("checkoutMessage").textContent="Your cart is empty.";return;}
 const form=new FormData(e.target); const order={id:"KB-"+Date.now(),customer:Object.fromEntries(form.entries()),items:cart,createdAt:new Date().toISOString()};
 localStorage.setItem("montama_last_order",JSON.stringify(order)); localStorage.removeItem("montama_cart");
 document.getElementById("checkoutMessage").innerHTML=`<div class="success">Order ${order.id} placed successfully! We will contact you for delivery.</div>`;
 e.target.reset(); updateCartCount();
});
