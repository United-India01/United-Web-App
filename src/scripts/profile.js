// Handle tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding content
        const contentType = this.dataset.content;
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = section.id === contentType ? 'block' : 'none';
        });
    });
});

// Handle edit profile button
document.querySelector('.edit-profile-btn')?.addEventListener('click', function() {
    // Implement edit profile functionality
    console.log('Edit profile clicked');
});

// Handle navigation icons
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === 'profile.html') {
        link.classList.add('text-blue-500');
    }
});