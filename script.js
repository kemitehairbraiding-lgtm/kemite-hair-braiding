/* =========================================
   KEMITE HAIR BRAIDING
   Website Interactions
========================================= */

const BOOKSY_URL =
    "https://booksy.com/en-us/1824117_kemite-hair-braiding_braids-locs_36434_princeton#ba_s=seo";

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
        image: "assets/images/cornrows.jpg",
        alt: "Cornrow braid hairstyle",
        category: "cornrows"
    },
    {
        name: "Locs",
        description:
            "Loc maintenance and styling options tailored to your look.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/locs.jpg",
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
        image: "assets/images/cornrows.jpg",
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
        image: "assets/images/cornrows.jpg",
        alt: "Traditional weaving hairstyle",
        category: "ghana-weaving"
    },
    {
        name: "Didi / Diki",
        description:
            "Traditional styling options. Contact us to confirm your preferred design.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/cornrows.jpg",
        alt: "Traditional braid design",
        category: "didi"
    },
    {
        name: "Kiko",
        description:
            "Ask about availability and the options available for this style.",
        duration: "Confirm when booking",
        price: "Request a quote",
        image: "assets/images/cornrows.jpg",
        alt: "Traditional protective braid design",
        category: "kiko"
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
                    href="${BOOKSY_URL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book ${service.name} through Booksy"
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
        image: "assets/images/cornrows.jpg",
        alt: "Neat cornrow braid design"
    },
    {
        title: "Locs",
        category: "locs",
        image: "assets/images/locs.jpg",
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
