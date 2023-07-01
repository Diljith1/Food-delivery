$(document).ready(function(){
    $("#sign").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                minlength:8,
                maxlength:15
            },
            mob:{
                required:true,
                minlength:10,
                maxlength:12
            }


        }
    })
})