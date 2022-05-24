import { ButtonLogin } from "../common/ButtonLogin";
import axios from "axios";

export function Login() {
  const login = document.createElement("section");

  if (localStorage.getItem("pass") == "ok") {
    login.innerHTML = `
    <div class= "login-container">
    <div class ="login-info">Jesteś zalogowany</div>
    <div class = "login-picture">&nbsp</div>
    <div class = "login-description"></div>
    <div></div>
    </div>

    `;
  } else {
    login.innerHTML = `
    <div class= "login-container">
    <div class ="login-info">Logowanie</div>
    <div class = "login-description-log">
    <input type="text" placeholder="Nazwa użytkownika" id="userName" />
    <input type="password" placeholder="Hasło" id="password" />
    </div>
    <div></div>
    </div>

    `;
  }

  const LoginButton = ButtonLogin({
    text: "Zaloguj",
    callback: () => {
      console.log(
        document.getElementById("userName").value,
        document.getElementById("password").value
      );

      fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((data) => {
          let table = [];
          console.log(data);
          data.map((users) => {
            if (
              document.getElementById("userName").value === users.username &&
              document.getElementById("password").value === users.password
            ) {
              table.push("1");
            }
          });
          if (table.length === 0) {
            alert("Nieprawidłowe dane logowania");
          } else if (table.length == 1) {
            alert("Pomyślenie zalogowano!");
            localStorage.setItem("pass", "ok");
            window.location.reload();
          }
        });
    },
  });

  const LogoutButton = ButtonLogin({
    text: "Wyloguj",
    callback: () => {
      localStorage.removeItem("pass");
      alert("Pomyślenie wylogowano!");
      window.location.reload();
    },
  });

  if (localStorage.getItem("pass") == "ok") {
    login.append(LogoutButton);
  } else {
    login.append(LoginButton);
  }
  return login;
}
