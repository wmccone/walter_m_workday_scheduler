$(document).ready(function() {


var dateText = $("#currentDay")
var date = moment().format('MMMM Do YYYY');
var time = moment().format('h:mm:ss a');
var currentHour = moment().format('h');
var textInput = $("textarea")
var textTime= $("textarea").val()
// Put the Date into a variable
// Write the date onto the page using a class
dateText.text("Today is "+date+", it is currently "+time)

//create a function that saves the text onto the Calendar using the button
console.log (currentHour)
//if statement that changes the background color of the calendar slot to future times as green
    if (textTime> currentHour){
        textInput.attr("style", "background-color: green")
    }
    //if statement that changes the background color of the calendar slot to past time as gray
    if (textTime<currentHour){
        textInput.attr("style", "background-color: gray")
    }
    //if statement that changes the background color of the calendar slot to present time as yellow
    else {
        textInput.attr("style", "background-color: yellow")
    }


});