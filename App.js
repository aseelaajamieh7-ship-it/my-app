/* General */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

/* Container */
div {
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

/* Header */
h1 {
  text-align: center;
  color: #333;
}

/* Navbar */
nav {
  text-align: center;
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

/* Inputs */
input, select {
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Buttons */
button {
  padding: 6px 12px;
  margin: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* List */
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  background: #f0f0f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Responsive */
@media (max-width: 600px) {
  div {
    padding: 10px;
  }

  input, button, select {
    width: 100%;
    margin: 5px 0;
  }

  li {
    flex-direction: column;
    align-items: flex-start;
  }
}