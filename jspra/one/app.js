fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => showData(json));

const showData = (data) => {
  let UserContainer = document.getElementById("list");
  let list = "";
  data.forEach((element) => {
    list =
      list +
      `
     <li> His/Her  name is ${element.name} and He/she lives in ${element.address.city} </li>`;
  });
  UserContainer.innerHTML = list;
  displayData(data);
};

let displayData = (data) => {
  let divContainer = document.getElementById("second-container");
  let secondContainer = "";
  data.forEach((element) => {
    secondContainer =
      secondContainer +
      `
        <h1>${element.name}</h1>
        <p>${element.email}</p>
        `;
  });
  divContainer.innerHTML = secondContainer;
};
