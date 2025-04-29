// Handle like button
document.querySelector('.like-button')?.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const count = this.querySelector('.action-count');
    const currentCount = parseInt(count.textContent);
    
    if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        icon.classList.add('text-red-500');
        count.textContent = currentCount + 1;
    } else {
        icon.classList.replace('fas', 'far');
        icon.classList.remove('text-red-500');
        count.textContent = currentCount - 1;
    }
});

// Handle comment form submission
document.querySelector('.comment-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('.comment-input');
    const comment = input.value.trim();
    
    if (comment) {
        const commentsList = document.querySelector('.comments-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
            <img src="https://via.placeholder.com/40" alt="User avatar" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-author">You</div>
                <div class="comment-text">${comment}</div>
                <div class="comment-time">Just now</div>
                <div class="comment-actions">
                    <span class="comment-action">Like</span>
                    <span class="comment-action">Reply</span>
                </div>
            </div>
        `;
        
        commentsList.insertBefore(newComment, commentsList.firstChild);
        input.value = '';
        
        // Update comment count
        const countEl = document.querySelector('.comments-count');
        const currentCount = parseInt(countEl.textContent);
        countEl.textContent = currentCount + 1;
    }
});

// Handle share button
document.querySelector('.share-button')?.addEventListener('click', function() {
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

// Handle comment actions (like, reply)
document.querySelector('.comments-list')?.addEventListener('click', function(e) {
    if (e.target.classList.contains('comment-action')) {
        const action = e.target.textContent.toLowerCase();
        const commentEl = e.target.closest('.comment-item');
        
        if (action === 'like') {
            e.target.classList.toggle('text-blue-500');
        } else if (action === 'reply') {
            const input = document.querySelector('.comment-input');
            input.focus();
            const author = commentEl.querySelector('.comment-author').textContent;
            input.value = `@${author} `;
        }
    }
});