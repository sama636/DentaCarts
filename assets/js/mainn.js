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
        "id": 1,
        "Image": "assets/images/3930_8265.webp",
        "title": "Medin Navigator Evo Start Kit",
        "price": 1175,
    },
    {
        "id": 2,
        "Image": "assets/images/2953_1.webp",
        "title": "B&E X-Temp LC Temporary filling (3g)",
        "price": 125,
    },
    {
        "id": 3,
        "Image": "assets/images/3087_1.webp",
        "title": "DETAX Fermin Temporary filling (40g)",
        "price": 95,
    },
    {
        "id": 4,
        "Image": "assets/images/3181_1.webp",
        "title": "i-Dental i-PRO Temporary Filling Material (38g)",
        "price": 85,
    },
    {
        "id": 5,
        "Image": "assets/images/3212_1.webp",
        "title": "Maquira Obtur Temporary filling (25g)",
        "price": 85,
    },
    {
        "id": 6,
        "Image": "assets/images/39238_1.webp",
        "title": "HANDAE HanTemp LC",
        "price": 125,
    },
    {
        "id": 7,
        "Image": "assets/images/42577_1.webp",
        "title": "WP Dent A Cav (Temp. Filling White 30g)",
        "price": 160,
    },
    {
        "id": 8,
        "Image": "assets/images/3129_1.webp",
        "title": "EZ-Shine Composite Polishing paste",
        "price": 65,
    },
    {
        "id": 9,
        "Image": "assets/images/26654_1.webp",
        "title": "Prevest Orafil G Temporary filling 40g",
        "price": 115,
    },
    {
        "id": 10,
        "Image": "assets/images/3270_1.webp",
        "title": "MATRIX BAND CHINA (10PCS)",
        "price": 8,
    },
    {
        "id": 11,
        "Image": "assets/images/24979_1.webp",
        "title": "Meta Biomed Nexcomp LC Nanohybrid Composite",
        "price": 230,
    },
    {
        "id": 12,
        "Image": "assets/images/3598_1.webp",
        "title": "TOR-VM Fixing Wooden Wedges (100pcs) - 4 Types",
        "price": 95,
    },
    {
        "id": 13,
        "Image": "assets/images/361_1.webp",
        "title": "Diamond Wedges 1pc",
        "price": 37,
    },
    {
        "id": 14,
        "Image": "assets/images/2305_1.webp",
        "title": "GC-America EQUIA Forte HT Fil",
        "price": 95,
    },
    {
        "id": 18,
        "Image": "assets/images/33003_1.webp",
        "title": "Kerr HERCULITE CLASSIC KIT TK",
        "price": 1900,
    },
    {
        "id": 18,
        "Image": "assets/images/2282_1.webp",
        "title": "Spident Fine Etch 5ml",
        "price": 98,
    },
    {
        "id": 19,
        "Image": "assets/images/2326_1.webp",
        "title": "schutz Capo composite universal 6g",
        "price": 610,
    },
    {
        "id": 20,
        "Image": "assets/images/35028_1.webp",
        "title": "Dental Polishing Brush - 1 piece",
        "price": 2,
    },
    {
        "id": 21,
        "Image": "assets/images/298_1.webp",
        "title": "Bisco All-Bond Universal 0.5ml",
        "price": 310,  
    },
    {
        "id": 22,
        "Image": "assets/images/51837_1.webp",
        "title": "Octa-Prep EDTA Cream",
        "price": 65,
    },
    {
        "id": 23,
        "Image": "assets/images/3549_1.webp",
        "title": "Spident Viopex (2.2g)",
        "price": 310,
    },
    {
        "id": 24,
        "Image": "assets/images/815115.webp",
        "title": "Kerr SoftClamp Kit",
        "price": 2000,
    },
    {
        "id": 25,
        "Image": "assets/images/3483_1.webp",
        "title": "Prevest Calcigel (2g)",
        "price": 220,
    },
    {
        "id": 21,
        "Image": "assets/images/298_1.webp",
        "title": "Bisco All-Bond Universal 0.5ml",
        "price": 310,  
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
        <div class="product d-flex flex-column justify-content-center me-auto  col-12 col-md-4 col-lg-3" data-id=${product.id}>
                        <div class="img">
                            <img src=${product.Image} class="card-img-top" alt="...">
                        </div>
                        <div class="card-body text-align-center">
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
const massageEle = document.querySelector(".massage");
const addToCartBtn = document.querySelectorAll(".btn");

function massage(){
    addToCartBtn.forEach(ele =>{
    ele.addEventListener("click", () =>{
massageEle.innerHTML=`        <p> added to cart</p>
`           
        })
            
        })
}
massage();