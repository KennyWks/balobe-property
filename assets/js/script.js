// let width = screen.width;
// console.log(width);
// if (width < 1035) {
//   let element = document.querySelector(".auth");
//   element.classList.remove("ml-5");
// }

// $('.navbar-toggler').on('click', function (params) {
//     $(".info").css("top", "450px");
// })

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })