// if on contact page
if (window.location.href.includes("contact")) {
  // get the DOM needed for POSTING
  let submitButton = document.querySelector(".btn-seconday.form-button");
  let textBox = document.querySelector("textarea");
  let emailField = document.querySelector(".form-control.email-input");
  let nameField = document.querySelector(".form-control.name-input");

  // function to clear input fields
  function clearFields() {
    textBox.value = "";
    emailField.value = "";
    nameField.value = "";
    alert("Message has been sent!");
  }

  // set placeholder text
  textBox.placeholder =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // set callback for GET request
  submitButton.addEventListener("click", function(event) {
    // new AJAX request
    var req = new XMLHttpRequest();
    // url to send POST
    let url =
      "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";
    // submit a POST request
    req.open("POST", url, true);
    // set header for request
    req.setRequestHeader("Content-Type", "application/json");
    // once data is received
    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        console.log(req);
        clearFields();
      }
    });
    // send over data
    req.send(
      JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        message: textBox.value
      })
    );
    // prevent page from refreshing
    event.preventDefault();
  });
}
