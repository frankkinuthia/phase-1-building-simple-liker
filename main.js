// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const errorMessage = document.querySelector("#modal");
errorMessage.classList = "hidden";

const likedHearts = document.querySelectorAll(".like-glyph");

for (let i = 0; i < likedHearts.length; i++) {
  likedHearts[i].addEventListener("click", () => {
    mimicServerCall("fake")
      .then(() => {
        if (likedHearts[i].innerHTML === EMPTY_HEART) {
          likedHearts[i].innerHTML = FULL_HEART;
          likedHearts[i].className = "activated-heart";
        } else {
          likedHearts[i].innerHTML = EMPTY_HEART;
          likedHearts[i].className = "";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
