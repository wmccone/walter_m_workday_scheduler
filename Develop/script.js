$(document).ready(function () {

    //Sets the current time on ther page
    var dateText = $("#currentDay")
    var date = moment().format('MMMM Do YYYY');
    var time = moment().format('hh:mm a');

    //Time will be variable to measure against
    var currentHour = moment().format('H');

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
        //if statement that changes the background color of the calendar slot to present time as red
        else {
            $("#"+i).children("textarea").addClass("present")
        }
        // When the for loop iterates also check to see if there is a value saved to the key for that iteration
        var event = localStorage.getItem(i)
        // Add the value to the text box if it exists in the local storage
        $("#"+i).children("textarea").val(event)
   
    };

    //create a function that saves the text onto the Calendar using the button
    $(".saveBtn").on("click", function(){
        // Pull the Id to use as a reference
        var key = $(this).parent().attr("id")
        // Pull the value to save to Local storage
        var value = $(this).siblings("textarea").val()
        localStorage.setItem(key, value)
    });


 
});