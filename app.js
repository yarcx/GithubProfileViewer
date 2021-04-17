const user = document.getElementById("searchUser");
const githubUser = new Github;
const ui = new Ui;


user.addEventListener("keyup", function getUser(e) {
  const UserName = e.target.value
  if (UserName !== "") {
    githubUser
      .getUsers(UserName)
      .then((user) => {
        if (user.profile.type === "User") {
          ui.ShowUser(user.profile);
          ui.ShowRepo(user.repo)
        } else {
          ui.ShowAlert("User not found", "alert alert-danger");
        }
      })
  } else {
    // show Alert
    ui.ShowAlert("input cant be empty", "alert alert-danger");
    ui.cleanUptheProfile()
  }
});

