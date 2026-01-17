import { helloAlert } from "/jsmodule.js";

const body = document.querySelector("body");
// body.append("<div><p>Alt clicks:</p><p id='alt-counter'>0</p></div><button type='button' onclick='alternativeCount()'>Click</button>");

// const div = document.createElement("div");
// div.innerHTML = "<p>Alt clicks:</p><p id='alt-counter'>0</p><button type='button' onclick='alternativeCount()'>Click</button>";
// body.append(div);

body.append(Object.assign(
    document.createElement("div"),
    {
        innerHTML: `
        <p>Alt clicks:</p>
        <p id='alt-counter'>0</p>
        <button type='button' onclick='alternativeCount()'>Click</button>
        <button type='button' onclick='hello()'>Hello without import</button>`
    }
))

let alternativeCounter = 0;

function alternativeCount() {
    alternativeCounter++;
    document.querySelector("#alt-counter").textContent = alternativeCounter;
    console.log("alternativeCount");
}

// function will not work without import
function hello() {
    console.log("Calling helloAlert() function");
    helloAlert();
}

// This is needed cause of modules scope functionality
window.alternativeCount = alternativeCount;
window.hello = hello;