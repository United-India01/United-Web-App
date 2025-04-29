// Handle file upload preview
const fileInput = document.querySelector('.file-input');
const imagePreview = document.querySelector('.image-preview');
const previewImage = document.querySelector('.preview-image');

fileInput?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Handle remove preview
document.querySelector('.remove-preview')?.addEventListener('click', function() {
    imagePreview.style.display = 'none';
    previewImage.src = '';
    fileInput.value = '';
});

// Handle tags input
const tagsContainer = document.querySelector('.tags-input-container');
const tagsInput = document.querySelector('.tags-input');
let tags = [];

function addTag(tag) {
    if (tag && !tags.includes(tag)) {
        tags.push(tag);
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.innerHTML = `
            ${tag}
            <span class="tag-remove" data-tag="${tag}">&times;</span>
        `;
        tagsContainer.insertBefore(tagElement, tagsInput);
    }
    tagsInput.value = '';
}

tagsInput?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const tag = this.value.trim().replace(/,/g, '');
        if (tag) addTag(tag);
    }
});

// Handle tag removal
tagsContainer?.addEventListener('click', function(e) {
    if (e.target.classList.contains('tag-remove')) {
        const tag = e.target.dataset.tag;
        e.target.parentElement.remove();
        tags = tags.filter(t => t !== tag);
    }
});

// Handle form submission
document.querySelector('.upload-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData();
    formData.append('title', document.querySelector('#title').value);
    formData.append('content', document.querySelector('#content').value);
    formData.append('tags', JSON.stringify(tags));
    if (fileInput.files[0]) {
        formData.append('image', fileInput.files[0]);
    }
    
    // Simulate post submission
    console.log('Submitting post...');
    console.log('Title:', formData.get('title'));
    console.log('Content:', formData.get('content'));
    console.log('Tags:', formData.get('tags'));
    console.log('Image:', formData.get('image'));
    
    // Redirect to home page (in a real app, this would happen after successful API call)
    alert('Post created successfully!');
    window.location.href = 'home.html';
});

// Handle drag and drop
const dropZone = document.querySelector('.file-upload');

dropZone?.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.borderColor = 'var(--link-color)';
    this.style.backgroundColor = 'rgba(106, 106, 255, 0.1)';
});

dropZone?.addEventListener('dragleave', function(e) {
    e.preventDefault();
    this.style.borderColor = 'var(--button-secondary-border)';
    this.style.backgroundColor = 'transparent';
});

dropZone?.addEventListener('drop', function(e) {
    e.preventDefault();
    this.style.borderColor = 'var(--button-secondary-border)';
    this.style.backgroundColor = 'transparent';
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        fileInput.files = e.dataTransfer.files;
        const event = new Event('change');
        fileInput.dispatchEvent(event);
    }
});