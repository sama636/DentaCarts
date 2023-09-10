// document.addEventListener("DOMContentLoaded", function () {
//     const RestorativeDiv = document.querySelector(".RestorativeDiv");
// const Restorative = document.querySelector(".Restorative");
//     Restorative.addEventListener("mouseover", function () {
//         RestorativeDiv.style.display = "block";
//     });
//     Restorative.addEventListener("mouseout", function () {
//         RestorativeDiv.style.display = "none";
//     });
//     RestorativeDiv.addEventListener("mouseover", function () {
//         RestorativeDiv.style.display = "block";
//     });
//     RestorativeDiv.addEventListener("mouseout", function () {
//         RestorativeDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const EndodonticsDiv = document.querySelector(".EndodonticsDiv");
// const Endodontics = document.querySelector(".Endodontics");
// Endodontics.addEventListener("mouseover", function () {
//     EndodonticsDiv.style.display = "block";
//     });
//     Endodontics.addEventListener("mouseout", function () {
//         EndodonticsDiv.style.display = "none";
//     });
//     EndodonticsDiv.addEventListener("mouseover", function () {
//         EndodonticsDiv.style.display = "block";
//     });
//     EndodonticsDiv.addEventListener("mouseout", function () {
//         EndodonticsDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const OrthodonticsDiv = document.querySelector(".OrthodonticsDiv");
// const Orthodontics = document.querySelector(".Orthodontics");
// Orthodontics.addEventListener("mouseover", function () {
//     OrthodonticsDiv.style.display = "block";
//     });
//     Orthodontics.addEventListener("mouseout", function () {
//         OrthodonticsDiv.style.display = "none";
//     });
//     OrthodonticsDiv.addEventListener("mouseover", function () {
//         OrthodonticsDiv.style.display = "block";
//     });
//     OrthodonticsDiv.addEventListener("mouseout", function () {
//         OrthodonticsDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const ImplantDiv = document.querySelector(".ImplantDiv");
// const Implant = document.querySelector(".Implant");
// Implant.addEventListener("mouseover", function () {
//     ImplantDiv.style.display = "block";
//     });
//     Implant.addEventListener("mouseout", function () {
//         ImplantDiv.style.display = "none";
//     });
//     ImplantDiv.addEventListener("mouseover", function () {
//         ImplantDiv.style.display = "block";
//     });
//     ImplantDiv.addEventListener("mouseout", function () {
//         ImplantDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const PerioDiv = document.querySelector(".PerioDiv");
// const Perio = document.querySelector(".Perio");
// Perio.addEventListener("mouseover", function () {
//     PerioDiv.style.display = "block";
//     });
//     Perio.addEventListener("mouseout", function () {
//         PerioDiv.style.display = "none";
//     });
//     PerioDiv.addEventListener("mouseover", function () {
//         PerioDiv.style.display = "block";
//     });
//     PerioDiv.addEventListener("mouseout", function () {
//         PerioDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const ConsumablesDiv = document.querySelector(".ConsumablesDiv");
// const Consumables = document.querySelector(".Consumables");
// Consumables.addEventListener("mouseover", function () {
//     ConsumablesDiv.style.display = "block";
//     });
//     Consumables.addEventListener("mouseout", function () {
//         ConsumablesDiv.style.display = "none";
//     });
//     ConsumablesDiv.addEventListener("mouseover", function () {
//         ConsumablesDiv.style.display = "block";
//     });
//     ConsumablesDiv.addEventListener("mouseout", function () {
//         ConsumablesDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const InstrmentDiv = document.querySelector(".InstrmentDiv");
// const Instrment = document.querySelector(".Instrment");
// Instrment.addEventListener("mouseover", function () {
//     InstrmentDiv.style.display = "block";
//     });
//     Instrment.addEventListener("mouseout", function () {
//         InstrmentDiv.style.display = "none";
//     });
//     InstrmentDiv.addEventListener("mouseover", function () {
//         InstrmentDiv.style.display = "block";
//     });
//     InstrmentDiv.addEventListener("mouseout", function () {
//         InstrmentDiv.style.display = "none";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const EquipmentDiv = document.querySelector(".EquipmentDiv");
// const Equipment = document.querySelector(".Equipment");
// Equipment.addEventListener("mouseover", function () {
//     EquipmentDiv.style.display = "block";
//     });
//     Equipment.addEventListener("mouseout", function () {
//         EquipmentDiv.style.display = "none";
//     });
//     EquipmentDiv.addEventListener("mouseover", function () {
//         EquipmentDiv.style.display = "block";
//     });
//     EquipmentDiv.addEventListener("mouseout", function () {
//         EquipmentDiv.style.display = "none";
//     });
// });
// Moblile Nav
const restorativeArrow = document.querySelector(".restorativeArrow")
const restorativeArrowDown = document.querySelector(".restorativeArrowDown")
const restorativeContent = document.querySelector(".restorativeContent")
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
let cart = JSON.parse(localStorage.getItem('cart'));

