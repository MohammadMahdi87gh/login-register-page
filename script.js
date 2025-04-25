$(document).ready(function() {

    $('#Register').hide()

    // start show regher
    $('.regher').click(function() {
            $('#Login').hide()
            $('#Register').show()
        })
        // end show regher

    // start show log
    $('.log').click(function() {
            $('#Login').show()
            $('#Register').hide()
        })
        // end show log

    // start fild login
    $('#logi').click(function() {

            let u = $('#UserName').val().trim();
            let p = $('#Password').val().trim();

            let hasError = false;

            if (u === '') {
                $('#UserName')
                    .attr('placeholder', 'لطفا نام کاربری را وارد کنید')
                    .val('')
                    .addClass('input-error');
                hasError = true;
            } else {
                $('#UserName').removeClass('input-error');
            }

            if (p === '') {
                $('#Password')
                    .attr('placeholder', 'لطفا رمز عبور را وارد کنید')
                    .val('')
                    .addClass('input-error');
                hasError = true;
            } else {
                $('#Password').removeClass('input-error');
            }

            if (!hasError) {
                alert("با موفقیت وارد شدید!")

            }

        })
        // end fild login

    // start fild register
    $('#regi').click(function() {

            let ur = $('#UserNamer').val()
            let pr = $('#Passwordr').val()
            let cpr = $('#cPasswordr').val()
            let er = $('#emailr').val()

            let hasError = false;

            if (ur === '') {
                $('#UserNamer')
                    .attr('placeholder', 'لطفا نام کاربری را وارد کنید')
                    .val('')
                    .addClass('input-error');
                hasError = true;
            } else {
                $('#UserNamer').removeClass('input-error');
            }

            if (pr === '') {
                $('#Passwordr')
                    .attr('placeholder', 'لطفا رمز عبور را وارد کنید')
                    .val('')
                    .addClass('input-error');
                hasError = true;
            } else {
                $('#Passwordr').removeClass('input-error');
            }

            if (cpr === '') {
                $('#cPasswordr')
                    .attr('placeholder', 'لطفا رمز عبور را تکرار کنید')
                    .val('')
                    .addClass('input-error');
                hasError = true;
            } else {
                $('#cPasswordr').removeClass('input-error');
            }

            if (er === '') {
                $('#emailr')
                    .attr('placeholder', 'لطفا ایمیل را وارد کنید')
                    .val('')
                    .addClass('input-error');
                hasError = true;
            } else {
                $('#emailr').removeClass('input-error');
            }

            if (!hasError) {
                alert("حساب شما با موفقیت ساخته شد!")
            }

        })
        // end fild register

});