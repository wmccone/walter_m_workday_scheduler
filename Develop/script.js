$(document).ready(function () {


    var dateText = $("#currentDay")
    var date = moment().format('MMMM Do YYYY');
    var time = moment().format('hh:mm a');
    var currentHour = moment().format('H');
    var textInput = $("textarea")
    var textTime = $(".time-block")

    // moment('1300', 'LTS').format('hh:mm a')
    // Put the Date into a variable

   //create time block elements using Jquery
    dateText.text("Today is " + date + ", it is currently " + time)
    // console.log(currentHour)
    // var timeBlock = $("<div>");
    // timeBlock.attr("class", "row time-block")
    // var hourBlock = $("<p>");
    // hourBlock.attr("class", "col-md-2 border-start-0 hour")
    // var textBlock = $("<textarea>")
    // textBlock.attr("class", "col-md-8")
    // var saveButton = $("<button>")
    // saveButton.attr("class", "col-md-2 saveBtn")
    
    // //create a function that writes the timeblocks to the page
    // function createTimeBlock(){
        
    //     timeBlock.appendto(".container");
    //     hourBlock.appendto(".time-block")
    //     hourBlock.text("hello")
    //     textBlock.appendto(".time-block")
    //     saveButton.appendto(".time-block")
        
    // }
    
    // createTimeBlock()
    

    // //Create a for loop that writes the timeblocks to the page and the times using moment
    for (var i = 0; i < 9; i++){
    //     createTimeBlock()
    //     // hourBlock.text(moment('9:00').add(i, 'hours').format('LT'))

    };
    
    
    //if statement that changes the background color of the calendar slot to future times as green
    for (var i = 9; i < 18; i++){

        if (i > currentHour) {
           $("#"+i).attr("style", "background-color: green")
        }
        //if statement that changes the background color of the calendar slot to past time as gray
        else if (i < currentHour) {
            $("#"+i).attr("style", "background-color: gray")
        }
        //if statement that changes the background color of the calendar slot to present time as yellow
        else {
            $("#"+i).attr("style", "background-color: yellow")
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

    // function storeEvent() {
    //     localStorage.setItem("textArea", JSON.stringify(textInput));
    // }
    // function renderEvent() {
    //     for (var i = 9; i < 18; i++)
    //     // var event = eventList[i]
        

    // }

});