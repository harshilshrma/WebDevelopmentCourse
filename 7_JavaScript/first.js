let modebtn = document.querySelector("#mode");
let currMode = "light";

modebtn.addEventListener("click", () => {
    if (currMode == "light") {
        currMode = "dark";
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        currMode = "light";
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    console.log(currMode);
});  