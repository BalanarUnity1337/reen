var page_header_nav = document.querySelector(".page-header-nav");
var page_header_nav_menu = document.querySelector(".page-header-nav-menu");
var page_header_nav_logo = document.querySelector(".page-header-nav-logo");
var mega_menu = document.querySelector(".mega-menu");

var page_header_nav_coord = page_header_nav.getBoundingClientRect().bottom;

window.onscroll = function() {
  if (page_header_nav.classList.contains("page-header-nav-fixed") && window.pageYOffset < page_header_nav_coord || window.pageYOffset == 0) {
    page_header_nav.classList.remove("page-header-nav-fixed");
    page_header_nav_menu.classList.remove("page-header-nav-fixed-menu");
    page_header_nav_logo.classList.remove("page-header-nav-fixed-logo");
    mega_menu.classList.remove("mega-menu-fixed");
  }
  else if (window.pageYOffset > page_header_nav_coord) {
    page_header_nav.classList.add("page-header-nav-fixed");
    page_header_nav_menu.classList.add("page-header-nav-fixed-menu");
    page_header_nav_logo.classList.add("page-header-nav-fixed-logo");
    mega_menu.classList.add("mega-menu-fixed");
  }
}

var main_slider = document.querySelector(".main-slider");
var main_slides_arr = main_slider.getElementsByTagName("input");
var main_radio = main_slider.getElementsByTagName("label");
var main_slider_toggle_left = main_slider.querySelector(".slider-toggle-left");
var main_slider_toggle_right = main_slider.querySelector(".slider-toggle-right");
var main_slides_count = 0;

for (var i = 0; i < main_slides_arr.length; i++) {
  add_event(main_radio[i], i, main_slides_arr[i], main_slides_arr.length, main_slides_arr);
}

function add_event(label, i, input, count, array) {
  label.addEventListener("click", function() {
    input.setAttribute("checked", "true");
    for (var j = 0; j < count; j++) {
      if (j == i) {
//        alert(j);
        continue;
      }
      else {
//        alert(j);
        array[j].removeAttribute("checked");
      }
    }
  })
}

main_slider_toggle_right.addEventListener("click", function() {
  for (var i = 0; i < main_slides_arr.length; i++) {
    if (main_slides_arr[i].hasAttribute("checked")) {
      main_slides_count = i;
//    alert(main_slides_count);
      break;
    }
  }
  if (main_slides_count == main_slides_arr.length - 1) {
    main_slides_arr[main_slides_count].removeAttribute("checked");
    main_slides_count = 0;
//    alert(main_slides_count);
    main_slides_arr[main_slides_count].setAttribute("checked", "true");
  }
  else {
    main_slides_arr[main_slides_count].removeAttribute("checked");
    main_slides_arr[main_slides_count + 1].setAttribute("checked", "true");
    main_slides_count++;
//    alert(main_slides_count);
  }
})

main_slider_toggle_left.addEventListener("click", function() {
  for (var i = 0; i < main_slides_arr.length; i++) {
    if (main_slides_arr[i].hasAttribute("checked")) {
      main_slides_count = i;
//    alert(main_slides_count);
      break;
    }
  }
  if (main_slides_count == 0) {
    main_slides_arr[main_slides_count].removeAttribute("checked");
    main_slides_count = main_slides_arr.length - 1;
    main_slides_arr[main_slides_count].setAttribute("checked", "true");
  }
  else {
    main_slides_arr[main_slides_count].removeAttribute("checked");
    main_slides_arr[main_slides_count - 1].setAttribute("checked", "true");
    main_slides_count--;
  }
})

var projects_slider = document.querySelector(".projects-slider");
var projects_slides_arr = projects_slider.getElementsByTagName("input");
var projects_radio = projects_slider.getElementsByTagName("label");
var projects_slider_toggle_left = projects_slider.querySelector(".slider-toggle-left");
var projects_slider_toggle_right = projects_slider.querySelector(".slider-toggle-right");
var projects_slides_count = 1;

projects_slider_toggle_right.addEventListener("click", function() {
  for (var i = 0; i < main_slides_arr.length; i++) {
    if (projects_slides_arr[i].hasAttribute("checked")) {
      projects_slides_count = i;
//    alert(main_slides_count);
      break;
    }
  }
  if (projects_slides_count == projects_slides_arr.length - 1) {
    projects_slides_arr[projects_slides_count].removeAttribute("checked");
    projects_slides_count = 0;
    projects_slides_arr[projects_slides_count].setAttribute("checked", "true");
  }
  else {
    projects_slides_arr[projects_slides_count].removeAttribute("checked");
    projects_slides_arr[projects_slides_count + 1].setAttribute("checked", "true");
    projects_slides_count++;
  }
})

projects_slider_toggle_left.addEventListener("click", function() {
  for (var i = 0; i < main_slides_arr.length; i++) {
    if (projects_slides_arr[i].hasAttribute("checked")) {
      projects_slides_count = i;
//    alert(main_slides_count);
      break;
    }
  }
  if (projects_slides_count == 0) {
    projects_slides_arr[projects_slides_count].removeAttribute("checked");
    projects_slides_count = projects_slides_arr.length - 1;
    projects_slides_arr[projects_slides_count].setAttribute("checked", "true");
  }
  else {
    projects_slides_arr[projects_slides_count].removeAttribute("checked");
    projects_slides_arr[projects_slides_count - 1].setAttribute("checked", "true");
    projects_slides_count--;
  }
})

for (var i = 0; i < projects_slides_arr.length; i++) {
  add_event(projects_radio[i], i, projects_slides_arr[i], projects_slides_arr.length, projects_slides_arr);
}
