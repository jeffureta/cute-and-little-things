//declare variables
const button = document.querySelector("button");
//declare function
function greetingPrompt() {
    const userName = prompt("What is your name");
    if (userName.toLowerCase() === "rina") {
        alert(`I love you Babe!`);
    } else {
        alert("not Rina");
    }
}
//event listener
button.addEventListener("click", greetingPrompt);