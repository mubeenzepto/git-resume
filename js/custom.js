// nav bar scroll color
$(function () {
	$(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });


  // When the user scrolls down 80px from the top of the document, slide down the navbar
// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.display = "block";
//         document.getElementById("navbar").style.top = "-85px";
//     }
// }

// Bootstrap Scroll Spy
$('body').scrollspy({
    target: '#navbar'
})
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})