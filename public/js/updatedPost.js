const updatedFormHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
    const title = document.querySelector('#post-title').value.trim();
    console.log(title);
    const body = document.querySelector('#post-desc').value.trim();
    console.log(body);
    const post_id = parseInt(document.location.pathname.split("/").slice(-2));
    console.log(body);

    console.log(post_id)
    if (title && body && post_id) {
    const response = await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
        'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        console.log(response);
        document.location.replace('/profile');
    } else {
        alert('Failed to add post :(');
    }
    }
};
// document
//     .querySelector('.update-post-form')
//     .addEventListener('submit', updatedFormHandler);

document
    .querySelector('.updatePostButton')
    .addEventListener('click', updatedFormHandler);
