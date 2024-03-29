async function loginFormHandler(event) {
  event.preventDefault();
  console.log("button clicked")

  const username = document.querySelector('#exampleInputUsername1').value.trim();
  const password = document.querySelector('#exampleInputPassword1').value.trim();

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
}

document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);