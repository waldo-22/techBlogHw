const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
    const description = document.querySelector('#comment-desc').value.trim();
    console.log(description);
    const post_id = document.querySelector('input[name="post-id"]').value;


    console.log(post_id)
    if (description && post_id) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ description, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create comment');
        }
    }
};

// document
//     .querySelector('.update-post-form')
//     .addEventListener('submit', updatedFormHandler);

document
    .querySelector('.addedCommentButton')
    .addEventListener('click', commentFormHandler);