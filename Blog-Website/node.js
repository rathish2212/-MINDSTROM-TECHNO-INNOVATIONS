document.getElementById('addPostBtn').addEventListener('click', function() {
    const postText = document.getElementById('postInput').value.trim();
    if (postText) {
        const li = document.createElement('li');
        li.textContent = postText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Mark as Completed';
        completeBtn.className = 'completeBtn';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        li.appendChild(completeBtn);
        document.getElementById('postList').appendChild(li);
        document.getElementById('postInput').value = '';
    }
});
