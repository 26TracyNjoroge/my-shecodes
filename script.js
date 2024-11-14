function free() {
    let name = prompt("What is your Name?");
    let email = prompt("What is your email address?");

    alert(
      "Hello🖐 " +
        name +
        ", Thank you for being interested, We'll be in touch!"
    );
  }

  let bookButton = document.querySelector("button");

  bookButton.addEventListener("click", free);