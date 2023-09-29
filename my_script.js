
function convert() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").innerHTML = fahrenheit;
  }
  
  const button = document.getElementById("convert");
  button.addEventListener("click", convert);