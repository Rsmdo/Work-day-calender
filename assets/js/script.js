//declaring variables to target the Ids from index.html
var current = $("#currentDay");
//using moment.js to display the currentDay in m/d/y and time format
const currentDay = moment().format("MMMM Do YYYY, h:mm:ss a ");
//converting hours into integer from string using parseInt
const currentHour = parseInt(moment().hour());
//display currentDay on the page
current.text(currentDay);
const blockLength = $(".time-block").length;



    renderLocalStorage();

        $(".description").each(function() {
            //_i = input used to create the object, converting integer tostring 
            // targeting description block to add colors
            let currentBlockTimeVal = parseInt(moment($(this).attr("id"))._i);
            if (moment(currentBlockTimeVal).isBefore(currentHour)) {
                $(this).addClass("past");
            }
            else if (moment(currentBlockTimeVal).isSame(currentHour)) {
                $(this).addClass("present");
            }
            else if (moment(currentBlockTimeVal).isAfter(currentHour)) {
                $(this).addClass("future");
            }
        });

        $(".saveBtn").on("click", function() {
            for(let i = 0; i < blockLength; i++) {
                let currentID = $(".description").eq(i).attr("id");
                let value = $(".description").eq(i).val().trim();
                localStorage.setItem(currentID, value);
            }
        });


        function renderLocalStorage() {
            for (let i = 9, j = 0; i < 18; i++, j++) {
                let blockInfo = (localStorage.getItem(i))
                $(".description").eq(j).text(blockInfo)
            }
        }

const rows = document.getElementsByClassName("row");

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
var timeChange = function(){
  //jumbotron time
  const timeNow = moment().format("dddd, MMM Do, YYYY, hh:mm:ss a");
  current.text(timeNow);
}

setInterval(timeChange, 1000);