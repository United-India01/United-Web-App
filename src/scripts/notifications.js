// Handle filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-button').forEach(btn => 
            btn.classList.remove('active')
        );
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        filterNotifications(filter);
    });
});

// Filter notifications based on type
function filterNotifications(type) {
    const notifications = document.querySelectorAll('.notification-item');
    notifications.forEach(notification => {
        if (type === 'all' || notification.dataset.type === type) {
            notification.style.display = 'flex';
        } else {
            notification.style.display = 'none';
        }
    });
}

// Mark notification as read
function markAsRead(notificationId) {
    const notification = document.querySelector(`[data-id="${notificationId}"]`);
    if (notification) {
        notification.classList.remove('unread');
        // Here you would typically make an API call to update the server
    }
}

// Handle mark all as read button
document.getElementById('markAllRead')?.addEventListener('click', function() {
    document.querySelectorAll('.notification-item.unread').forEach(notification => {
        notification.classList.remove('unread');
    });
});

// Handle navigation icons
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === 'notifications.html') {
        link.classList.add('text-blue-500');
    }
});