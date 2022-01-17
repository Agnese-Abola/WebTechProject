/**
 * Validate form
 *
 * @returns {{}}
 */
function validateForm() {
    let errors = {};

    errors['fname'] = validateName($('#fname').val());
    errors['lname'] = validateName($('#lname').val());
    errors['email'] = validateEmail($('#email').val());
    errors['date'] = validateDate($('#date').val());
    errors['phone'] = validatePhone($('#phone').val());
    errors["service"] = validateService($('#service').val());

    // Build result without `true` options
    let result = {}
    $.each(errors, function (key, val) {
        if (val !== true) {
            result[key] = val;
        }
    });

    return result;
}

/**
 * Validate names
 *
 * @param name
 * @returns {string|boolean}
 */
function validateName(name) {
    if (name.length < 1) {
        return 'Required';
    }

    if (name.length > 10) {
        return 'Name too long';
    }

    return true;
}

/**
 * Validate e-mail
 *
 * @param email
 * @returns {string|boolean}
 */
function validateEmail(email) {
    if (email.length < 1) {
        return 'Required';
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(regex.test(email))) {
        return 'Invalid e-mail address';
    }

    return true;
}

/**
 * Validate date
 *
 * @param date
 * @returns {string|boolean}
 */
function validateDate(date) {
    if (date.length < 1) {
        return 'Required';
    }

    let now = new Date();
    let bookDate = new Date(date);
    if (bookDate < now) {
        return "Date can't be in the past";
    }

    return true;
}

/**
 *
 * Validate phone
 *
 * @param phone
 * @returns {string|boolean}
 */
function validatePhone(phone) {
    if (phone.length < 1) {
        return 'Required';
    }

    if (phone.length < 3) {
        return 'Phone number too short';
    }

    if (isNaN(phone)) {
        return 'Invalid phone number';
    }

    return true;
}

/**
 * Validate service
 *
 * @param service
 * @returns {string|boolean}
 */
function validateService(service) {
    if (service.length < 1) {
        return 'Required';
    }

    if (service !== "hair" && service !== "beard" && service !== "beard-hair") {
        return 'Invalid service';
    }

    return true;
}
