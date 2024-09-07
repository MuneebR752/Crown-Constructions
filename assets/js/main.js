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






 // Service details data with more detailed descriptions
 const services = {
  kitchens: {
    title: 'Kitchens',
    description: 'Our kitchen designs combine functionality with style, creating spaces that are both beautiful and practical. We offer a range of custom cabinetry, modern appliances, and innovative storage solutions tailored to your cooking and dining needs. Our team ensures every kitchen reflects the personality and lifestyle of its owners, whether you prefer a sleek contemporary look or a warm, traditional design.',
    points: [
      'Custom kitchen designs tailored to your style.',
      'High-quality materials and finishes.',
      'Innovative storage and space-saving solutions.'
    ]
  },
  bathrooms: {
    title: 'Bathrooms',
    description: 'Transform your bathroom into a serene oasis with our bespoke designs. We specialize in creating luxurious spaces that blend functionality and elegance, offering everything from spa-like showers to high-end fixtures and beautiful tiling. Whether you are renovating a master bath or updating a powder room, our designs enhance comfort and elevate your daily routines.',
    points: [
      'Spa-like bathrooms with modern amenities.',
      'High-quality tiles, fixtures, and finishes.',
      'Customized solutions for all spaces and sizes.'
    ]
  },
  interiors: {
    title: 'Interiors',
    description: 'Our interior design services are tailored to enhance every aspect of your living space. We focus on creating harmonious environments that reflect your personal style and meet your needs. From open-plan living areas to cozy corners, we balance aesthetics with practicality to transform your home into a place where you love to live.',
    points: [
      'Personalized interior designs that match your taste.',
      'Space optimization and smart furniture placement.',
      'Use of modern, sustainable, and timeless materials.'
    ]
  },
  newBuilds: {
    title: 'New Builds',
    description: 'Our new build services guide you from concept to completion, ensuring your dream home is constructed to the highest standards. We manage every aspect of the process, including design, planning, and construction, to deliver a home that suits your vision. With a focus on sustainability, energy efficiency, and cutting-edge building practices, we create homes that stand the test of time.',
    points: [
      'Complete project management from start to finish.',
      'Sustainable and energy-efficient building practices.',
      'High-quality construction standards for a lasting home.'
    ]
  },
  exteriors: {
    title: 'Exteriors',
    description: 'Enhance your home’s curb appeal with our exterior design services. From modern facades to beautiful landscaping, we offer a range of solutions to make your property stand out. Our designs focus on creating durable and weather-resistant exteriors that not only look stunning but also improve the overall value of your home.',
    points: [
      'Contemporary and classic exterior designs.',
      'Durable finishes that withstand the elements.',
      'Beautiful landscaping and outdoor living solutions.'
    ]
  },
  extensions: {
    title: 'Extensions',
    description: 'Expand your home’s living space with our expertly designed extensions. Whether you need a larger kitchen, an extra bedroom, or a home office, we ensure your extension blends seamlessly with the existing structure. Our designs maximize space, light, and functionality, adding value and comfort to your home.',
    points: [
      'Seamless integration with your current home design.',
      'Customizable to suit your unique needs.',
      'Adds significant value and functionality to your property.'
    ]
  }
};

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