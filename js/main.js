let result = document.querySelector('p')
let btn = document.querySelector('.btn')
let kg = document.querySelector('.poids')
let mtr = document.querySelector('.taille')
function imc (poids, taille){
    let bmi = calc(poids, taille);
    if (bmi < 18.5){
        result.innerHTML = "Insuffisance pondérale"
    } else if ((bmi >= 18.5) && (bmi < 25)) {
        result.innerHTML = "Corpulence normale"
    } else if ((bmi >= 25) && (bmi < 30)) {
        result.innerHTML = "Surpoids"
    } else if ((bmi >= 30) && (bmi < 35)) {
        result.innerHTML = "Obésité modérée"
    } else if ((bmi >= 35) && (bmi < 40)) {
        result.innerHTML = "Obésité sévère"
    } else {
        result.innerHTML = "Obésité morbide ou massive"
    }
}

function calc(num1, num2) {
    return Math.round(parseInt(num1/Math.pow(num2, 2)));
}

btn.addEventListener ('click', function (){
    imc (kg.value, mtr.value)
})
document.addEventListener('keypress', function(e){
    if (e.key === "Enter"){
        imc (kg.value, mtr.value)  
    }
    
})