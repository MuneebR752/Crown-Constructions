/**
 * Template Name: Crown Constrution - v1.3.0
 * Template URL: https://bootstrapmade.com/Crown Constrution-bootstrap-construction-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper(".slides-2", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});






const services = {
  kitchens: {
    title: 'Kitchens',
    description: 'Our kitchen designs combine functionality with style, creating spaces that are both beautiful and practical. We offer custom cabinetry, modern appliances, and innovative storage solutions tailored to your needs. Our designs ensure that each kitchen is a perfect blend of aesthetics and functionality, whether you want a contemporary or traditional design.',
    points: [
      'Custom kitchen designs tailored to your style.',
      'High-quality materials and finishes.',
      'Innovative storage and space-saving solutions.',
      'Modern appliances integrated for easy use.',
      'Personalized layouts to optimize space.'
    ],
    image: 'assets/img/kitchens.webp' // Update image paths as needed
  },
  bathrooms: {
    title: 'Bathrooms',
    description: 'Transform your bathroom into a serene oasis with our bespoke designs. Whether you want a spa-like bathroom or a simple renovation, we offer high-end fixtures, custom tiling, and modern amenities that ensure a balance of elegance and practicality.',
    points: [
      'Spa-like bathrooms with modern amenities.',
      'High-quality tiles, fixtures, and finishes.',
      'Customized solutions for all spaces and sizes.',
      'Increased comfort and efficiency.',
      'Elegant designs with practical solutions.'
    ],
    image: 'assets/img/bathroom.webp'
  },
  interiors: {
    title: 'Interiors',
    description: 'We specialize in creating harmonious interior spaces that reflect your personality and lifestyle. From open-plan living areas to cozy corners, our designs balance beauty with functionality to make your home a welcoming and practical place to live.',
    points: [
      'Personalized interior designs that match your taste.',
      'Space optimization and smart furniture placement.',
      'Use of modern, sustainable, and timeless materials.',
      'Lighting solutions that enhance ambiance.',
      'Custom décor that adds value to your space.'
    ],
    image: 'assets/img/interior.webp'
  },
  newBuilds: {
    title: 'New Builds',
    description: 'Our new build services guide you from concept to completion, ensuring that your dream home is constructed with the highest standards of quality and sustainability. We manage every aspect of the process to deliver a home that meets your vision and needs.',
    points: [
      'Complete project management from start to finish.',
      'Sustainable and energy-efficient building practices.',
      'High-quality construction standards for a lasting home.',
      'Personalized design based on your preferences.',
      'Attention to every detail to create your ideal home.'
    ],
    image: 'assets/img/new builds.webp'
  },
  exteriors: {
    title: 'Exteriors',
    description: 'Enhance your home’s curb appeal with our exterior design services. We focus on creating exteriors that are not only visually stunning but also durable and weather-resistant. From modern facades to landscaping, we ensure your home makes a lasting impression.',
    points: [
      'Contemporary and classic exterior designs.',
      'Durable finishes that withstand the elements.',
      'Beautiful landscaping and outdoor living solutions.',
      'High-quality materials for long-lasting beauty.',
      'Enhanced property value and aesthetic appeal.'
    ],
    image: 'assets/img/exterior 2.webp'
  },
  extensions: {
    title: 'Extensions',
    description: 'Expand your home’s living space with our expertly designed extensions. Whether you need a larger kitchen, an extra bedroom, or a home office, we ensure your extension blends seamlessly with the existing structure, maximizing space and functionality.',
    points: [
      'Seamless integration with your current home design.',
      'Customizable to suit your unique needs.',
      'Adds significant value and functionality to your property.',
      'Modern solutions to enhance space and light.',
      'Extensions that blend aesthetics with practicality.'
    ],
    image: 'assets/img/extensions.jpg'
  }
};

function showService(serviceKey) {
  const service = services[serviceKey];

  // Update the image, title, description, and points
  document.querySelector('.services-img').src = service.image;
  document.querySelector('#service-content h3').innerText = service.title;
  document.querySelector('#service-content p').innerText = service.description;
  
  // Update the key points list
  const pointsList = document.querySelector('#service-content ul');
  pointsList.innerHTML = ''; // Clear existing points
  service.points.forEach(point => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<i class="bi bi-check-circle"></i> ${point}`;
    pointsList.appendChild(listItem);
  });
}


// Function to update the service details section
function showService(serviceKey) {
  const service = services[serviceKey];
  const serviceContent = document.getElementById('service-content');

  serviceContent.innerHTML = `
    <img src="assets/img/services.jpg" alt="${service.title}" class="img-fluid services-img" />
    <h3>${service.title}</h3>
    <p>${service.description}</p>
    <ul>
      ${service.points.map(point => `<li><i class="bi bi-check-circle"></i> ${point}</li>`).join('')}
    </ul>
  `;

  // Update the active class on the service links
  document.querySelectorAll('.services-list a').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`.services-list a[onclick="showService('${serviceKey}')"]`).classList.add('active');
}

// Initialize the first service details on page load
window.onload = () => showService('kitchens');