const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const mais = document.getElementById('mais');
const zero = document.getElementById('zero');
const menos = document.getElementById('menos');
const divisao = document.getElementById('divisao');
const multi = document.getElementById('multi');
const ponto = document.getElementById('ponto');
const igual = document.getElementById('igual');
const visor = document.getElementById('visor');
const apagar = document.getElementById('apagar');
const numeros = [zero, um, dois, tres, quatro, cinco, seis, sete, oito, nove];
const operadores = [mais, menos, divisao, multi, ponto];
const simbolos = ['+', '-', '/', '*', '.'];

numeros.forEach((number, index) => {
  number.addEventListener('click', () => {
    if(visor.value === '0') {
      visor.value = index;
    } else {
      visor.value += index;
    }
  });
});

operadores.forEach((operador, index) => {
  operador.addEventListener('click', () => {
    if(visor.value !== '0') {
      visor.value += simbolos[index];
    }
  });
});

apagar.addEventListener('click', () => {
  if(visor.value.length === 1) {
    visor.value = '0';
  } else{
    visor.value = visor.value.slice(0, -1);
  }
});

igual.addEventListener('click', () => {
  visor.value = eval(visor.value);
  
});
