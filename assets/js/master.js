// Moblile Nav
const restorativeArrow = document.querySelector(".restorativeArrow")
const restorativeArrowDown = document.querySelector(".restorativeArrowDown")
const restorativeContent = document.querySelector(".restorativeContent")
console.log(restorativeArrow);
restorativeArrow.addEventListener("click",function(){
    restorativeArrow.style.display="none";
    restorativeArrowDown.style.display="block";
    restorativeContent.style.display="block";
    const ConsumablesArrow = document.querySelector(".ConsumablesArrow")
    const ConsumablesArrowDown = document.querySelector(".ConsumablesArrowDown")
    const consumablesContent = document.querySelector(".consumablesContent")
    ConsumablesArrow.addEventListener("click",function(){
        ConsumablesArrow.style.display="none";
        ConsumablesArrowDown.style.display="block";
        consumablesContent.style.display="block";
    })
    ConsumablesArrowDown.addEventListener("click",function(){
        ConsumablesArrow.style.display="block";
        ConsumablesArrowDown.style.display="none";
        consumablesContent.style.display="none";
    })
})
restorativeArrowDown.addEventListener("click",function(){
    restorativeArrow.style.display="block";
    restorativeArrowDown.style.display="none";
    restorativeContent.style.display="none";
})
const products = [
        {
            "id":1,
            "Image": "assets/images/2314_1.webp",
            "title": "GC-America Fuji IX Capsule",
            "price": "95 EGP",
        },
        {
            "id":2,
            "Image": "assets/images/2355_1.webp",
            "title": "GC-America Fuji IX Capsule",
            "price": "36 EGP",
        },
        {
            "id":3,
            "Image": "assets/images/361_1.webp",
            "title": "Meta Biomed Etchant - 3g syringe",
            "price": "90 EGP",
        },
        {
            "id":4,
            "Image": "assets/images/2187_1.webp",
            "title": "GC-America Fuji II LC",
            "price": "90 EGP",
        },
        {
            "id":5,
            "Image": "assets/images/3270_1.webp",
            "title": "Matrix Band China (10pcs)",
            "price": "8 EGP",
        },
        {
            "id":6,
            "Image": "assets/images/2314_1.webp",
            "title": "GC-America Fuji I Capsules",
            "price": "40 EGP",
        },
        {
            "id":7,
            "Image": "assets/images/6228_1.webp",
            "title": "Bisco TheraCal 1g Syringe",
            "price": "500 EGP",
        },
        {
            "id":8,
            "Image": "assets/images/3129_1.webp",
            "title": "EZ-Shine Composite Polishing paste",
            "price": "65 EGP",
        },
        {
            "id":9,
            "Image": "assets/images/26654_1.webp",
            "title": "Prevest Orafil G Temporary filling 40g",
            "price": "115 EGP",
        },
        {
            "id":10,
            "Image": "assets/images/3270_1.webp",
            "title": "MATRIX BAND CHINA (10PCS)",
            "price": "8 EGP",
        },
        {
            "id":11,
            "Image": "assets/images/24979_1.webp",
            "title": "Meta Biomed Nexcomp LC Nanohybrid Composite",
            "price": "230 EGP",
        },
        {
            "id":12,
            "Image": "assets/images/3598_1.webp",
            "title": "TOR-VM Fixing Wooden Wedges (100pcs) - 4 Types",
            "price": "95 EGP",
        },
        {
            "id":13,
            "Image": "assets/images/361_1.webp",
            "title": "Diamond Wedges 1pc",
            "price": "37 EGP",
        },
        {
            "id":14,
            "Image": "assets/images/2305_1.webp",
            "title": "GC-America EQUIA Forte HT Fil",
            "price": "95 EGP",
        },
        {
            "id":15,
            "Image": "assets/images/33003_1.webp",
            "title": "Kerr HERCULITE CLASSIC KIT TK",
            "price": "1,900 EGP",
        },
        {
            "id":16,
            "Image": "assets/images/2282_1.webp",
            "title": "Spident Fine Etch 5ml",
            "price": "98 EGP",
        },
        {
            "id":17,
            "Image": "assets/images/2326_1.webp",
            "title": "schutz Capo composite universal 6g",
            "price": "610 EGP",
        },
        {
            "id":18,
            "Image": "assets/images/35028_1.webp",
            "title": "Dental Polishing Brush - 1 piece",
            "price": "2 EGP",
        },
        {
            "id":19,
            "Image": "assets/images/298_1.webp",
            "title": "Bisco All-Bond Universal 0.5ml",
            "price": "310 EGP",  
        },
        {
            "id":20,
            "Image": "assets/images/3311_1.webp",
            "title": "Meta Biomed Nexcomp Composite (4g)",
            "price": "225 EGP",
        },
        {
            "id":21,
            "Image": "assets/images/2217_1.webp",
            "title": "SDI Riva Self Cure Capsule",
            "price": "78 EGP",
        },
        {
            "id":22,
            "Image": "assets/images/32827_1.webp",
            "title": "Mediclus Any-Com Flow Composite (2g) (Expiry...)",
            "price": "205 EGP",
        },
        {
            "id":23,
            "Image": "assets/images/457_1.webp",
            "title": "Bisco All-Bond Universal Adhesive 4ml",
            "price": "1,540 EGP",
        },
        {
            "id":24,
            "Image": "assets/images/809264.webp",
            "title": "Polydentia Unica anterior Matrices 1pc",
            "price": "40 EGP",
        },
        {
            "id":25,
            "Image": "assets/images/2217_1.webp",
            "title": "Amalgam Magic Fill #Spill 2 (50pcs)",
            "price": "950 EGP",
        },
        {
            "id":26,
            "Image": "assets/images/2326_1.webp",
            "title": "ENA Shiny S Goat Hair Brush",
            "price": "60 EGP",
        },
        {
            "id":27,
            "Image": "assets/images/3311_1.webp",
            "title": "Meta Biomed Nexcomp Composite (4g)",
            "price": "225 EGP",
        },
        {
            "id":28,
            "Image": "assets/images/24979_1.webp",
            "title": "Meta Biomed Nexcomp LC Nanohybrid Composite",
            "price": "230 EGP",
        },
]

const prodCont = document.querySelector(".products-cont");
const cart = JSON.parse(localStorage.getItem('cart'))?? [];
console.log(cart);
// console.log(cart);

displayData();

function displayData(){
    let elements = '';
    products.forEach(product =>{
        elements += `
        <div class="product d-flex flex-column justify-content-evenly col-12 col-md-4 col-lg-3" data-id=${product.id}>
                        <div class="img">
                            <img src=${product.Image} class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <p class="card-text">${product.title}</p>
                            <p class="price">${product.price}</p>
                        </div>
                        <div class="button">
                            <button type="button" class="btn btn-warning Add-To-Cart">Add To Cart</button>
                        </div>
                    </div>
        `
    })
    prodCont.innerHTML = elements;
    addEventsToBtn();
    
}

function addEventsToBtn(){
    const addToCartBtn = document.querySelectorAll(".Add-To-Cart");

    addToCartBtn.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            const perant = btn.closest('.product');
            const id = perant.dataset.id;

            const product = products.find(product => product.id == id);

            const cartProd = cart.find(product => product.id == id);

            if(cartProd == undefined){
                cart.push({...product, quantity:1});
            }
            else{
                cartProd.quantity++;
            }

            console.log(JSON.stringify(cart));
            localStorage.setItem('cart', JSON.stringify(cart))

        })
    })
}
