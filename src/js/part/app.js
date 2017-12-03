$(document).ready(function() {
    $("#form1").validate({
    	errorElement: "em",
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal: {
            	required: true
            }
        },

        messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal: {
            	required: "Вы должны согласиться на обработку персональных данных",
            }
        },

        submitHandler: function(form) {
		    
		}
    });

    $("#form1").submit(function() { //устанавливаем событие отправки для формы с id=form
        var formData = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "/ajax/send.php", //путь до php фаила отправителя
            data: formData
        });
    });

    $("#form2").validate({
    	errorElement: "em",
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal: {
            	required: true
            }
        },

        messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal: {
            	required: "Вы должны согласиться на обработку персональных данных",
            }
        },

        submitHandler: function(form) {
		    window.location.href = "/plan.pdf";
		}
    });

    $("#form2").submit(function() { //устанавливаем событие отправки для формы с id=form
        var formData = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "/ajax/send.php", //путь до php фаила отправителя
            data: formData
        });
    });

    $("#form3").validate({
    	errorElement: "em",
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal: {
            	required: true
            }
        },

        messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal: {
            	required: "Вы должны согласиться на обработку персональных данных",
            }
        },

        submitHandler: function(form) {
		    
		}
    });

    $("#form3").submit(function() { //устанавливаем событие отправки для формы с id=form
        var formData = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "/ajax/send.php", //путь до php фаила отправителя
            data: formData
        });
    });



    $('input[type="checkbox"]').on('change', function() {
		$(this).next('.error').remove();
	});
});