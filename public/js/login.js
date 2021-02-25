$(document).ready(function () {
  $("form.login").on("submit", function (event) {
    event.preventDefault();
    let userEmail = $(".userEmail").val();
    let userPwd = $(".userPassword").val();

    //verify the user
    $.ajax({
      method: "POST",
      url: "/api/login",
      data: {
        email: userEmail,
        password: userPwd,
      },
    })
      .then(function () {
        console.log("data sent!");
        window.location.replace("/index");
      })
      .catch((err) => {
        event.preventDefault();
        $(".login__error__message")
          .removeClass("is-hidden")
          .addClass("is-inline");
        function hideMessage() {
          $(".login__error__message")
            .removeClass("is-inline")
            .addClass("is-hidden");
        }
        window.setTimeout(hideMessage, 5000);
        console.log(err);
      });
  });
});
