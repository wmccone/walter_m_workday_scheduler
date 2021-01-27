$(document).ready(function () {


    var dateText = $("#currentDay")
    var date = moment().format('MMMM Do YYYY');
    var time = moment().format('hh:mm a');
    var currentHour = moment().format('H');
    var textInput = $("textarea")
    var textTime = $(".time-block")



   //create time block elements using Jquery
    dateText.text("Today is " + date + ", it is currently " + time)
 
    
    //Create a for loop that writes the timeblocks to the page and the times using moment
    for (var i = 9; i < 18; i++){
        //if statement that changes the background color of the calendar slot to future times as green

        if (i > currentHour) {
           $("#"+i).children("textarea").addClass("future")
        }
        //if statement that changes the background color of the calendar slot to past time as gray
        else if (i < currentHour) {
            $("#"+i).children("textarea").addClass("past")
        }
        //if statement that changes the background color of the calendar slot to present time as yellow
        else {
            $("#"+i).children("textarea").addClass("present")
        }

        var event = localStorage.getItem(i)
        $(`#${i} textarea`).val(event)
   
    };
    //create a function that saves the text onto the Calendar using the button

    var eventObject = {}

    $(".saveBtn").on("click", function(){
        var key = $(this).parent().attr("id")
        var value = $(this).siblings("textarea").val()
        localStorage.setItem(key, value)
    });
    var eventList = JSON.parse(localStorage.getItem(i)) || []

 
});