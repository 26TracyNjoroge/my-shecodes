function free() {
    let name = prompt("What is your Name?");
    let email = prompt("What is your email address?");
    if (name === "") {
      alert("Invalid! Enter your name.")
    } else if( email === "") {
      alert("Invalid! Enter your email.")
    } else {alert(
      "Hello🖐 " +
        name +
        ", Thank you for being interested, We'll be in touch!"
    )
  }

  }

  let bookButton = document.querySelector("button");

  bookButton.addEventListener("click", free);