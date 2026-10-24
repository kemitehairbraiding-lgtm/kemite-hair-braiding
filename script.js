/* =========================================
   KEMITE HAIR BRAIDING
   Website Interactions
========================================= */

const BOOKING_URL =
    "https://miali.app/business/kemite-hair-braiding";

const WHATSAPP_URL = "https://wa.me/13473419483";


/* =========================================
   SERVICES DATA
========================================= */

const services = [
    {
        name: "Knotless Braids",
        description:
            "Lightweight, natural-looking braids with a smooth finish.",
        duration: "Example: 3–6 hours",
        price: "From $220",
        image: "assets/images/knotless-braids.jpg",
        alt: "Knotless braids hairstyle",
        category: "knotless"
    },
    {
        name: "Box Braids",
        description:
            "Classic protective braids with a timeless and versatile look.",
        duration: "Example: 4–7 hours",
        price: "From $200",
        image: "assets/images/box-braids.jpg",
        alt: "Box braids hairstyle",
        category: "box"
    },
    {
        name: "Cornrows",
        description:
            "Neat, detailed cornrow styles ranging from simple to intricate.",
        duration: "Example: 45 minutes–3 hours",
        price: "From $50",
        image: "assets/images/pic2.jpg",
        alt: "Cornrow braid hairstyle",
        category: "cornrows"
    },
    {
        name: "Locs",
        description:
            "Loc maintenance and styling options tailored to your look.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/pic3.jpeg",
        alt: "Loc hairstyle",
        category: "locs"
    },
    {
        name: "Twists",
        description:
            "Beautiful twist styles, including protective and natural looks.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/twists.jpg",
        alt: "Protective twist hairstyle",
        category: "twists"
    },
    {
        name: "Kids Braids",
        description:
            "Protective hairstyles for children, with style options to suit them.",
        duration: "Example: 2–4 hours",
        price: "From $120",
        image: "assets/images/kids-braids.jpg",
        alt: "Children's braided hairstyle",
        category: "kids"
    },
    {
        name: "Goddess Braids",
        description:
            "A stylish protective look with beautiful texture and movement.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/goddess-braids.jpg",
        alt: "Goddess braids hairstyle",
        category: "goddess"
    },
    {
        name: "French Curls",
        description:
            "Elegant braids finished with soft, curly ends.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/knotless-braids.jpg",
        alt: "French curl braid hairstyle",
        category: "french-curls"
    },
    {
        name: "Stitch Braids",
        description:
            "Clean, defined braid patterns with a polished finish.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/pic4.jpeg",
        alt: "Stitch braid hairstyle",
        category: "stitch"
    },
    {
        name: "Touch-Ups",
        description:
            "Refresh selected braid styles to maintain a neat appearance.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/box-braids.jpg",
        alt: "Braids being refreshed",
        category: "touch-ups"
    },
    {
        name: "Take-Downs",
        description:
            "Ask about braid removal and preparation for your next style.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/knotless-braids.jpg",
        alt: "Protective hairstyle",
        category: "take-downs"
    },
    {
        name: "Ghana Weaving",
        description:
            "Traditional weaving styles with customizable patterns.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/pic5.jpeg",
        alt: "Traditional weaving hairstyle",
        category: "ghana-weaving"
    }
];


/* =========================================
   RENDER SERVICE CARDS
========================================= */

const servicesGrid = document.getElementById("services-grid");

if (servicesGrid) {

    servicesGrid.innerHTML = services.map(service => `

        <article class="service-card">

            <img
                class="service-image"
                src="${service.image}"
                alt="${service.alt}"
                loading="lazy"
            >

            <div class="service-card-body">

                <h3>${service.name}</h3>

                <p>${service.description}</p>

                <div class="service-meta">
                    ${service.duration}
                    <br>
                    ${service.price}
                </div>

                <a
                    class="button button-outline"
                    href="${BOOKING_URL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book ${service.name} online"
                >
                    Book This Style ↗
                </a>

            </div>

        </article>

    `).join("");

}


/* =========================================
   GALLERY DATA
========================================= */

