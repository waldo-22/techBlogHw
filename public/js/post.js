const postHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const body = document.querySelector('#post-desc').value.trim();

    if (title && body) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
};
document
    .querySelector('.new-post-form')
    .addEventListener('submit', postHandler);