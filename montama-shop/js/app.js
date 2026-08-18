document.addEventListener("DOMContentLoaded",()=>{
 const box=document.getElementById("featuredProducts"); if(!box)return;
 box.innerHTML=products.filter(p=>p.featured&&p.active).map(productCard).join("");
});
function productCard(p){return `<a class="product-card" href="product.html?id=${p.id}"><div class="product-image"><img src="${p.image}" alt="${p.name}"></div><div class="product-info"><p class="product-category">${p.category}</p><h3>${p.name}</h3><div class="product-rating">⭐ ${p.rating} <span>(${p.reviews})</span></div><div class="product-price">${p.price} MAD ${p.oldPrice?`<span class="old-price">${p.oldPrice} MAD</span>`:""}</div></div></a>`;}
