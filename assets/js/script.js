//able to select a time block and day and add it to table
//saves name day and block to local storage
//button to open the schedule module to schedule a block
//able to clear your time or reschedule a day


$(document).ready(function(){
    $('#btnSubmit').click(function(){
        var name = $('#name').val();
        var time =$('#time').val();
        console.log('Info', {
            name: name,
            time: time
        })

    })
})