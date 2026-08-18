const params=new URLSearchParams(location.search);
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");
if(params.get("category"))categoryFilter.value=params.get("category");
function renderShop(){
 const q=(searchInput.value||"").toLowerCase(), cat=categoryFilter.value;
 const list=products.filter(p=>p.active&&(!cat||p.category===cat)&&(!q||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));
 document.getElementById("shopProducts").innerHTML=list.length?list.map(productCard).join(""):"<p>No products found.</p>";
}
searchInput.addEventListener("input",renderShop); categoryFilter.addEventListener("change",renderShop); renderShop();
function productCard(p){return `<a class="product-card" href="product.html?id=${p.id}"><div class="product-image"><img src="${p.image}" alt="${p.name}"></div><div class="product-info"><p class="product-category">${p.category}</p><h3>${p.name}</h3><div class="product-rating">⭐ ${p.rating} (${p.reviews})</div><div class="product-price">${p.price} MAD</div></div></a>`;}
