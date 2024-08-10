const input = document.querySelector("#inputbox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            try {
                expression = math.evaluate(expression);
                input.value = expression;
            } catch (error) {
                input.value = "Error";
            }
        } else if (value === "AC") {
            expression = "";
            input.value = expression;
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
