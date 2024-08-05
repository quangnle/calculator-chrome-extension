function showModal(selectionText) {
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";

    var closeButton = document.createElement("button");
    closeButton.textContent = "x";    
    closeButton.style.padding = "5px 10px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "red";
    closeButton.style.color = "white";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("click", function() {
        document.body.removeChild(modal);
    });

    var input = document.createElement("input");
    input.type = "text";
    input.value = selectionText;
    input.style.marginRight = "10px";
    input.style.padding = "5px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
    input.style.width = "450px";

    var equalsButton = document.createElement("button");
    equalsButton.textContent = "=";
    equalsButton.style.padding = "5px 10px";
    equalsButton.style.border = "none";
    equalsButton.style.backgroundColor = "blue";
    equalsButton.style.color = "white";
    equalsButton.style.cursor = "pointer";

    equalsButton.addEventListener("click", function() {
        try {
            var expr = input.value;
            var result = math.evaluate(expr);
            resultLabel.textContent = "Result = " + result;
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });

    var resultLabel = document.createElement("p");
    resultLabel.style.marginTop = "10px";
    resultLabel.style.fontWeight = "bold";

    modal.appendChild(closeButton);
    modal.appendChild(input);
    modal.appendChild(equalsButton);
    modal.appendChild(resultLabel);

    document.body.appendChild(modal);
}

chrome.storage.sync.get(['expr'], function(v){
    const selected_value = v.expr;
    showModal(selected_value);
})

