var barEle = [];
let delay = 400;
generateBars();

function generateBars(num = 30) {
    clearBox()
    for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * 200) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        barEle.push(value);
        bar.style.height = `${value * 3}px`;
        bar.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)";
        // bar.style.background = "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
        bar.style.border = "1px solid black";
        bar.style.transform = `translateX(${i * 35}px)`;
        bar.classList.add(`barNo${i}`);
        // const valueSpan=document.createElement("span");
        // valueSpan.classList.add("bar-value");
        // valueSpan.textContent=value;
        // bar.appendChild(valueSpan);
        document.getElementById("main").appendChild(bar);

    }
}

function clearBox() {
    let bar = document.querySelector("#main");
    bar.innerHTML = '';
}



//speeed
let delayElement = document.querySelector('#sortSpeed');
delayElement.addEventListener('input', () => {
    delay = 360 - parseInt(delayElement.value);              
});




//  Designed by:- Pritirekha Panda
