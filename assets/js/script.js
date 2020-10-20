//able to select a time block and day and add it to table
//saves name day and block to local storage
//button to open the schedule module to schedule a block
//able to clear your time or reschedule a day


$(document).ready(function(){
    $('#btnSubmit').click(function(){
        var name = $('#name').val();
        var time = $('#time').val();
        var day = $('#days').val();
        console.log('Info', {
            name: name,
            time: time,
            day: day
        })
        // $('#eightam-mon').append(name);

        if (time == '8to12pm') {
            if(day == 'monday'){
                $('#eightam-mon').append("<ul><li>" + name + "</ul></li>");
            }
            else if (day == 'tuesday') {
                $('#eightam-tue').append(name);
            }
            else if (day == 'wednesday') {
                $('#eightam-wed').append(name);
            }
            else if (day == 'thursday') {
                $('#eightam-thur').append(name);
            }
            else if (day == 'friday') {
                $('#eightam-fri').append(name);
            }
            else if (day == 'saturday') {
                $('#eightam-sat').append(name);
            }
            else if (day == 'sunday') {
                $('#eightam-sun').append(name);
            }
        }
        else if(time == '12to4pm'){
            // console.log('nope');
            if(day == 'monday'){
                $('#twelve-mon').append(name);
            }
            else if (day == 'tuesday') {
                $('#twelve-tue').append(name);
            }
            else if (day == 'wednesday') {
                $('#twelve-wed').append(name);
            }
            else if (day == 'thursday') {
                $('#twelve-thur').append(name);
            }
            else if (day == 'friday') {
                $('#twelve-fri').append(name);
            }
            else if (day == 'saturday') {
                $('#twelve-sat').append(name);
            }
            else if (day == 'sunday') {
                $('#twelve-sun').append(name);
            }
        }
        else if(time == '4to8pm'){
            // console.log('nope');
            if(day == 'monday'){
                $('#four-mon').append(name);
            }
            else if (day == 'tuesday') {
                $('#four-tue').append(name);
            }
            else if (day == 'wednesday') {
                $('#four-wed').append(name);
            }
            else if (day == 'thursday') {
                $('#four-thur').append(name);
            }
            else if (day == 'friday') {
                $('#four-fri').append(name);
            }
            else if (day == 'saturday') {
                $('#four-sat').append(name);
            }
            else if (day == 'sunday') {
                $('#four-sun').append(name);
            }
        }
        else if(time == '8to12am'){
            // console.log('nope');
            if(day == 'monday'){
                $('#eightpm-mon').append(name);
            }
            else if (day == 'tuesday') {
                $('#eightpm-tue').append(name);
            }
            else if (day == 'wednesday') {
                $('#eightpm-wed').append(name);
            }
            else if (day == 'thursday') {
                $('#eightpm-thur').append(name);
            }
            else if (day == 'friday') {
                $('#eightpm-fri').append(name);
            }
            else if (day == 'saturday') {
                $('#eightpm-sat').append(name);
            }
            else if (day == 'sunday') {
                $('#eightpm-sun').append(name);
            }
        }
        

    })
})