function renderCart(){
 const items=getCart(), box=document.getElementById("cartItems"), sum=document.getElementById("cartSummary");
 if(!items.length){box.innerHTML="<p>Your cart is empty.</p>";sum.innerHTML="";return;}
 let total=0;
 box.innerHTML=items.map(i=>{const p=getProductById(i.id);const line=p.price*i.quantity;total+=line;return `<div class="cart-item"><div><h3>${p.name}</h3><p>${i.size} ${i.color}</p><p>${p.price} MAD × ${i.quantity} = ${line} MAD</p></div><button onclick="removeFromCart('${i.key}');renderCart()">Remove</button></div>`}).join("");
 sum.innerHTML=`<h2>Total: ${total} MAD</h2><a class="button" href="checkout.html">CHECKOUT</a>`;
}
renderCart();
