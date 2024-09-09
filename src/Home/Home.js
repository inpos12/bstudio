$.get("/bstudio/src/Nav/Nav.html", function (data) {
  $("nav").html(data);
});
$.get("/bstudio/src/Home/Header/Header.html", function (data) {
  $("header").html(data);
});
$.get("/bstudio/src/Home/Section1/Section1.html", function (data) {
  $("Section1").html(data);
});
$.get("/bstudio/src/Home/Section2/Section2.html", function (data) {
  $("Section2").html(data);
});
$.get("/bstudio/src/Home/Section3/Section3.html", function (data) {
  $("Section3").html(data);
});
$.get("/bstudio/src/Home/Section4/Section4.html", function (data) {
  $("Section4").html(data);
});
$.get("/bstudio/src/Home/Section5/Section5.html", function (data) {
  $("Section5").html(data);
});

// $.get("/Web/screen/home/Section5/Section5.html", function (data) {
//   $("#Section5").html(data);
// });
// $.get("/Web/screen/home/Section6/Section6.html", function (data) {
//   $("#Section6").html(data);
// });
// $.get("/Web/common/Footer/Footer.html", function (data) {
//   $("footer").html(data);
// });
