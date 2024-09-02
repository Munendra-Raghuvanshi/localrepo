let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "c") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "!") {
      k = 1;
      for (i = 1; i <= ; i++) {
        k = k * i;
        
      }
      string= "k"
      document.querySelector("input").valve = string;
    } else if (e.target.innerHTML == "MC") {
      string = "chala ja bhosadike";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
      console.log(string);
    }
  });
});
