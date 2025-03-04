function fnGetUser() {
  var username = document.getElementById("username").value;

  var email = document.getElementById("email").value;

  var phone = document.getElementById("phone").value;

  var radioInputs = document.getElementsByName("gender");
  console.log(radioInputs);

  var gender;

  if (radioInputs[0].checked) {
    gender = "male";
  } else if (radioInputs[1].checked) {
    gender = "female";
  } else {
    gender = "other";
  }

  // console.log(username, email, phone, gender);

  var newuser = {
    name: username,
    email: email,
    phone: phone,
    gender: gender,
  }; //JSON Object

  fetch("http://localhost:8978/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newuser),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert("User Registered");

      console.log(data);
    })
    .catch((error) => {
      alert("Something Went Wrong");
      console.log(error);
    });
}
