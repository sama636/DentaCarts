document.addEventListener("DOMContentLoaded", function () {
    const RestorativeDiv = document.querySelector(".RestorativeDiv");
const Restorative = document.querySelector(".Restorative");
    Restorative.addEventListener("mouseover", function () {
        RestorativeDiv.style.display = "block";
    });
    Restorative.addEventListener("mouseout", function () {
        RestorativeDiv.style.display = "none";
    });
    RestorativeDiv.addEventListener("mouseover", function () {
        RestorativeDiv.style.display = "block";
    });
    RestorativeDiv.addEventListener("mouseout", function () {
        RestorativeDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const EndodonticsDiv = document.querySelector(".EndodonticsDiv");
const Endodontics = document.querySelector(".Endodontics");
Endodontics.addEventListener("mouseover", function () {
    EndodonticsDiv.style.display = "block";
    });
    Endodontics.addEventListener("mouseout", function () {
        EndodonticsDiv.style.display = "none";
    });
    EndodonticsDiv.addEventListener("mouseover", function () {
        EndodonticsDiv.style.display = "block";
    });
    EndodonticsDiv.addEventListener("mouseout", function () {
        EndodonticsDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const OrthodonticsDiv = document.querySelector(".OrthodonticsDiv");
const Orthodontics = document.querySelector(".Orthodontics");
Orthodontics.addEventListener("mouseover", function () {
    OrthodonticsDiv.style.display = "block";
    });
    Orthodontics.addEventListener("mouseout", function () {
        OrthodonticsDiv.style.display = "none";
    });
    OrthodonticsDiv.addEventListener("mouseover", function () {
        OrthodonticsDiv.style.display = "block";
    });
    OrthodonticsDiv.addEventListener("mouseout", function () {
        OrthodonticsDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ImplantDiv = document.querySelector(".ImplantDiv");
const Implant = document.querySelector(".Implant");
Implant.addEventListener("mouseover", function () {
    ImplantDiv.style.display = "block";
    });
    Implant.addEventListener("mouseout", function () {
        ImplantDiv.style.display = "none";
    });
    ImplantDiv.addEventListener("mouseover", function () {
        ImplantDiv.style.display = "block";
    });
    ImplantDiv.addEventListener("mouseout", function () {
        ImplantDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const PerioDiv = document.querySelector(".PerioDiv");
const Perio = document.querySelector(".Perio");
Perio.addEventListener("mouseover", function () {
    PerioDiv.style.display = "block";
    });
    Perio.addEventListener("mouseout", function () {
        PerioDiv.style.display = "none";
    });
    PerioDiv.addEventListener("mouseover", function () {
        PerioDiv.style.display = "block";
    });
    PerioDiv.addEventListener("mouseout", function () {
        PerioDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ConsumablesDiv = document.querySelector(".ConsumablesDiv");
const Consumables = document.querySelector(".Consumables");
Consumables.addEventListener("mouseover", function () {
    ConsumablesDiv.style.display = "block";
    });
    Consumables.addEventListener("mouseout", function () {
        ConsumablesDiv.style.display = "none";
    });
    ConsumablesDiv.addEventListener("mouseover", function () {
        ConsumablesDiv.style.display = "block";
    });
    ConsumablesDiv.addEventListener("mouseout", function () {
        ConsumablesDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const InstrmentDiv = document.querySelector(".InstrmentDiv");
const Instrment = document.querySelector(".Instrment");
Instrment.addEventListener("mouseover", function () {
    InstrmentDiv.style.display = "block";
    });
    Instrment.addEventListener("mouseout", function () {
        InstrmentDiv.style.display = "none";
    });
    InstrmentDiv.addEventListener("mouseover", function () {
        InstrmentDiv.style.display = "block";
    });
    InstrmentDiv.addEventListener("mouseout", function () {
        InstrmentDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const EquipmentDiv = document.querySelector(".EquipmentDiv");
const Equipment = document.querySelector(".Equipment");
Equipment.addEventListener("mouseover", function () {
    EquipmentDiv.style.display = "block";
    });
    Equipment.addEventListener("mouseout", function () {
        EquipmentDiv.style.display = "none";
    });
    EquipmentDiv.addEventListener("mouseover", function () {
        EquipmentDiv.style.display = "block";
    });
    EquipmentDiv.addEventListener("mouseout", function () {
        EquipmentDiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
    direction: "ltr",
    paginationDirection: "ltr",
    arrows: true,
    pagination: false,
    perPage: 1,
    type: "loop",
    perMove: 1,
    autoplay: true,
    interval: 3000,
    speed: 800,
    }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.new-splide', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 4,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
    } );
    splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.splide-sec', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 4,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
      } );
      
      splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.splide-section', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 7,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
      } );
      
      splide.mount();
});
document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.New-splide', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 4,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
      } );
      
      splide.mount();
});
document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.best-splide', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 4,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
      } );
      
      splide.mount();
});
document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.slide-offers', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 3,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
      } );
      
      splide.mount();
});
document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide( '.slide-clear', {
        direction: "ltr",
        paginationDirection: "ltr",
        arrows: true,
        pagination: false,
        type: "loop",
        perMove: 1,
        perPage: 3,
        breakpoints: {
            678: {
                perPage: 2,
            },
            920: {
                perPage: 4,
            },
        },
        margin:20,
      } );
      
      splide.mount();
});



// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('active');
//   showcase.classList.toggle('active');
// })
function save_data_to_wishList(){
    console.log(saved);
}

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