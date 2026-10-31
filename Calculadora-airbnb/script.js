/*- Funcionalidades
    - Há um incremento de 20% no preço da diária por hospede adicional até o limite de 4 hóspedes
    - Os valores devem ser atualizados ao se escolher uma data de checkout ou se modificar o número de usuários
    - O valor da taxa de limpeza é fixo, a taxa de serviço do Airbnb é de 15% sobre o preço das diárias
    - Habilite o campo cupom de desconto o cupom tem o padrão OFF + quanto de desconto o cliente irá receber. Ex: OFF15, OFF40, OFF10
    - Utilize no lugar do campo quantidade de diárias um campo date para o dia da entrada e um campo date para o dia da saída*/
const cupons = ['OFF10', 'OFF20', 'OFF25', 'OFF40', 'OFF50' ];
const noite = 620;
let precoTempo
let checkIn;
let checkOut;
let tempo;
let total;
let taxaLimpeza = 120;
let taxaBnb;

function calcularNoite () {
    total = 0;
    event.preventDefault();
    checkIn = new Date(document.getElementById("in").value);
    checkOut = new Date(document.getElementById("out").value);
    tempo = (checkOut - checkIn)/86400000;
    if(tempo<=0){
        document.getElementById("noite").textContent = "Datas inseridas invalidas."
        return;
    }
    precoTempo = noite*tempo
    document.getElementById("noite").textContent = "R$620x"+ tempo + "Noites:" 
    document.getElementById("noitePreco").textContent = "R$ " + precoTempo

    document.getElementById("limpeza").textContent = "Taxa de Limpeza:"
    document.getElementById("limpezaPreco").textContent = "R$ " + taxaLimpeza;

    taxaBnb = precoTempo*0.15
    document.getElementById("servico").textContent = "Taxa de Serviço do Airbnb:"
    document.getElementById("servicoPreco").textContent = "R$ " + taxaBnb
    
    total = precoTempo+taxaBnb+taxaLimpeza
    document.getElementById("total").textContent = "Total sem impostos:"
    document.getElementById("totalPreco").textContent = "R$ " + total


    



    


}

