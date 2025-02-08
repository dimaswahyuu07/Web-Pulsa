// Efek animasi saat scroll
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".section");

    function reveal() {
        sections.forEach((section) => {
            let windowHeight = window.innerHeight;
            let sectionTop = section.getBoundingClientRect().top;
            let revealPoint = 100;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});

// Efek hover pada list harga
document.querySelectorAll(".harga-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1)";
        card.style.borderColor = "yellow";
        card.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.7)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.borderColor = "#ff5733";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    });
});


/* Efek muncul saat scroll */
.section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.section.active {
    opacity: 1;
    transform: translateY(0);
}


function beliPulsa() {
    let operator = document.getElementById("operator").value;
    let nominal = document.getElementById("nominal").value;
    let nomor = document.getElementById("nomor").value;
    
    if (nomor === "") {
        alert("Masukkan nomor HP terlebih dahulu!");
        return;
    }

    let whatsappURL = https://wa.me/6282133380651?text=Halo,%20saya%20ingin%20beli%20pulsa%20${operator}%20nominal%20${nominal}%20untuk%20nomor%20${nomor}.;
    
    window.open(whatsappURL, "_blank");
}


window.onload = function () {
    setTimeout(function () {
        document.getElementById("promo-popup").style.display = "block";
    }, 5000);
};

function tutupPopup() {
    document.getElementById("promo-popup").style.display = "none";
}