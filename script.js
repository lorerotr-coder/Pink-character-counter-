const textarea = document.getElementById("text-input");
const counter = document.getElementById("char-count");

const MAX = 50;

textarea.addEventListener("input", () => {
    let text = textarea.value;

    if (text.length > MAX) {
        text = text.substring(0, MAX);
        textarea.value = text;
    }

    const length = text.length;

    counter.textContent = `Character Count: ${length}/50`;

    if (length === MAX) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
});