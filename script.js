// ===== DATA =====
const galleryImages=[
  {src:"https://z-cdn-media.chatglm.cn/files/77070db4-4817-4c74-ae42-34a7ef8f0fc5.jpeg?auth_key=1884231184-db629aacb22d4e478e6ccb27fc2a71d5-0-0361bf159e478e3ef7d6130a026915e8",caption:"🏪 Our Storefront"},
  {src:"https://z-cdn-media.chatglm.cn/files/aca2720f-9a1d-4a70-9b54-0bfce46b1ce3.jpeg?auth_key=1884231184-4c80a88b00714b38943482878c5105fe-0-34fc0c56ae036e00bfcf7e5bfcb09674",caption:"🛒 Checkout Counter"},
  {src:"https://z-cdn-media.chatglm.cn/files/1a02ad39-3f0a-4fef-87fb-b777301f7602.jpeg?auth_key=1884231184-fa890d2c1e954c0ba53fb6e2408fe92f-0-9277720c4b6dc8c4a712aa38ba1e00ad",caption:"🥫 Pet Food Aisle"},
  {src:"https://z-cdn-media.chatglm.cn/files/2c27a194-1d54-4c1d-b5a2-e1fb9dfeaa14.jpeg?auth_key=1884231184-32e78c4043df4175af6b00a85da8a8bd-0-567a9d7e09ed94c82f0cfb5614530861",caption:"🛍️ Product Display"},
  {src:"https://z-cdn-media.chatglm.cn/files/6e055a50-c5b9-4459-bbc7-65dcfc034abc.jpeg?auth_key=1884231184-e1aa707ac6bc4900befd889984ec6802-0-6445292cf260f0f77f865f431829f2d8",caption:"🏠 Shop Interior"},
  {src:"https://z-cdn-media.chatglm.cn/files/231d4881-b195-44be-99a5-8bef57a5267e.jpeg?auth_key=1884231184-e5f7319bea0249a89f293734e88e5782-0-a8b4ca99231d266935a52936b56b9d13",caption:"✂️ Grooming Salon"},
  {src:"https://z-cdn-media.chatglm.cn/files/01e544ca-c3fe-4e32-820f-23cce3211d33.jpeg?auth_key=1884231184-ede3653c4225482687a638e2ed140f06-0-a8203bcb48399e5b4309a01b9a882989",caption:"👩‍💼 Our Friendly Team"},
  {src:"https://z-cdn-media.chatglm.cn/files/22f39510-80ab-4284-a629-c4f646440a73.jpeg?auth_key=1884231184-04305b0e02204ce39b200bc8cf1e1413-0-42b26ae1a8bc1877138fc4d84a9d3299",caption:"🎾 Pet Play Zone"},
  {src:"https://z-cdn-media.chatglm.cn/files/cc39d6fd-1be9-43c9-8e05-0149a0b62d3f.jpeg?auth_key=1884231184-57fbf794826f471cb777cde40582eab4-0-3f15ede51afc28c54b1bcb3d2c3824cb",caption:"🐾 Our Adorable Pets"}
];

