document.addEventListener("DOMContentLoaded", function() {
    var data = [25, 15, 30, 30]; // Değerlerinizi burada tanımlayın
    var chartContainer = document.getElementById("chartContainer");
    drawChart(chartContainer, data);
});

function drawChart(container, data) {
    clearChart(container);
    var total = data.reduce((a, b) => a + b, 0);
    var startAngle = 0;
    var colors = ["#3498db", "#e67e22", "#2ecc71", "#e74c3c"];
    for (var i = 0; i < data.length; i++) {
        var sliceAngle = 360 * data[i] / total;
        drawSlice(container, "slice" + (i + 1), startAngle, sliceAngle, colors[i]);
        startAngle += sliceAngle;
    }
}

function drawSlice(container, sliceClass, startAngle, sliceAngle, color) {
    var element = document.createElement("div");
    element.className = "slice " + sliceClass;
    if (sliceAngle <= 180) {
        element.style.clip = "rect(auto, auto, auto, auto)";
    } else {
        element.style.transform = "rotate(180deg)";
    }
    element.style.transform += " rotate(" + startAngle + "deg)";
    element.style.backgroundColor = color;
    container.appendChild(element);
}

function clearChart(container) {
    container.innerHTML = "";
}

