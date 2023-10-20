document.addEventListener('DOMContentLoaded', function() {
    // Array of country names
    const countries = [
        'United States',
        'Canada',
        'United Kingdom',
        'Australia',
        'Germany',
        'India',
        'others',
        // Add more countries here
    ];

    // Select the dropdown element
    const countrySelect = document.getElementById('country');

    // Populate the dropdown with options
    countries.forEach(function(country) {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
});




function submitForm() {
    // Perform necessary form field validations here



    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderElements).map(e => e.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Display the selected values in a popup
    const popupMessage = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
      `;

    alert(popupMessage);

    // Reset the form
    document.getElementById('surveyForm').reset();
}