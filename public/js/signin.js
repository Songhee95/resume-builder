$(document).ready(function () {
  let emailStatus = false;
  let passwordStatus = false;

  $("form.signIn").on("submit", function (event) {
    event.preventDefault();
    const userName = $(".userName").val();
    const phoneNumber = $(".phoneNumber").val();
    const userEmail = $(".userEmail").val();
    const userPassword = $(".userPassword").val();
    userSignIn(userName, userPassword, userEmail, phoneNumber);
    $(".userName").val("");
    $(".phoneNumber").val("");
    $(".userEmail").val("");
    $(".userPassword").val("");
  });
  function userSignIn(userName, userPassword, userEmail, phoneNumber) {
    $.post("/api/signin", {
      userName: userName,
      password: userPassword,
      email: userEmail,
      phone: phoneNumber,
    })
      .then(function (data) {
        console.log(data);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  $(".userEmail").change(function () {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.value
      )
    ) {
      $(".email__check__icon").css("color", "green");
      $(".userEmail").css("border", "1px solid green");
    } else {
      $(".email__check__icon").css("color", "red");
      $(".userEmail").css("border", "1px solid red");
    }
  });

  $(".userPassword").change(function () {
    if (this.value.length < 8) {
      $(".password__check__icon").css("color", "red");
      $(".userPassword").css("border", "1px solid red");
    } else {
      $(".password__check__icon").css("color", "green");
      $(".userPassword").css("border", "1px solid green");
    }
  });
});
