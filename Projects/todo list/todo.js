let todoList = [
  {
    item: "Buy Milk",
    dueDate: "6/16/2025",
  },
  {
    item: "Go to College",
    dueDate: "6/16/2025",
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");

  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  //console.log(todoElement);

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    //let item = todoList[i].item;
    //let dueDate = todoList[i].dueDate;

    // destructing object
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class ="btn-delete" onClick="todoList.splice(${i}, 1); displayItems()">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

/* function displayItems() {
  let displayElement = document.querySelector("#todo-items");

  displayElement.innerText = ""; // Clears the text inside the element (reset it).
  for (let i = 0; i < todoList.length; i++) {
    displayElement.innerText = todoList.join("\n");

    displayElement.innerText = todoList
      .map((item, index) => `${index + 1}. ${item}`)
      .join("\n");

    displayElement.innerText = displayElement.innerText + "\n" + todoList[i];
  }
}
 */
