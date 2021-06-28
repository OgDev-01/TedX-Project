document.addEventListener("DOMContentLoaded", () => {
  $(this).scrollTop(0);
  let breakers = document.querySelector("br");
  let mobileLayout = window.matchMedia("(max-width: 44em)");
  let menuClicked = false;
  let iconOne = document.getElementById("icon-1");
  let iconTwo = document.getElementById("icon-2");
  let iconThree = document.getElementById("icon-3");
  const listItems = document.getElementById("list-items");
  const burger = document.getElementById("burger");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    if (!menuClicked) {
      listItems.classList.add("open");
      iconOne.classList.add("rotate-1");
      iconTwo.classList.add("second");
      iconThree.classList.add("rotate-2");
      body.style.touchAction = "none";
      menuClicked = true;
    } else {
      listItems.classList.remove("open");
      iconOne.classList.remove("rotate-1");
      iconTwo.classList.remove("second");
      iconThree.classList.remove("rotate-2");
      body.style.touchAction = "auto";
      menuClicked = false;
    }
  });

  // const listItems = document.getElementById("list-items");
  let listLoop = listItems.querySelectorAll("li a");
  for (let i = 0; i < listLoop.length; i++) {
    listLoop[i].addEventListener("click", () => {
      listItems.classList.remove("open");
      iconOne.classList.remove("rotate-1");
      iconTwo.classList.remove("second");
      iconThree.classList.remove("rotate-2");
      body.style.touchAction = "auto";
    });
  }
  var rootElement = document.documentElement;

  $(".btnScrollToTop").click(function (e) {
    e.preventDefault();

    $("html").animate({ scrollTop: 0 }, 1000);
    return true;
    $("body").animate({ scrollTop: 0 }, 1000);
    return true;
    $("document").animate({ scrollTop: 0 }, 1000);
    return true;
    $("window").animate({ scrollTop: 0 }, 1000);
    return true;
  });

  // Buy ticket click btn listener

  $(".contact-btn").click((e) => {
    e.preventDefault();
    $(".buy-ticket-wrap").addClass("buy-reveal");
    $("form :input").val("");
  });

  // collapse ticket handler
  $(".cancel").click(() => {
    $(".buy-ticket-wrap").removeClass("buy-reveal");
  });
  $(".proceed").click(() => {
    setTimeInterval(() => {
      $(".buy-ticket-wrap").removeClass("buy-reveal");
    }, 5000);
  });

  // windows scroll listener
  document.addEventListener("scroll", function () {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.1) {
      // Show btn
      // scrollToTopBtn.classList.add("show-scroll");
      $(".btnScrollToTop").addClass("show-scroll");
    } else {
      // hide btn
      // scrollToTopBtn.classList.remove("show-scroll");
      $(".btnScrollToTop").removeClass("show-scroll");
    }
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        1000,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  $(".refresh").click(function () {
    if (!$(this).hasClass("active")) {
      $(".refresh").removeClass("active");
      $(this).addClass("active");
    }
  });

  const partners = document.querySelectorAll(".part-icons-grid div");
  // const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector(".img");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 15,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  partners.forEach((b) => b.addEventListener("mousemove", animateit));
  partners.forEach((b) => b.addEventListener("mouseleave", animateit));
});
