$(".btn").on("click", function (event) {
  makeSound(event);
  changeAppearance(event);
  generatePercentage(event);
});

function generatePercentage(number) {
  var randomNumber = Math.floor(Math.random() * 101);

  $("h1").html("Your Love  Percentage  " + randomNumber + "%");
  if (randomNumber >= 81 && randomNumber <= 100) {
    $("h2").html(
      "We thinks that a relationship between you and your crush has a very good chance of being successful,Remember that every relationship needs spending time together, talking with each other"
    );
  } else if (randomNumber >= 61 && randomNumber <= 80) {
    $("h2").html(
      "We thinks that a relationship between you and your crush has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times."
    );
  } else if (randomNumber >= 41 && randomNumber <= 60) {
    $("h2").html(
      "The chance of a relationship working out between you and your crush is not very big, two of you really want it to, and are prepared to make some sacrifices for it."
    );
  } else {
    $("h2").html(
      "We thinks a relationship might work out between you and your crush, but the chance is very small. A successful relationship is possible, but you both have to work on it"
    );
  }
}
function changeAppearance() {
  $("body").attr("class", "doc-body");
  $("h1").addClass("h1-text");
  $("h2").addClass("h2-text");
  $("img").addClass("img-js");
  $(".btn").addClass("hide");
  $("input").remove();
}
function makeSound() {
  var bell = new Audio("sounds/bell.mp3");
  bell.play();
}
