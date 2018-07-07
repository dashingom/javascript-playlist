var books = document.querySelector("#book-list");
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = addForm.querySelector("input[type=text]").value;
  console.log(value);
});