const galleryImages = [
    {
        title: "Knotless Braids",
        category: "knotless",
        image: "assets/images/knotless-braids.jpg",
        alt: "Knotless protective braid style"
    },
    {
        title: "Box Braids",
        category: "box",
        image: "assets/images/box-braids.jpg",
        alt: "Classic box braid style"
    },
    {
        title: "Cornrows",
        category: "cornrows",
        image: "assets/images/pic2.jpeg",
        alt: "Neat cornrow braid design"
    },
    {
        title: "Locs",
        category: "locs",
        image: "assets/images/pic3.jpeg",
        alt: "Loc styling"
    },
    {
        title: "Kids Braids",
        category: "kids",
        image: "assets/images/kids-braids.jpg",
        alt: "Children's protective braid style"
    },
    {
        title: "Goddess Braids",
        category: "knotless",
        image: "assets/images/goddess-braids.jpg",
        alt: "Goddess braid style"
    },
    {
        title: "Protective Twists",
        category: "locs",
        image: "assets/images/twists.jpg",
        alt: "Protective twist style"
    },
    {
        title: "Braided Cornrows",
        category: "cornrows",
        image: "assets/images/cornrows.jpg",
        alt: "Braided cornrow pattern"
    },
    {
        title: "Braided Style 1",
        category: "knotless",
        image: "assets/images/pic2.jpeg",
        alt: "Protective braid hairstyle"
    },
    {
        title: "Braided Style 2",
        category: "box",
        image: "assets/images/pic3.jpeg",
        alt: "Box braid hairstyle"
    },
    {
        title: "Braided Style 3",
        category: "cornrows",
        image: "assets/images/pic4.jpeg",
        alt: "Cornrow braid hairstyle"
    },
    {
        title: "Braided Style 4",
        category: "locs",
        image: "assets/images/pic5.jpeg",
        alt: "Loc hairstyle"
    },
    {
        title: "Braided Style 5",
        category: "kids",
        image: "assets/images/pic6.jpeg",
        alt: "Protective hairstyle"
    },
    {
        title: "Braided Style 6",
        category: "knotless",
        image: "assets/images/pic7.jpeg",
        alt: "Knotless braid hairstyle"
    },
    {
        title: "Braided Style 7",
        category: "box",
        image: "assets/images/pic8.jpeg",
        alt: "Box braid hairstyle"
    },
    {
        title: "Braided Style 8",
        category: "cornrows",
        image: "assets/images/pic9.jpeg",
        alt: "Cornrow braid hairstyle"
    },
    {
        title: "Braided Style 9",
        category: "locs",
        image: "assets/images/pic10.jpeg",
        alt: "Loc hairstyle"
    },
    {
        title: "Braided Style 10",
        category: "kids",
        image: "assets/images/pic11.jpeg",
        alt: "Protective hairstyle"
    },
    {
        title: "Braided Style 11",
        category: "knotless",
        image: "assets/images/pic12.jpeg",
        alt: "Knotless braid hairstyle"
    },
    {
        title: "Braided Style 12",
        category: "box",
        image: "assets/images/pic13.jpeg",
        alt: "Box braid hairstyle"
    },
    {
        title: "Braided Style 13",
        category: "cornrows",
        image: "assets/images/pic14.jpeg",
        alt: "Cornrow braid hairstyle"
    },
    {
        title: "Braided Style 14",
        category: "locs",
        image: "assets/images/pic15.jpeg",
        alt: "Loc hairstyle"
    },
    {
        title: "Braided Style 15",
        category: "kids",
        image: "assets/images/pic16.jpeg",
        alt: "Protective hairstyle"
    },
    {
        title: "Braided Style 16",
        category: "knotless",
        image: "assets/images/pic17.jpeg",
        alt: "Protective braid hairstyle"
    }
];


/* =========================================
   RENDER GALLERY
========================================= */

const galleryGrid = document.getElementById("gallery-grid");

function renderGallery(filter = "all") {

    if (!galleryGrid) return;

    const filteredImages = galleryImages.filter(item => {

        return filter === "all" || item.category === filter;

    });

    galleryGrid.innerHTML = filteredImages.map((item, index) => `

        <button
            class="gallery-item"
            type="button"
            data-image="${item.image}"
            data-title="${item.title}"
            aria-label="View ${item.title} image"
        >

            <img
                src="${item.image}"
                alt="${item.alt}"
                loading="${index < 4 ? "eager" : "lazy"}"
            >

            <span class="gallery-item-caption">
                ${item.title}
            </span>

        </button>

    `).join("");

}

renderGallery();


/* =========================================
   GALLERY FILTERS
========================================= */

const galleryFilters = document.getElementById("gallery-filters");

if (galleryFilters) {

    galleryFilters.addEventListener("click", event => {

        const button = event.target.closest("[data-filter]");

        if (!button) return;

        galleryFilters
            .querySelectorAll(".filter-button")
            .forEach(item => {
                item.classList.remove("active");
            });

        button.classList.add("active");

        renderGallery(button.dataset.filter);

    });

}


/* =========================================
   LIGHTBOX
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

if (galleryGrid && lightbox) {

    galleryGrid.addEventListener("click", event => {

        const item = event.target.closest(".gallery-item");

        if (!item) return;

        const image = item.dataset.image;
        const title = item.dataset.title;

        lightboxImage.src = image;
        lightboxImage.alt = title;
        lightboxCaption.textContent = title;

        lightbox.showModal();

    });

}

if (lightboxClose && lightbox) {

    lightboxClose.addEventListener("click", () => {
        lightbox.close();
    });

}

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            lightbox.close();
        }

    });

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}