const products=[
  {id:1,name:"Premium Grain-Free Dog Food",category:"dog-food",price:34.99,oldPrice:42.99,image:"https://z-cdn-media.chatglm.cn/files/1d13f664-5a00-4ff5-a296-407439ac5eb1.jpeg?auth_key=1884231184-11af4765c5c54fc4ae7c02edffa46888-0-d0b20b553c03a0b76f167c7e7f01f4a0",rating:4.8,reviews:245,badge:"Bestseller",badgeColor:"bg-primary-700"},
  {id:2,name:"Salmon Delight Cat Food",category:"cat-food",price:24.99,oldPrice:29.99,image:"https://z-cdn-media.chatglm.cn/files/309697d0-628c-4825-8415-bf89fdb9bef5.jpeg?auth_key=1884300634-704baa4b551e4ea2b4aa4c31f1bf3aba-0-b8d0e5efd45bf180f221836b5d61f170",rating:4.9,reviews:189,badge:"Popular",badgeColor:"bg-purple-700"},
  {id:3,name:"Adjustable Reflective Dog Collar",category:"accessories",price:14.99,oldPrice:null,image:"https://z-cdn-media.chatglm.cn/files/457cb918-b23e-4787-bb3d-8b69030678eb.jpeg?auth_key=1884231184-1ed10be81eec4d3486e053a7cf6e9e3c-0-345de06082aabdddaf6e5202e85c5161",rating:4.7,reviews:312,badge:null,badgeColor:""},
  {id:4,name:"Luxury Cat Scratching Post",category:"accessories",price:69.99,oldPrice:89.99,image:"https://z-cdn-media.chatglm.cn/files/e8392af9-b0e0-4d0e-8735-b50e0b443e41.jpeg?auth_key=1884231184-5c2e201c38614fa2b2c1037b13693e14-0-c71e8a66f9388233ab265c65ec9e5ba0",rating:4.6,reviews:156,badge:"Sale",badgeColor:"bg-red-500"},
  {id:5,name:"Interactive Dog Chew Toy",category:"toys",price:12.99,oldPrice:null,image:"https://z-cdn-media.chatglm.cn/files/fba72280-6606-4aca-a331-8429bd42e8a3.jpeg?auth_key=1884231184-2ae116e42e494b11bd1f33fc10bf1d56-0-6b3c96e56fa40f1c4c8ac9d66ccb5b08",rating:4.5,reviews:278,badge:null,badgeColor:""},
  {id:6,name:"Automatic Pet Water Fountain",category:"supplies",price:49.99,oldPrice:59.99,image:"https://z-cdn-media.chatglm.cn/files/500f123a-8760-4835-b735-1556df9f6322.jpeg?auth_key=1884231184-71c9668e009743c38a9f9c57a878bbfb-0-7ecba74287e31180e089ef4a83a07162",rating:4.8,reviews:198,badge:"New",badgeColor:"bg-blue-600"},
  {id:7,name:"Cozy Orthopedic Pet Bed",category:"supplies",price:59.99,oldPrice:79.99,image:"https://z-cdn-media.chatglm.cn/files/105f4b80-2bdb-4088-9a10-f92e8ff56a7a.jpeg?auth_key=1884231184-b3b83193501a487d8bd4514228608ec4-0-89228bae7f4775e480c7df3f3f717380",rating:4.9,reviews:421,badge:"Top Rated",badgeColor:"bg-golden-500"},
  {id:8,name:"Portable Pet Travel Carrier",category:"accessories",price:79.99,oldPrice:null,image:"https://z-cdn-media.chatglm.cn/files/4b36c073-6ea4-453d-a056-86d14a6c7bd9.jpeg?auth_key=1884231184-f05b83de51864e30ae4554dd435c2ea4-0-610df064a0ac364a8000093caf9a5958",rating:4.7,reviews:89,badge:null,badgeColor:""},
  {id:9,name:"Stainless Steel Feeding Bowl Set",category:"supplies",price:19.99,oldPrice:24.99,image:"https://z-cdn-media.chatglm.cn/files/d5b8bcd3-0395-42c7-8519-f3a60e4962c4.jpeg?auth_key=1884231184-8ed3e71a7eb04fd782a5ec848a3ff36a-0-043e3ecb7bcd21ec06829f5cd876791d",rating:4.6,reviews:334,badge:null,badgeColor:""},
  {id:10,name:"Natural Pet Grooming Kit",category:"supplies",price:39.99,oldPrice:49.99,image:"https://z-cdn-media.chatglm.cn/files/99225422-99e6-403a-80a9-f27351424e0b.jpeg?auth_key=1884231184-3081d9dc01f5419fa1f50da58a6bdd6d-0-6166dec0898da580cee5e9b1395dab90",rating:4.8,reviews:167,badge:"Eco",badgeColor:"bg-green-600"}
];

let cart=[], wishlist=[], lbIdx=0;

// ===== PRODUCTS =====
function renderProducts(filter='all'){
  const grid=document.getElementById('productGrid');
  const f=filter==='all'?products:products.filter(p=>p.category===filter);
  grid.innerHTML=f.map(p=>`
    <div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:border-primary-200 transition-all duration-300">
      <div class="relative overflow-hidden">
        <img src="${p.image}" alt="${p.name}" class="product-img w-full h-56 object-cover transition-transform duration-500" loading="lazy">
        ${p.badge?`<span class="absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full">${p.badge}</span>`:''}
        <div class="product-actions absolute bottom-3 left-3 right-3 flex gap-2">
          <button onclick="addToCart(${p.id})" class="flex-1 bg-primary-700 hover:bg-primary-800 text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1"><span class="iconify" data-icon="mdi:cart-plus" data-width="16"></span>Add to Cart</button>
          <button onclick="toggleWish(${p.id})" class="w-10 h-10 bg-white hover:bg-red-50 rounded-xl flex items-center justify-center shadow-sm border border-gray-100"><span class="iconify ${wishlist.includes(p.id)?'text-red-500':'text-gray-400'}" data-icon="${wishlist.includes(p.id)?'mdi:heart':'mdi:heart-outline'}" data-width="18"></span></button>
        </div>
      </div>
      <div class="p-4">
        <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">${p.category.replace('-',' ')}</p>
        <h3 class="font-heading font-bold text-sm text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700">${p.name}</h3>
        <div class="flex items-center gap-1 mb-2"><div class="flex gap-0.5 star">${'<span class="iconify" data-icon="mdi:star" data-width="14"></span>'.repeat(Math.floor(p.rating))}</div><span class="text-xs text-gray-400 ml-1">(${p.reviews})</span></div>
        <div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="font-heading font-bold text-lg text-primary-700">$${p.price.toFixed(2)}</span>${p.oldPrice?`<span class="text-sm text-gray-400 line-through">$${p.oldPrice.toFixed(2)}</span>`:''}</div>${p.oldPrice?`<span class="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">-${Math.round((1-p.price/p.oldPrice)*100)}%</span>`:''}</div>
      </div>
    </div>`).join('');
  setTimeout(()=>{grid.querySelectorAll('.product-card').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition=`all 0.5s cubic-bezier(0.5,0,0,1) ${i*0.05}s`;requestAnimationFrame(()=>{el.style.opacity='1';el.style.transform='translateY(0)'})})},50);
}

