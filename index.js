// Add your code here
function submitData(name, email) {
    // Construct the body of the POST request
    const data = {
      name: name,
      email: email
    };
  
    // Send the POST request using fetch
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      // Handle the response
      .then(response => response.json()) // Parse the JSON response body
      .then(json => {
        // Append the new id to the DOM
        const newId = json.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New user ID: ${newId}`;
        document.body.appendChild(idElement);
      })
      // Handle any errors
      .catch(error => {
        // If there's an error, append the error message to the DOM
        const errorMessage = error.message || "An error occurred";
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${errorMessage}`;
        document.body.appendChild(errorElement);
      });
  }
  