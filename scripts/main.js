var rhit = rhit || {};

rhit.main = function () {
    document.querySelector("#randomButton").onclick = (event) => {
        console.log("time to get random ;)");
        rhit.updateColor();
    }
};

rhit.updateColor = function (color) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var objects = document.getElementsByTagName("body");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.backgroundColor = "#" + randomColor;
    }
    objects = document.getElementsByTagName("p");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.color = "#" + randomColor;
    }
    objects = document.getElementsByTagName("a");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.color = "#" + randomColor;
    }
    objects = document.getElementsByTagName("div");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.color = "#" + randomColor;
    }
    objects = document.getElementsByTagName("h1");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.color = "#" + randomColor;
    }
    objects = document.getElementsByTagName("h2");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.color = "#" + randomColor;
    }
    objects = document.getElementsByTagName("h3");
    for (var object of objects) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        object.style.color = "#" + randomColor;
    }
}

rhit.main();