function filterProducts(filter){document.querySelectorAll('.filter-btn').forEach(b=>{if(b.dataset.filter===filter){b.classList.add('bg-primary-700','text-white');b.classList.remove('bg-white','text-gray-600','border','border-gray-200')}else{b.classList.remove('bg-primary-700','text-white');b.classList.add('bg-white','text-gray-600','border','border-gray-200')}});renderProducts(filter)}

// ===== CART =====
function addToCart(id){const p=products.find(x=>x.id===id);const e=cart.find(x=>x.id===id);if(e)e.qty++;else cart.push({...p,qty:1});updateCart();showToast(p.name+' added to cart! 🛒','success')}
function removeCart(id){cart=cart.filter(x=>x.id!==id);updateCart()}
function updateQty(id,d){const i=cart.find(x=>x.id===id);if(i){i.qty+=d;if(i.qty<=0)removeCart(id);else updateCart()}}
function updateCart(){const c=document.getElementById('cartCount'),s=cart.reduce((a,b)=>a+b.qty,0),t=cart.reduce((a,b)=>a+b.price*b.qty,0);if(s>0){c.textContent=s;c.classList.remove('hidden')}else c.classList.add('hidden');const l=document.getElementById('cartItemsList'),em=document.getElementById('emptyCart'),f=document.getElementById('cartFooter');if(!cart.length){em.classList.remove('hidden');l.innerHTML='';f.classList.add('hidden')}else{em.classList.add('hidden');f.classList.remove('hidden');document.getElementById('cartSubtotal').textContent='$'+t.toFixed(2);document.getElementById('cartTotal').textContent='$'+t.toFixed(2);l.innerHTML=cart.map(i=>`<div class="flex gap-3 p-3 bg-gray-50 rounded-xl"><img src="${i.image}" alt="${i.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0"><div class="flex-1 min-w-0"><h4 class="font-semibold text-sm text-gray-900 truncate">${i.name}</h4><p class="text-primary-700 font-bold text-sm mt-0.5">$${i.price.toFixed(2)}</p><div class="flex items-center gap-2 mt-1.5"><button onclick="updateQty(${i.id},-1)" class="w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-bold">−</button><span class="text-sm font-semibold w-6 text-center">${i.qty}</span><button onclick="updateQty(${i.id},1)" class="w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-bold">+</button></div></div><button onclick="removeCart(${i.id})" class="self-start p-1 hover:bg-red-50 rounded-lg"><span class="iconify text-gray-400 hover:text-red-500" data-icon="mdi:close" data-width="16"></span></button></div>`).join('')}}
function openCart(){document.getElementById('cartPanel').classList.add('open');document.getElementById('cartOverlay').classList.remove('hidden');document.body.style.overflow='hidden'}
function closeCart(){document.getElementById('cartPanel').classList.remove('open');document.getElementById('cartOverlay').classList.add('hidden');document.body.style.overflow=''}

// ===== WISHLIST =====
function toggleWish(id){const p=products.find(x=>x.id===id);if(wishlist.includes(id)){wishlist=wishlist.filter(x=>x!==id);showToast('Removed from wishlist','info')}else{wishlist.push(id);showToast(p.name+' added to wishlist! ❤️','success')}updateWish();renderProducts(document.querySelector('.filter-btn.bg-primary-700')?.dataset.filter||'all')}
function updateWish(){const c=document.getElementById('wishlistCount');if(wishlist.length>0){c.textContent=wishlist.length;c.classList.remove('hidden')}else c.classList.add('hidden')}
function toggleWishBtn(){if(!wishlist.length){showToast('Wishlist empty. Click ❤️ on products!','info');return}showToast('Wishlist: '+wishlist.map(id=>products.find(p=>p.id===id)?.name).join(', '),'info')}

