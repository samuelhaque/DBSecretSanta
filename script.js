  function myFunction() {
    var x, text, text2, mainContent;

    // Get the value of the input field with id="numb"
    x = document.getElementById("email").value;
    text2 = document.getElementById("demo2").value;
    mainContent = document.getElementById("contentMain");
    // If x is Not a Number or less than one or greater than 10
    if (x.includes("@deutschebahn.com")) {
      text = "Ho Ho Ho";
      demo2.style.display = "none";
      mainContent.style.display = "none";
      document.getElementById("demo").innerHTML = text;
    } 
    else {
      text = "Please enter a valid email";
      document.getElementById("demo2").innerHTML = text;
    }

  }