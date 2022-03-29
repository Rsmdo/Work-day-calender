
const currentDay = $("#currentDay");
const date = moment().format("MMMM Do YYYY, h:mm:ss a ");
const hour = parseInt(moment().hour());
const blockLength = $(".time-block").length;
const rows = document.getElementsByClassName("row");


currentDay.text(date);


function settingStorage() {
  for (let i = 9, j = 0; i < 18; i++, j++) {
    let blockInfo = (localStorage.getItem(i))
    $(".description").eq(j).text(blockInfo)
  }
}

settingStorage();

$(".description").each(function() {
  let currentBlockTimeVal = parseInt(moment($(this).attr("id"))._i);
    if (moment(currentBlockTimeVal).isBefore(hour)) {
        $(this).addClass("past");
      }
    else if (moment(currentBlockTimeVal).isSame(hour)) {
        $(this).addClass("present");
      }
    else if (moment(currentBlockTimeVal).isAfter(hour)) {
      $(this).addClass("future");
    }
});
$(".saveBtn").on("click", function() {
  for(let i = 0; i < blockLength; i++) {
    let currentID = $(".description").eq(i).attr("id"); // selecting specific element with index number and id
    let value = $(".description").eq(i).val().trim();
        localStorage.setItem(currentID, value);
      }
});



function setColor(element, color) {
  element.style.backgroundColor = color;
}
var timeChange = function(){
  //jumbotron time
  const timeNow = moment().format("dddd, MMM Do, YYYY, hh:mm:ss a");
  currentDay.text(timeNow);
}

setInterval(timeChange, 1000);