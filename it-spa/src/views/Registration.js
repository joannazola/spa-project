import "./../it-spa.scss";
import { ButtonRegistration } from "../common/ButtonRegistration";

const { io } = require("socket.io-client");
var socket = io.connect("http://localhost:4000");

export function Registration() {
  const registrationSection = document.createElement("section");
  registrationSection.innerHTML = `
  <div class= "login-container">
  <div class ="login-info"> Nie masz jeszcze konta? Zarejestruj się!</div>
  <div class = "login-description-log">
  <input type="text" placeholder="Nazwa użytkownika" id="userNameReg" />
  <input type="password" placeholder="Hasło" id="passwordReg" />
  </div>
  <div></div>
  </div>

  `;

  const message = "Rejestracja";

  const RegistrationButton = ButtonRegistration({
    text: "Zarejestruj",
    callback: () => {
      let message = {
        username: document.getElementById("userNameReg").value,
        password: document.getElementById("passwordReg").value,
      };

      fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.map((users) => {
            if (message.username === users.username) {
              alert("Nazwa użytkownika jest juz zajęta!");
              socket.emit("message", "error");
            } else if (message.username != users.username) {
              socket.emit("read", message);
            }
          });
        });
    },
  });

  registrationSection.append(RegistrationButton);

  return registrationSection;
}
