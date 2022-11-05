import data from '../data.json' assert{type:'json'};
// console.log(data);

let chartBarContainer = document.querySelector(".chart__bars-container");

let values = [];

;

//dibujo las barras y demas elementos
data.forEach(element => {
    values.push(element.amount);
    chartBarContainer.innerHTML += `
        <div class="chart__bar">
          <div class="chart__bar--label">$${element.amount}</div>
          <div class="chart__bar--day">${element.day}</div>
        </div>`;
       
    
});
console.log(values);
let maxHeightPx = 150;
let maxValue = Math.max(...values);
console.log(maxValue);



// mostrar el amount por pantalla
let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];




bars.forEach((bar) => {
    let newValue = parseFloat(bar.childNodes[1].innerText.slice(1));
    let actualValueInPx = (newValue * maxHeightPx) / maxValue;
    // console.log(parseFloat(bar.childNodes[1].innerText.slice(1)));
    
    //aca tambien puedo cambiar los estilos de la barra ( height), porq estoy trabajando especificamente con las barras
    bar.style.height = `${actualValueInPx}px`;
    //pintar de Cyan la barra con mayor tamaño
    if (newValue == maxValue) {
        bar.style.backgroundColor = "hsl(186, 34%, 60%)";
    }


    bar.addEventListener("mouseover", (event) => {
        // console.log(event.target.childNodes[1]);
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "block";
    });
    bar.addEventListener("mouseout", (event) => {
        // console.log(event.target.childNodes[1]);
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "none";
    });
});