const prodCont = document.querySelector('.cart-cont .content');

displayData(cart)
function displayData(ele){
    const cart = JSON.parse(localStorage.getItem('cart'));
    let elements=""
    cart.forEach((ele) =>{
        elements += `<div class="cart-product flex-column flex-md-row my-5 d-flex align-items-center justify-content-between mx-3" data-id=${ele.id}>
        <div class="itemImg">
            <img class="" src="${ele.Image}" alt="">
        </div>
        <div class="itemTitle">
            <h5 class="cartText text-center mt-4">${ele.title}</h5>
        </div>
        <div class="itemIcons flex-column flex-md-row gap-3 d-flex align-items-center justify-content-between">
            <div class="incDecBtn d-flex gap-4 align-content-center justify-content-between mx-5">
                <i class="fa-solid fa-plus text-white rounded-pill bg-secondary p-1"></i>
                <span class="fw-bold itemquantity">${ele.quantity}</span>
                <i class="fa-solid fa-minus text-white rounded-pill bg-secondary p-1"></i>
            </div>
            <div class="ItemPrice mx-4">
                <span class="price">${ele.price}</span>
            </div>
            <div class="itemRemove">
                <span class="text-danger remove-product">Remove</span>
            </div>
        </div>
    </div> <hr>`
    })
    prodCont.innerHTML = elements;
}
addEventsToBtn()
function addEventsToBtn(){
    const increasBtnd = document.querySelectorAll('.itemIcons .fa-plus')
    const dereasBtnd = document.querySelectorAll('.itemIcons .fa-minus');
    const removeBtn = document.querySelectorAll('.remove-product');
    const removeAllBtn = document.querySelector('.remove-all');

    increasBtnd.forEach(btn =>{
        btn.addEventListener("click", () =>{
            const parent = btn.closest(".cart-product");
            const id = parent.dataset.id;
            console.log(id);
            const prodObj = cart.find(ele => ele.id == id);
            console.log(prodObj);
            prodObj.quantity++;
            const itemquantity = parent.querySelector(".itemquantity");
            itemquantity.textContent = prodObj.quantity;
            localStorage.setItem('cart', JSON.stringify(cart))
        })
        
    })
    dereasBtnd.forEach(btn =>{
        btn.addEventListener("click", () =>{
            const parent = btn.closest(".cart-product");
            const id = parent.dataset.id;
            const prodObj = cart.find(ele => ele.id == id);
            if(prodObj.quantity == 1) return;
            prodObj.quantity--;
            const itemquantity = parent.querySelector(".itemquantity");
            itemquantity.textContent = prodObj.quantity;
            localStorage.setItem('cart', JSON.stringify(cart))
        })
        
    })
    removeBtn.forEach(btn =>{
        btn.addEventListener("click", () =>{
            console.log(btn);
            const par = btn.closest(".cart-product"); 
            const id = par.dataset.id;
            console.log(id);
            cart = cart.filter(ele => ele.id != id);
            console.log(cart);
            par.remove();
            localStorage.setItem('cart', JSON.stringify(cart));
        })
    })

}
const btn = document.querySelector(".check");
function btnCheck(){
    btn.addEventListener('click', () =>{
        alert("checkout");
    })
}
