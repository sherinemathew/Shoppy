const url = "http://localhost:3000/items";

//asynchronus function to get to get JSON document from the
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
