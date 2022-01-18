$(function () {
    $('#datetimepicker1').datetimepicker();

    $('#booking-form').on('submit', function (e) {
        let validated = false;

        // Clear possible previous validations
        $(':input').removeClass('invalid');
        $('.errors').text('');

        // Check validation errors
        let errors = validateForm();
        if (Object.keys(errors).length === 0) {
            validated = true;
        }

        // Submit form or display errors
        if (validated === true) {
            e.submit();
        } else {
            $.each(errors, function (key, val) {
                $("#" + key).addClass("invalid");
                document.getElementById(key+'-errors').innerHTML = val;
            });

            return false;
        }
    });

    // Show comments
    $('#comments-link').on('click', function(){
        $(this).hide();
        $('#comments-box').show();
    });
});
