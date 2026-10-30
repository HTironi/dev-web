/*A aplicação deverá conter um formulário no qual o usuário informará os seguintes dados:

- **Preço do Álcool (R$ por litro);**
- **Preço da Gasolina (R$ por litro).**

Com base nos valores informados, o sistema deverá realizar o cálculo considerando a regra prática utilizada no Brasil:

> O álcool é mais vantajoso quando seu preço é até **70% do valor da gasolina**.
> 

Assim, a aplicação deverá:

- Calcular a razão entre o preço do álcool e o da gasolina;
- Comparar o resultado com o valor de referência (0,7);
- Informar ao usuário qual combustível é mais vantajoso*/

let gasolina;
let alcool;
function compensa(){

    alcool = Number(document.getElementById("alcool").value);
    gasolina = Number(document.getElementById("gasolina").value);
    
    if(alcool<(gasolina*0.7)){
        document.getElementById("compensa").textContent = "O álcool é mais vantajoso.";
    }
    else if(alcool>(gasolina*0.7)){
        document.getElementById("compensa").textContent = "A gasolina é mais vantajosa.";
    }
    else{
        document.getElementById("compensa").textContent = "Os dados inseridos são invalidos";
    }

}