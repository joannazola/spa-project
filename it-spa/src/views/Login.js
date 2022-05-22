import { ButtonLogin } from "../common/ButtonLogin";
import axios from "axios";

export function Login() {
  const login = document.createElement("section");

  if (localStorage.getItem("pass") == "ok") {
    login.innerHTML = `
    <div class= "login-container">
    <div class ="login-info">Jesteś zalogowany jako</div>
    <div class = "login-picture">&nbsp</div>
    <div class = "login-description">Admin</div>
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

      async function response() {
        const res = await axios("http://localhost:3000/users");
        if (
          res.data[0].username == document.getElementById("userName").value &&
          res.data[0].password == document.getElementById("password").value
        ) {
          localStorage.setItem("pass", "ok");
          console.log(res.data[0]);
        }
      }
      response();
    },
  });

  const LogoutButton = ButtonLogin({
    text: "Wyloguj",
    callback: () => {
      localStorage.removeItem("pass");
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
