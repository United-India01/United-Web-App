// Handle like button clicks
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.replace('far', 'fas');
            this.classList.add('text-red-500');
        } else {
            icon.classList.replace('fas', 'far');
            this.classList.remove('text-red-500');
        }
    });
});

// Handle comment button clicks
document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', function() {
        const postId = this.closest('.post-card').dataset.postId;
        window.location.href = `post_detail.html?id=${postId}#comments`;
    });
});

// Handle share button clicks
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function() {
        const postUrl = window.location.href;
        // Create a temporary input to copy the URL
        const input = document.createElement('input');
        input.value = postUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        
        // Show feedback
        alert('Post URL copied to clipboard!');
    });
});

// Handle new post button
document.getElementById('newPostButton')?.addEventListener('click', function() {
    window.location.href = 'upload.html';
});

// Handle navigation icons
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === 'home.html') {
        link.classList.add('text-blue-500');
    }
});