module.exports = {
	registrationSchema: {
		'fname': {
			notEmpty: true,
			errorMessage: 'First name cannot be empty.'
		},
		'lname': {
			notEmpty: true,
			errorMessage: 'Last name cannot be empty.'
		},
		'email': {
			notEmpty: true,
			isEmail: {
				errorMessage: 'Invalid Email'
			},
			errorMessage: 'Email cannot be empty'
		},
		'username': {
			notEmpty: true,
			isLength: {
				options: [{ min:5 }],
				errorMessage: 'Username must be at least 5 characters.'
			},
			errorMessage: 'Username name cannot be empty.'
		},
		'password': {
			notEmpty: true,
			isLength: {
				options: [{ min: 6}],
				errorMessage: 'Password must be at least 6 characters'
			},
			matches: {
				options: ['(?=.*[a-zA-Z])(?=.*[0-9]+).*', 'g'],
				errorMessage: 'Password must be alphanumeric.'
			},
			errorMessage: 'Password cannot be empty'
		}
	}
};