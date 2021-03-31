document.addEventListener("DOMContentLoaded", () => {
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
});