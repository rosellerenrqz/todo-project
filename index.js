//Alert function
const alert = document.querySelector(".alert-hidden");
const closeBtn = document.querySelector(".bx-x");
const msg = document.querySelector(".message");

function alertFunc(message) {
  alertFunc(message);

  if (alert.classList.contains("alert-hidden")) {
    alert.classList.remove("alert-hidden");
  } else {
    alert.classList.add("alert-hidden");
  }

  setTimeout(() => {
    alert.classList.add("alert-hidden");
  }, 5000);

  closeBtn.addEventListener("click", () => {
    alert.classList.add("alert-hidden");
  });

  function alertFunc(message) {
    return (msg.textContent = message);
  }
}

//User Landing Page
const form = document.querySelector("form");
const input = document.querySelector("#input");
const userGreeting = document.querySelector("#user-greeting");
const loadingGif = document.querySelector("img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const password = "Roseller";

  if (inputValue.trim() !== "Roseller") {
    alertFunc("Error! Input a name to proceed in Todo List.");
  } else {
    loadingGif.style.display = "block";
    document.querySelector(".landing-page-hidden").style.display = "none";
    setTimeout(() => {
      loadingGif.style.display = "none";

      userGreeting.innerHTML = `Hi, ${inputValue.toUpperCase()}! Here is your Todo List`;

      // document.querySelector(".alert-hidden").style.display = "none";
      alert.classList.add("alert-hidden");
      document.querySelector(".main-container-hidden").style.display = "block";
    }, 3000);
  }

  input.value = "";
});

//Todo List Page
const inputTodo = document.querySelector("#add-todo");
const addBtn = document.querySelector("#add-btn");
const listedItems = document.querySelector("#list-items-container");

addBtn.addEventListener("click", () => {
  const inputValue = inputTodo.value;

  console.log(inputValue.length);
  console.log(inputValue);
  if (inputValue.trim() === "") {
    alertFunc("Error! Input a task in the space provided.");
    inputTodo.value = "";
  }
  // else if (inputValue !== 8) {
  //   alertFunc("Error! Input atleast 8 or more characters");
  //   inputTodo.value = "";
  // }
  else {
    const list = document.createElement("li");
    list.setAttribute("id", "listed-items");

    list.innerHTML = `${inputValue.toUpperCase()} <i class="bx bx-trash"></i>`;
    listedItems.append(list);
    inputTodo.value = "";

    const deleteIcon = list.querySelector(".bx-trash");
    deleteIcon.addEventListener("click", () => {
      list.remove();
    });
  }
});

//Exit Button From Todo List to Landing Page
const exitBtn = document.querySelector("#exit-btn");

exitBtn.addEventListener("click", () => {
  document.querySelector(".landing-page-hidden").style.display = "flex";
  document.querySelector(".main-container-hidden").style.display = "none";
});
