/*A aplicação deverá conter um formulário no qual o usuário informará os seguintes dados:

- **Renda Bruta Mensal (R$);**
- **Valor do Empréstimo (R$);**
- **Prazo para pagamento (em meses).**

Com base nos dados informados, o sistema deverá calcular o **valor estimado da parcela mensal**, considerando a aplicação de uma taxa de juros.

Para esta atividade, considere que a taxa de juros será de **2% ao ano para cada ano de prazo do empréstimo**. Ou seja, o total de juros deverá ser proporcional ao tempo informado (convertendo os meses em anos), sendo aplicado sobre o valor do empréstimo antes da divisão das parcelas.

Após o cálculo do valor total com juros, o sistema deverá dividir esse valor pelo número de meses para obter o valor da parcela mensal.

Além do cálculo, a aplicação deverá realizar uma **análise da capacidade de pagamento**, considerando que o valor da parcela não deve ultrapassar **30% da renda bruta mensal** do usuário. A partir dessa verificação, o sistema deverá apresentar um feedback indicando:

- Se o empréstimo está dentro de uma condição considerada adequada; ou
- Se há risco de comprometimento da renda.*/
let bruto;
let valor;
let prazoMeses;
let valorAnos = 0;
let valorMeses;
let capacidade;
let prazoAnos = prazoMeses / 12
function calculo(submit) {
    event.preventDefault();
    let bruto = Number(document.getElementById("bruto").value);
    let valor = Number(document.getElementById("valor").value);
    let prazoMeses = Number(document.getElementById("prazo").value);

    valorAnos += valor
    for (let a = 0; prazoAnos > a; a++) {
        valorAnos = valorAnos * 1.02;
    }
    valorMeses = valorAnos / 12;

    if (valorMeses >= bruto * 0.3) {
        capacidade = false;
        document.getElementById("permissao").textContent = "Possivel comprometimento de renda"
    }
    else {
        capacidade = true;
        document.getElementById("permissao").textContent = ""

    }
    document.getElementById("resposta").textContent = `O valor das parcelas seria  R$ ${valorMeses.toFixed(2)} por mês`

}