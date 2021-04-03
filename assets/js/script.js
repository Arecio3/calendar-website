$(document).ready(function() {

    $('.saveBtn').on('click', function (){
        console.log("click button")
        var textValue = $(this).siblings('.description').val();
        var textTime = $(this).parent().attr('id');
        localStorage.setItem(textTime, textValue);
        console.log(textValue);
        console.log(textTime);
    })

    })
    // rootEl.find("textarea").css('background-color', 'red');
    
    
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

   
    // function timeTracker() {
    //     var currentTime = moment().format("HH");

    //     $(".time-block").each(function() {
    //         var hourNow = parseInt($(this).attr("id").split("hour")[1]);
    //         console.log(hourNow, currentTime);

            
    //     })
    // }
   
    
    function timeTracker() {
        //get current number of hours.
        var currentHour = moment().format("HH") // use of moment.js
        

        // loop over time blocks
        $(".time-row").each(function () {
            // hooks into time-blocks id and then only takes out the hour
            var hourNow = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourNow, currentHour)

            //if the h
            if (hourNow < currentHour) {
                $(this).addClass("past");
            }
            else if (hourNow === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    timeTracker(); //re-run function
    