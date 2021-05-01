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

  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
});
