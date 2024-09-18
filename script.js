
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);


xhr.onload = function () {
  if (xhr.status === 200) {
    
    const users = JSON.parse(xhr.responseText);

    console.log("List of User Names:");
    users.forEach(user => console.log(user.name));

   
    const output = document.getElementById("output");
    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      output.appendChild(listItem);
    });
  } else {
    console.error("Error fetching data: " + xhr.statusText);
  }
};


xhr.send();