// ===== SEARCH =====
function openSearch(){document.getElementById('searchOverlay').classList.add('open');document.getElementById('searchInput').focus();document.body.style.overflow='hidden'}
function closeSearch(){document.getElementById('searchOverlay').classList.remove('open');document.getElementById('searchInput').value='';document.body.style.overflow=''}
function handleSearch(q){const r=document.getElementById('searchResults');if(!q.trim()){r.innerHTML='<div class="p-4 text-center text-gray-400 text-sm">Start typing to search...</div>';return}const f=products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.category.includes(q.toLowerCase()));if(!f.length){r.innerHTML='<div class="p-4 text-center text-gray-400 text-sm">No products found.</div>';return}r.innerHTML=f.map(p=>`<button onclick="addToCart(${p.id});closeSearch()" class="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl text-left"><img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0"><div class="flex-1 min-w-0"><p class="font-semibold text-sm text-gray-900 truncate">${p.name}</p><p class="text-xs text-gray-400 capitalize">${p.category.replace('-',' ')}</p></div><span class="font-bold text-primary-700 text-sm">$${p.price.toFixed(2)}</span></button>`).join('')}

// ===== LOGIN =====
function openLogin(){document.getElementById('loginModal').classList.add('open');document.body.style.overflow='hidden'}
function closeLogin(){document.getElementById('loginModal').classList.remove('open');document.body.style.overflow=''}
function switchTab(t){document.querySelectorAll('.ltab').forEach(b=>{if(b.dataset.t===t){b.classList.add('bg-white','text-primary-700','shadow-sm');b.classList.remove('text-gray-500')}else{b.classList.remove('bg-white','text-primary-700','shadow-sm');b.classList.add('text-gray-500')}});document.getElementById('loginForm').classList.toggle('hidden',t!=='login');document.getElementById('signupForm').classList.toggle('hidden',t!=='signup')}

// ===== BOOKING =====
function openBooking(){document.getElementById('bookingModal').classList.add('open');document.body.style.overflow='hidden'}
function closeBooking(){document.getElementById('bookingModal').classList.remove('open');document.body.style.overflow=''}

// ===== MOBILE MENU =====
function toggleMobileMenu(){const m=document.getElementById('mobileMenu'),o=document.getElementById('mobileMenuOverlay');m.classList.toggle('open');o.classList.toggle('hidden');document.body.style.overflow=m.classList.contains('open')?'hidden':''}

// ===== LIGHTBOX =====
function openLB(i){lbIdx=i;document.getElementById('lbImg').src=galleryImages[i].src;document.getElementById('lbCap').textContent=galleryImages[i].caption;document.getElementById('lightbox').classList.add('open');document.body.style.overflow='hidden'}
function closeLightbox(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow=''}
function navLB(d){lbIdx=(lbIdx+d+galleryImages.length)%galleryImages.length;document.getElementById('lbImg').src=galleryImages[lbIdx].src;document.getElementById('lbCap').textContent=galleryImages[lbIdx].caption}
document.addEventListener('keydown',e=>{if(!document.getElementById('lightbox').classList.contains('open'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')navLB(-1);if(e.key==='ArrowRight')navLB(1)});

// ===== FAQ =====
function toggleFaq(btn){const a=btn.nextElementSibling,ic=btn.querySelector('.faq-icon'),open=a.classList.contains('open');document.querySelectorAll('.faq-answer').forEach(x=>x.classList.remove('open'));document.querySelectorAll('.faq-icon').forEach(x=>x.style.transform='rotate(0deg)');if(!open){a.classList.add('open');ic.style.transform='rotate(180deg)'}}

// ===== TOAST =====
function showToast(msg,type='success'){const c=document.getElementById('toastContainer'),t=document.createElement('div');const bg=type==='success'?'bg-primary-700':type==='error'?'bg-red-500':'bg-gray-800';const ic=type==='success'?'mdi:check-circle':type==='error'?'mdi:alert-circle':'mdi:information';t.className='toast '+bg;t.innerHTML=`<span class="iconify" data-icon="${ic}" data-width="18"></span>${msg}`;c.appendChild(t);setTimeout(()=>t.remove(),3000)}

// ===== SCROLL REVEAL =====
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
function initReveal(){document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))}

// ===== NAVBAR SCROLL SHADOW =====
window.addEventListener('scroll',()=>{
  const h=document.querySelector('header');
  if(window.pageYOffset>100)h.classList.add('shadow-md');else h.classList.remove('shadow-md');
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
  renderProducts('all');
  initReveal();
});