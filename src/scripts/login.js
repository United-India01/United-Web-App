// Get form and buttons
const loginForm = document.getElementById('loginForm');
const aadhaarInput = document.getElementById('aadhaar');
const passwordInput = document.getElementById('password');
const guestModeButton = document.getElementById('guestModeButton');

// Handle Login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const aadhaarNumber = aadhaarInput.value;
    const password = passwordInput.value;

    // Basic validation (enhance as needed)
    if (aadhaarNumber && password && /^\d{12}$/.test(aadhaarNumber)) {
        console.log(`Login attempt with Aadhaar: ${aadhaarNumber}`);
        // Simulate API call for login verification
        alert('Simulating login with Aadhaar: ' + aadhaarNumber + '. Redirecting to home page.');
        // Redirect to home page on successful login (simulation)
        window.location.href = 'home.html';
    } else if (!/^\d{12}$/.test(aadhaarNumber) && aadhaarNumber) {
        console.error('Invalid Aadhaar number format.');
        alert('Please enter a valid 12-digit Aadhaar number.');
        aadhaarInput.focus();
    } else {
        console.error('Aadhaar Number and Password are required.');
        alert('Please enter both Aadhaar Number and Password.');
        if (!aadhaarNumber) aadhaarInput.focus();
        else passwordInput.focus();
    }
});

// Handle Guest Mode button click
guestModeButton.addEventListener('click', function() {
    console.log('Guest Mode selected.');
    alert('Simulating Guest Mode access. Redirecting to home page.');
    // Redirect to home page or a limited version for guests
    window.location.href = 'home.html'; // Or potentially a different guest view
});