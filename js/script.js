//Clock;
function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  var shortDays = [
    "Sun", //Sunday starts at 0
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  var longDays = [
    "Sunday", //Sunday starts at 0
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  d = new Date(); //This returns Wed Apr 02 2014 17:28:55 GMT+0800 (Malay Peninsula Standard Time)
  m = d.getMonth();
  month = months[m];
  date = d.getDate();
  year = d.getFullYear();
  x = d.getDay(); //This returns a number, starting with 0 for Sunday

  var day = shortDays[x];
  var longDay = longDays[x];

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = currentHours < 12 ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = currentHours === 0 ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString =
    day + " " + currentHours + ":" + currentMinutes + " " + timeOfDay;
  var longTimeString = longDay + ", " + month + " " + date + ", " + year;
  $("#clock").html(currentTimeString);
  $("#date").html(longTimeString);
}

$(document).ready(function () {
  updateClock();
  setInterval("updateClock()", 1000);
});

//Desktop Item Selection
$("#Desktop span").click(function (e) {
  e.stopPropagation();
  if (e.shiftKey) {
    //Shift-Click
    $(this).addClass("focus");
  } else {
    $(".focus").removeClass("focus");
    $(this).addClass("focus");
  }
});
$("body:not(#Desktop span)").click(function () {
  $("#Desktop span").removeClass("focus");
});

$("#Desktop span").dblclick(function () {
  //$(".window").addClass("open");
});
$("#close").click(function () {
  $(".window").removeClass("open");
});
//$("footer img").click(function(){$(this).animate(margin-bottom: 15px,5000,function(){};)});

//Menu Bar Selection
$("header ul li").click(function (e) {
  e.stopPropagation();
  $(".visible").removeClass("visible");
  $(this).children(" div.submenu").addClass("visible").fadeIn();
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
});
$("body:not(header ul.left li), body:not(header li input#search)").click(
  function () {
    $(".selected").removeClass("selected");
    $(".visible").removeClass("visible");
  }
);

//Jump

$("footer img").click(function () {
  $(this).removeClass("jump");
  this.offsetWidth = this.offsetWidth;
  $(this).addClass("jump");
});

$("#volume").on("change mousemove", function () {
  if ($(this).val() < 10) {
    $("#volume-icon").removeClass();
    $("#volume-icon").addClass("fa fa-volume-off");
  }
});
$("#volume").on("change mousemove", function () {
  if ($(this).val() > 10 && $(this).val() < 66) {
    $("#volume-icon").removeClass();
    $("#volume-icon").addClass("fa fa-volume-down");
  }
});
$("#volume").on("change mousemove", function () {
  if ($(this).val() > 66) {
    $("#volume-icon").removeClass();
    $("#volume-icon").addClass("fa fa-volume-up");
  }
});

jackHarnerSig();
