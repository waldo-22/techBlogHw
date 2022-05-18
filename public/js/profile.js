// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#post-title').value.trim();
//   // const needed_funding = document.querySelector('#project-funding').value.trim();
//   const body = document.querySelector('#post-desc').value.trim();

//   if (title && body) {
//     const response = await fetch(`/api/post`, {
//       method: 'POST',
//       body: JSON.stringify({ title, body }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create post');
//     }
//   }
// };

// const updatedFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#post-title').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const body = document.querySelector('#post-desc').value.trim();

  // if (title && body) {
  //   const response = await fetch(`/api/post`, {
  //     method: 'PUT',
  //     body: JSON.stringify({ title, body }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/profile');
  //   } else {
  //     alert('Failed to create post');
  //   }
  // }
// };


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};
document
  .querySelector('.deleteButton')
  .addEventListener('click', delButtonHandler);
