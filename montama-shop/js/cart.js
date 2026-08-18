function getCart(){return JSON.parse(localStorage.getItem("montama_cart")||"[]");}
function saveCart(cart){localStorage.setItem("montama_cart",JSON.stringify(cart));updateCartCount();}
function addToCart(id,quantity=1,size="",color=""){
 const product=getProductById(id); if(!product)return;
 const cart=getCart(); const key=`${id}-${size}-${color}`;
 const existing=cart.find(i=>i.key===key);
 if(existing) existing.quantity+=quantity;
 else cart.push({key,id:Number(id),quantity,size,color});
 saveCart(cart);
 alert("Added to cart!");
}
function removeFromCart(key){saveCart(getCart().filter(i=>i.key!==key));}
function updateCartCount(){
 const el=document.getElementById("cartCount"); if(!el)return;
 el.textContent=getCart().reduce((n,i)=>n+i.quantity,0);
}
document.addEventListener("DOMContentLoaded",updateCartCount);
