const form = document.getElementById('message-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const data = {
    name: name,
    message: message
  };

  fetch('https://api.staticman.net/v3/entry/github/BraeGamer/Pineapple-Chat/master/comments', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    // Do something with the response data, such as displaying a success message
  })
  .catch(error => {
    // Handle errors
  });
});

fetch('https://api.staticman.net/v3/entry/github/BraeGamer/Pineapple-Chat/master/comments')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    // Do something with the message data, such as displaying it on the page
  })
  .catch(error => {
    // Handle errors
  });
