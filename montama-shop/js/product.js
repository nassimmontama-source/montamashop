const p=getProductById(new URLSearchParams(location.search).get("id"));
const root=document.getElementById("productDetails");
if(!p){root.innerHTML="<h1>Product not found</h1>";}
else{
 const sizeOptions=p.variants.sizes.map(s=>`<option>${s}</option>`).join("");
 const colorOptions=p.variants.colors.map(c=>`<option>${c}</option>`).join("");
 root.innerHTML=`<div class="product-detail"><div class="product-image large"><img src="${p.image}" alt="${p.name}"></div><div><p class="eyebrow">${p.category}</p><h1>${p.name}</h1><p class="product-rating">⭐ ${p.rating} (${p.reviews} reviews)</p><h2>${p.price} MAD</h2><p class="description">${p.description}</p><label>Size<select id="size">${sizeOptions}</select></label><label>Color<select id="color">${colorOptions}</select></label><label>Quantity<input id="qty" type="number" min="1" value="1"></label><button class="button" id="add">ADD TO CART</button></div></div>`;
 document.getElementById("add").onclick=()=>addToCart(p.id,Number(document.getElementById("qty").value),document.getElementById("size").value,document.getElementById("color").value);
}
