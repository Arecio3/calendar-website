$(document).ready(function() {

    $('.saveBtn').on('click', function (){
        console.log("click button")
        var textTime = $(this).siblings('.description').val();
        var textValue = $(this).parent().attr('id');
        localStorage.setItem(textValue, textTime);
        console.log(textValue);
        console.log(textTime);
    })




    var today = moment();
    $("#currentDay").text(today.format("MMM Do YYYY, h:mm a"));
    
    function timeTracker() {
        //get current number of hours.
        var currentHour = moment().format("HH") // use of moment.js
        

        // loop over time blocks
        $(".time-row").each(function () {
            // makes hourNow equal to each time id that is given 
            var hourNow = ($(this).attr("id"));
            console.log( hourNow, currentHour)

            //all times that are less then current hour get the "past" css
            if (hourNow < currentHour) {
                $(this).children().eq(1).addClass("past");
            } // all the times that are equal to current hour gets the "present" css
            else if (hourNow === currentHour) {
                $(this).children().eq(1).addClass("present");
            }
            else { // anything else gets the "future"
                $(this).children().eq(1).addClass("future");
            }
        })
    }
    timeTracker(); //run function
    function init() {
        // grabs id and text value and gives it the value of localStorage getting that
        $("#09 .description").val(localStorage.getItem("09"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
    }
    
    init();

   
    }) 
    
    
    
    
    