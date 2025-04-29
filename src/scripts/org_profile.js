// Handle tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding content
        const contentType = this.dataset.content;
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = section.id === contentType ? 'block' : 'none';
        });
    });
});

// Handle policy card clicks
document.querySelectorAll('.policy-card').forEach(card => {
    card.addEventListener('click', function() {
        const policyId = this.dataset.policyId;
        window.location.href = `post_detail.html?id=${policyId}`;
    });
});

// Handle team member clicks
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
        const userId = this.dataset.userId;
        window.location.href = `profile.html?id=${userId}`;
    });
});

// Handle contact buttons
document.querySelector('.contact-email')?.addEventListener('click', function(e) {
    e.preventDefault();
    const email = this.getAttribute('href').replace('mailto:', '');
    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard!');
    });
});

document.querySelector('.contact-chat')?.addEventListener('click', function() {
    window.location.href = 'dms.html?org=true';
});

// Handle follow button
let isFollowing = false;
document.querySelector('.follow-button')?.addEventListener('click', function() {
    const followText = this.querySelector('.follow-text');
    const followCount = document.querySelector('.followers-count');
    const currentCount = parseInt(followCount.textContent);
    
    if (isFollowing) {
        followText.textContent = 'Follow';
        this.classList.remove('secondary-button');
        this.classList.add('primary-button');
        followCount.textContent = currentCount - 1;
    } else {
        followText.textContent = 'Following';
        this.classList.remove('primary-button');
        this.classList.add('secondary-button');
        followCount.textContent = currentCount + 1;
    }
    
    isFollowing = !isFollowing;
});