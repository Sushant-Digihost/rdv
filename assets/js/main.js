function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      smoothMobile: false,
      inertia: 0.8,
      multiplier: 1.3,
    });
  
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  
    function toggleFullClass() {
      var container = document.getElementById("feedbackContainer");
      var viewTesti = document.getElementById("viewTesti");
      var button = viewTesti.querySelector(".default-btn-2");
      var span = button.querySelector(".default-btn-2 span");
  
      container.classList.toggle("full");
      viewTesti.classList.toggle("close");
  
      if (container.classList.contains("full")) {
        span.textContent = "View Less Testimonials";
      } else {
        span.textContent = "View More Testimonials";
      }
  
      // Update Locomotive Scroll after class toggle
      setTimeout(() => {
        locoScroll.update();
        console.log("scroll updsted 5 second");
      }, 1000);
    }
  
    // blog page filter
  
    window.applyFilter = function(element) {
      let target = element.dataset.filter || element.getAttribute('data-filter');
  
        resetFilterButtons();
        if (target !== "ALL") {
            setActiveFilterButton(target);
          
        }
        filterItems(target);
        
  
    };
  
    // Reset all filter buttons
    function resetFilterButtons() {
        document.querySelectorAll(".filter-button").forEach(button => {
            button.classList.remove("active");
        });
    }
  
    // Set the active filter button
    function setActiveFilterButton(target) {
        const activeButton = document.querySelector(`[data-filter='${target}']`);
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }
  
    window.applyFilter = function(element) {
      let target = element.dataset.filter || element.getAttribute('data-filter') || element.value;
  
      // Check if the window width is 768px or smaller
      if (window.innerWidth <= 768) {
          // Call the filtering function based on the target
          filterItems(target);

      } else {
          resetFilterButtons();
          if (target !== "ALL") {
              setActiveFilterButton(target);
          }
          filterItems(target);
      }
        // Update the locoScroll after applying the filter
      if (typeof locoScroll !== 'undefined') {
        locoScroll.update();
      }
    };
  
    // Reset all filter buttons
    function resetFilterButtons() {
    document.querySelectorAll(".filter-button").forEach(button => {
        button.classList.remove("active");
    });
    }
  
    // Set the active filter button
    function setActiveFilterButton(target) {
      const activeButton = document.querySelector(`[data-filter='${target}']`);
      if (activeButton) {
          activeButton.classList.add("active");
      }
    }
  
    // Filter items based on the selected target
    function filterItems(target) {
      const items = document.querySelectorAll('.item');
      items.forEach(item => {
          item.style.display = (target === "ALL" || item.getAttribute('data-filter') === target) ? 'block' : 'none';
          locoScroll.update();

      });
    }
  
  }
  
  loco();
  
  // Show the menu
  
  // Adjust the position if needed
  // gsap.to(".menu", { top: "0vh", duration: 1, ease: "power4.out" });
  
  // var god = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".menu",
  //     start: "top top",
  //     end: "top 50%",
  //     scroller: "body",
  //     scrub: 2,
  //   },
  // });
  
  // god.to(".heading h2", {
  //   top: "100px",
  //   ease: "power4.out",
  //   stagger: 0.03,
  // }, 's');
  
  // god.to(".img-wrap img", {
  //   top: "100px",
  //   ease: "power4.out",
  //   stagger: 0.03,
  // }, 's');
  
  //   var btn = document.querySelector(".header__menu-button");
  //   var closeBtn = document.querySelector(".close");
  
  //   btn.addEventListener("click", () => {
  //       gsap.to(".menu", {
  //           top: "0vh",
  //           display: "block",
  //           duration: 1,
  //           delay: 0.2,
  //       });
  //   });
  
  //   closeBtn.addEventListener("click", () => {
  //       gsap.to(".menu", {
  //           top: "-100vh",
  //           display: "none",
  //           duration: 1,
  //           delay: 0.2,
  //       });
  //   });
  
  // Clear cache by appending a unique query string to the URL on reload
  if (performance.navigation.type === 1) {
    let url = new URL(window.location.href);
    url.searchParams.set("cache_bust", new Date().getTime());
    window.location.replace(url.href);
  }
  
  // GSAP animations with media query handling
  
  // Animation for screen sizes larger than 768px
  gsap.matchMedia().add("(min-width: 769px)", () => {
    var lg1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_1",
        start: "-500px top",
        end: "bottom 50%",
        scroller: "#main",
        scrub: 3,
      },
    });
  
    lg1.to(
      ".img_box_1",
      {
        x: "-500px",
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg1.to(
      ".img_box_2",
      {
        x: "500px",
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    var lg2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_2",
        start: "-500px top",
        end: "bottom 50%",
        scroller: "#main",
        scrub: 3,
      },
    });
  
    lg2.to(
      ".img_box_3",
      {
        x: "-500px",
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg2.to(
      ".img_box_4",
      {
        x: "500px",
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    var lg3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_3",
        start: "-500px top",
        end: "bottom 50%",
        scroller: "#main",
        scrub: 3,
      },
    });
  
    lg3.to(
      ".img_box_5",
      {
        x: "-500px",
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg3.to(
      ".img_box_6",
      {
        x: "500px",
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  });
  
  // Animation for screen sizes larger than 540px but less than 769px
  gsap.matchMedia().add("(min-width: 540px) and (max-width: 768px)", () => {
    var lg1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_1",
        start: "-500px top",
        end: "bottom 50%",
        scroller: "#main",
        scrub: 3,
      },
    });
  
    lg1.to(
      ".img_box_1",
      {
        x: "-300px",
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg1.to(
      ".img_box_2",
      {
        x: "300px",
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    var lg2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_2",
        start: "-500px top",
        end: "bottom 50%",
        scroller: "#main",
        scrub: 3,
      },
    });
  
    lg2.to(
      ".img_box_3",
      {
        x: "-300px",
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg2.to(
      ".img_box_4",
      {
        x: "300px",
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    var lg3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_3",
        start: "-500px top",
        end: "bottom 50%",
        scroller: "#main",
        scrub: 3,
      },
    });
  
    lg3.to(
      ".img_box_5",
      {
        x: "-300px",
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg3.to(
      ".img_box_6",
      {
        x: "300px",
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  });
  
  // Animation for screen sizes 431px and smaller
  gsap.matchMedia().add("(max-width: 431px)", () => {
    var lg1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_1",
        start: "-500px top",
        end: "bottom -400px",
        scroller: "#main",
        scrub: 1,
      },
    });
  
    lg1.to(
      ".img_box_1",
      {
        x: "-265px", // Adjusted x value for smaller screens
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg1.to(
      ".img_box_2",
      {
        x: "265px", // Adjusted x value for smaller screens
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    var lg2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_2",
        start: "-500px top",
        end: "bottom -400px",
        scroller: "#main",
        scrub: 1,
      },
    });
  
    lg2.to(
      ".img_box_3",
      {
        x: "-265px", // Adjusted x value for smaller screens
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg2.to(
      ".img_box_4",
      {
        x: "265px", // Adjusted x value for smaller screens
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    var lg3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empowerment_3",
        start: "-500px top",
        end: "bottom -400px",
        scroller: "#main",
        scrub: 1,
      },
    });
  
    lg3.to(
      ".img_box_5",
      {
        x: "-265px", // Adjusted x value for smaller screens
        rotate: "-7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  
    lg3.to(
      ".img_box_6",
      {
        x: "265px", // Adjusted x value for smaller screens
        rotate: "7",
        ease: "power4.out",
        stagger: 0.03,
      },
      "s"
    );
  });
  
  // *****************************************************************************
  
  // Initialize GSAP and ScrollTrigger
  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Create a variable to hold your ScrollTriggers
  let scrollTriggers = [];
  
  ScrollTrigger.matchMedia({
    // For screens above 1024px
    "(min-width: 991px)": function () {
      // Select elements
      const sections = gsap.utils.toArray(".container section");
      const texts = gsap.utils.toArray(".dot-text"); // Select the text elements for numbers
  
      // Set up scroll animation for sections
      const sectionTrigger = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper .container",
          pin: true,
          scroller: "#main",
          scrub: 1,
          end: "+=3000",
        },
      });
      scrollTriggers.push(sectionTrigger.scrollTrigger); // Save the ScrollTrigger instance
  
      // Progress bar animation
      const progressBarTrigger = gsap.to("#animated-line", {
        attr: { x2: "1200" },
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "bottom top",
          scrub: true,
          scroller: "#main",
        },
      });
      scrollTriggers.push(progressBarTrigger.scrollTrigger); // Save the ScrollTrigger instance
  
      // Optional: Animate the mask for progress bar effect
      const maskTrigger = gsap.to(".mask", {
        attr: { width: "1200" },
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "bottom top",
          scrub: true,
          scroller: "#main",
        },
      });
      scrollTriggers.push(maskTrigger.scrollTrigger); // Save the ScrollTrigger instance
  
      // Sequentially show numbers as dots align with the animated line
      texts.forEach((text, index) => {
        const textTrigger = gsap.to(text, {
          opacity: 1, // Show the number when scrolling reaches the corresponding position
          duration: 0.3,
          scrollTrigger: {
            trigger: ".wrapper",
            start: () => `top+=${index * 500} center`, // Adjust to align with your scrolling
            end: () => `top+=${(index + 1) * 500} center`, // Adjust to your liking
            scrub: true,
            scroller: "#main",
          },
        });
        scrollTriggers.push(textTrigger.scrollTrigger); // Save the ScrollTrigger instance
      });
    },
  
    // For screens below or equal to 1024px
    "(max-width: 991px)": function () {
      // Pause specific ScrollTriggers
      scrollTriggers.forEach((st) => st.pause());
    },
  });
  
  // function toggleClamp(button) {
  //   var p = button.previousElementSibling;
  //   var allParagraphs = document.querySelectorAll('.feedback-box .feedpara');
  //   var allButtons = document.querySelectorAll('.feedback-box .default-btn-3');
  
  //   if (!p.classList.contains('expanded')) {
  //     allParagraphs.forEach(function(paragraph) {
  //       paragraph.classList.remove('expanded');
  //     });
  //     allButtons.forEach(function(btn) {
  //       btn.innerText = 'Continue reading';
  //       btn.classList.remove('active');
  //     });
  
  //     p.classList.add('expanded');
  //     button.innerText = 'Hide';
  //     button.classList.add('active');
  //   } else {
  //     p.classList.remove('expanded');
  //     button.innerText = 'Continue reading';
  //     button.classList.remove('active');
  //   }
  // }
  
  var $slider = $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: ".round-slider",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  });
  
  $(".round-slider").slick({
    asNavFor: ".slider-for",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: true,
  
    dotsClass: "slider-paging-number",
    customPaging: function (slider, i) {
      // Replace 'image1.png', 'image2.png', etc. with your actual image paths.
      var images = [
        "assets/images/conquering/S1.svg",
        "assets/images/conquering/s2.svg",
        "assets/images/conquering/s3.svg",
        "assets/images/conquering/S1.svg",
        "assets/images/conquering/s2.svg",
        // Add more image paths here
      ];
      var centerClass = i === Math.floor(images.length / 2) ? "center" : "";
      return (
        '<img src="' +
        images[i] +
        '" alt="Slide ' +
        (i + 1) +
        '" class="' +
        centerClass +
        '">'
      );
    },
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: ".slider-for",
          dots: true,
          fade: true,
          centerMode: true,
          centerPadding: "0px",
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          focusOnSelect: true,
        },
      },
  
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
  
  
  
  var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = "15em", //distance from center
    start = -85, //shift start from 0
    $elements = $(".round-slider .slider-paging-number li"),
    numberOfElements = type === 1 ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = (430 * type) / numberOfElements;
  
  // var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
  //     radius = '15em', //distance from center
  //     start = -0, //shift start from 0
  //     $elements = $('.round-slider .slider-paging-number li'),
  //     numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
  //     slice = 360 * type / numberOfElements;
  
  $elements.each(function (i) {
    var $self = $(this),
      rotate = slice * i + start,
      rotateReverse = rotate * -1;
  
    $self.css({
      position: "absolute",
      transform:
        "rotate(" +
        rotate +
        "deg) translate(" +
        radius +
        ") rotate(" +
        rotateReverse +
        "deg)",
      "list-style": "none",
    });
  });
  
  // *******************************************************************************
  
  gsap.registerPlugin(ScrollTrigger);
  
  // Create a timeline for .black-fill elements in .right SVG
  const rightTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".growth_2",
      start: "-800px top", // Start earlier for a slower animation
      end: "top top",
      scroller: "#main",
      scrub: 2,
    },
  });
  
  gsap.fromTo(
    ".right .black-fill",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2, // Even slower fade-in
      ease: "none",
      scrollTrigger: {
        trigger: ".growth_2",
        start: "-800px top",
        end: "top top",
        scroller: "#main",
        scrub: 2,
      },
    }
  );
  
  // Animate stroke-dashoffset for right SVG paths
  gsap.fromTo(
    ".right path",
    {
      strokeDashoffset: (i, target) =>
        gsap.getProperty(target, "strokeDasharray"),
    },
    {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".growth_2",
        start: "-800px top",
        end: "top top",
        scroller: "#main",
        scrub: 2,
      },
    }
  );
  
  // Create a timeline for .black-fill elements in .left SVG
  const leftTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".growth_2",
      start: "-800px top", // Start earlier for a slower animation
      end: "top top",
      scroller: "#main",
      scrub: 2,
    },
  });
  
  gsap.fromTo(
    ".left .black-fill",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2, // Even slower fade-in
      ease: "none",
      scrollTrigger: {
        trigger: ".growth_2",
        start: "-800px top",
        end: "top top",
        scroller: "#main",
        scrub: 2,
      },
    }
  );
  
  // Animate stroke-dashoffset for left SVG paths
  gsap.fromTo(
    ".left path",
    {
      strokeDasharray: (i, target) => gsap.getProperty(target, "strokeDasharray"),
      strokeDashoffset: (i, target) =>
        gsap.getProperty(target, "strokeDasharray"), // Start with a full offset
    },
    {
      strokeDashoffset: 0, // End with no offset
      ease: "none",
      scrollTrigger: {
        trigger: ".growth_2",
        start: "-800px top",
        end: "top top",
        scroller: "#main",
        scrub: 5, // Adjust scrub value for desired smoothness
      },
    }
  );
  
  function adjustRowHeight() {
    const grid = document.querySelector(".masonry-box");
    const items = Array.from(grid.children);
    const rowHeights = {};
  
    items.forEach((item) => {
      const rowStart = item.style.gridRowStart;
      const height = item.getBoundingClientRect().height;
  
      if (!rowHeights[rowStart] || height > rowHeights[rowStart]) {
        rowHeights[rowStart] = height;
      }
    });
  
    items.forEach((item) => {
      const rowStart = item.style.gridRowStart;
      item.style.height = `${rowHeights[rowStart]}px`;
    });
  }
  
  document.querySelectorAll(".read-hide-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const currentCard = this.closest(".feedback-box-1");
      const feedpara = this.previousElementSibling;
      const isExpanded = feedpara.classList.toggle("expanded");
  
      // Collapse other cards
      document.querySelectorAll(".feedback-box-1").forEach((card) => {
        if (card !== currentCard) {
          card.classList.remove("expanded");
          card.querySelector(".feedpara").classList.remove("expanded");
          card.querySelector(".read-hide-btn").textContent = "Continue reading";
        }
      });
  
      // Apply expanded class to current card
      currentCard.classList.toggle("expanded", isExpanded);
  
      // Update button text
      this.textContent = isExpanded ? "Hide" : "Continue reading";
    });
  });
  
  function adjustGrid() {
    const grid = document.querySelector(".masonry-box");
    const items = Array.from(grid.children);
  
    items.forEach((item) => {
      item.style.height = "auto";
    });
  
    items.forEach((item) => {
      const height = item
        .querySelector(".feedback-box")
        .getBoundingClientRect().height;
      item.style.height = `${height}px`;
    });
  }
  
  function calculateGridRowStart(item) {
    const grid = document.querySelector(".masonry-box");
    const gridWidth = grid.clientWidth;
    const itemWidth = item.clientWidth;
    const columns = Math.floor(gridWidth / itemWidth);
    const itemIndex = Array.from(grid.children).indexOf(item);
  
    return Math.floor(itemIndex / columns) + 1;
  }
  
  function adjustRowHeight() {
    const grid = document.querySelector(".masonry-box");
    const items = Array.from(grid.children);
    const rowHeights = {};
  
    items.forEach((item) => {
      const rowStart = calculateGridRowStart(item);
      const height = item.getBoundingClientRect().height;
  
      if (!rowHeights[rowStart] || height > rowHeights[rowStart]) {
        rowHeights[rowStart] = height;
      }
    });
  
    items.forEach((item) => {
      const rowStart = calculateGridRowStart(item);
      item.style.height = `${rowHeights[rowStart]}px`;
    });
  }
  
  document.querySelectorAll(".expand-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.previousElementSibling;
      content.classList.toggle("expanded");
      adjustRowHeight();
    });
  });
  
  window.addEventListener("resize", adjustRowHeight);
  
  // *******************************************************************************
  
  function animate() {
    if (window.innerWidth > 991) {
      // Timeline for site header animations
      var yz = gsap.timeline({
        scrollTrigger: {
          trigger: ".site_header",
        },
      });
  
      // Animate the site logo
      yz.from(".site_header .site_logo", {
        y: -50,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      // Animate the unordered list
      yz.from(
        ".site_header .unordered-list",
        {
          y: -50,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "-=0.5"
      );
  
      // Timeline for hero banner animations
      var xz = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero_banner_section",
        },
      });
  
      // Animate the heading
      xz.from(".hero_banner_section h1", {
        x: -150,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      // Animate the paragraph
      xz.from(
        ".hero_banner_section p",
        {
          x: -150,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
  
      // Animate the button
      xz.from(
        ".hero_banner_section .btnn",
        {
          x: -150,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
  
      // Expert IT Care section animations
      var jj = gsap.timeline({
        scrollTrigger: {
          trigger: ".expert-it-care",
          start: "-500px top",
          scroller: "#main",
        },
      });
  
      jj.from(
        ".expert-it-care .heading",
        {
          x: -150,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "h"
      );
  
      jj.from(
        ".expert-it-care .para",
        {
          x: 150,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "h"
      );
  
      jj.from(
        ".expert-it-care .cards .card",
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
        },
        "0.5"
      );
  
      // Additional timelines for other sections
      // Conquering section animations
      var op = gsap.timeline({
        scrollTrigger: {
          trigger: ".conquering",
          start: "-500px top",
          scroller: "#main",
        },
      });
  
      op.from(".conquering .heading", {
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      op.from(
        ".conquering .col-lg-5",
        {
          scale: 0.5,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "s"
      );
  
      op.from(
        ".conquering .col-lg-6",
        {
          scale: 0.5,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "s"
      );
  
      // Empowerment section animations
      var empowerment = gsap.timeline({
        scrollTrigger: {
          trigger: ".empowerment",
          start: "-500px top",
          scroller: "#main",
        },
      });
  
      empowerment.from(".empowerment .heading", {
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      empowerment.from(".empowerment .para", {
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      // Growth section animations
      var sr = gsap.timeline({
        scrollTrigger: {
          trigger: ".growth_2",
          start: "top top",
          end: "bottom bottom",
          scroller: "#main",
          scrub: 2,
        },
      });
  
      sr.fromTo(
        ".growth_2 img",
        {
          scale: 0.8,
          opacity: 0.3,
        },
        {
          scale: 1,
          ease: "power2.out",
          duration: 1,
          opacity: 1,
          stagger: 1,
        }
      );
  
      // Other section animations
      // Partner section
      var up = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner",
          start: "-500px top",
          scroller: "#main",
        },
      });
  
      up.from(
        ".partner .heading",
        {
          x: "-200px",
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "r"
      );
  
      up.from(".partner .text", {
        x: "-200px",
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      up.fromTo(
        ".partner .part-container",
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          duration: 0.5,
          stagger: 0.2,
        },
        "r"
      );
  
      // Testimonial section
      var testimonial = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonial",
          start: "-400px top",
          scroller: "#main",
        },
      });
  
      testimonial.from(".testimonial .heading", {
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
  
      testimonial.fromTo(
        ".testimonial .feedback-box-1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power2.out",
          duration: 0.5,
          stagger: 0.3,
        }
      );
  
      // Contact section
      var tt = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact",
          start: "-400px top",
          scroller: "#main",
        },
      });
  
      tt.from(
        ".contact .titlebox .heading",
        {
          x: "-200",
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "g"
      );
  
      tt.from(
        ".contact .contact-form .heading",
        {
          x: "200",
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "g"
      );
  
      tt.from(
        ".contact .contact-form .form-floating",
        {
          x: "200",
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.5,
        },
        "g"
      );
  
      // Footer section
      var sp = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "-500px top",
          scroller: "#main",
        },
      });
  
      sp.from(
        ".footer .footer-contact li",
        {
          x: "-200px",
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.5,
        },
        "b"
      );
  
      sp.from(
        ".footer .social li",
        {
          scale: 0.5,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.5,
        },
        "b"
      );
  
      sp.from(
        ".footer .footer-logo",
        {
          scale: 0.5,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "b"
      );
    }
  }
  
  animate();
  
  $(".partner-1").slick({
    infinite: true,
    arrows: false,
    centerPadding: "0px",
    autoplay: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  $(".partner-2").slick({
    infinite: true,
    arrows: false,
    centerPadding: "0px",
    autoplay: true,
    centerMode: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  $(".growth-slider").slick({
    infinite: true,
    centerMode: false, // Keep centerMode off globally
    variableWidth: false, // Disable variableWidth to avoid issues
    arrows: false,
    autoplay: true, // Optional: Set autoplay speed (3 seconds by default)
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true, // Keeps autoplay active at this breakpoint
        },
      },
      {
        breakpoint: 450, // Properly define the breakpoint for small screens
        settings: {
          slidesToShow: 1, // Show 1.4 slides at this breakpoint
          slidesToScroll: 1,
          centerMode: false, // Enable centering for smaller screens
          centerPadding: "20px",
          variableWidth: true, // Ensure variableWidth is disabled
          autoplay: true, // Autoplay at this breakpoint
        },
      },
    ],
  });
  
  // 11th Seb 2024
  document.addEventListener("DOMContentLoaded", () => {
    var headerbutton = document.querySelector(".header__menu-button");
    var closeBtn = document.querySelector(".close");
  
    // Opening and closing the sidebar with animation
    headerbutton.addEventListener("click", () => {
      gsap.to(".sidebar", {
        top: "0vh",
        autoAlpha: 1,
        duration: 1,
        delay: 0.2,
        onStart: () => {
          gsap.set(".sidebar", {
            display: "block",
          });
        },
      });
    });
  
    closeBtn.addEventListener("click", () => {
      gsap.to(".sidebar", {
        top: "-100vh",
        autoAlpha: 0,
        duration: 1,
        delay: 0.2,
        onComplete: () => {
          gsap.set(".sidebar", {
            display: "none",
          });
        },
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-links .link-info");
    const navImages = document.querySelector(".nav-images");
    let clickedLink = document.querySelector(".nav-links .link-info.active"); // Store the initially active link
  
    const clearNavImagesClasses = () => {
      navImages.classList.remove(
        "about",
        "services",
        "team",
        "blog",
        "contact-us"
      );
    };
  
    const updateNavImagesClass = (link) => {
      if (link.textContent.includes("About Us")) {
        navImages.classList.add("about");
      } else if (link.textContent.includes("Services")) {
        navImages.classList.add("services");
      } else if (link.textContent.includes("Team")) {
        navImages.classList.add("team");
      } else if (link.textContent.includes("Blog")) {
        navImages.classList.add("blog");
      } else if (link.textContent.includes("Contact Us")) {
        navImages.classList.add("contact-us");
      }
    };
  
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        // Remove 'active' class from the currently active link
        if (clickedLink) {
          clickedLink.classList.remove("active");
        }
  
        // Remove all classes from nav-images
        clearNavImagesClasses();
  
        // Add the appropriate class based on the link hovered
        updateNavImagesClass(link);
      });
  
      link.addEventListener("mouseout", function () {
        // Restore the 'active' class to the previously clicked link
        if (clickedLink) {
          clickedLink.classList.add("active");
  
          // Clear nav-images classes and reapply the class based on the active link
          clearNavImagesClasses();
          updateNavImagesClass(clickedLink);
        }
      });
  
      link.addEventListener("click", function () {
        // Remove 'active' class from all links
        navLinks.forEach((item) => item.classList.remove("active"));
  
        // Add 'active' class to the clicked link
        link.classList.add("active");
        clickedLink = link; // Update the clicked link reference
  
        // Remove all classes from nav-images and add the appropriate one
        clearNavImagesClasses();
        updateNavImagesClass(link);
      });
    });
  });
  
  // Dropdown
  // Toggle the visibility of the dropdown content
  document.querySelector(".dropdown-btn").addEventListener("click", function () {
    document.querySelector(".dropdown-content").classList.toggle("show");
  });
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-btn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  // 11th Seb 2024
  
  var tl = gsap.timeline();
  
  tl.to("#loder", {
    delay: 0.3,  // Slightly increased delay
    duration: 0.8,  // Slightly longer duration
  }).to("#loder", {
    "--clip": "0%", 
    opacity: 0,
    duration: 1,  // Increased duration for a smoother fade out
    delay: 0.5,  // Slightly longer delay between animations
    onComplete: function () {
      document.getElementById("loader").style.display = "none";
    },
  });
  
  // ***********************************************************************************
  
  
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet(".header__menu-button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  


// Error page animation 
var err = gsap.timeline({
  scrollTrigger: {
    trigger: ".error_section",
    start: "-500px top",
    scroller: "#main",
  },
});

err.from(".error_section .error_heading", {
  scale: 0.5,
  delay : 1.5,
  opacity: 0,
  ease: "power2.out",
  duration: 1,
});

err.from(
  ".error_section p",
  {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
);

err.from(
  ".error_section .btnn",
  {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
);



// Error page animation 
var thnakss = gsap.timeline({
  scrollTrigger: {
    trigger: ".thanks_section .error_section",
    start: "-500px top",
    scroller: "#main",
  },
});

thnakss.from(".thanks_section .thanks_heading", {
  scale: 0.5,
  delay : 1.5,
  opacity: 0,
  ease: "power2.out",
  duration: 1,
});

thnakss.from(
  ".thanks_section p",
  {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
);

thnakss.from(
  ".thanks_section .btnn",
  {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
);