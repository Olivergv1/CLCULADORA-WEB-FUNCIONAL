

let display = document.getElementById('display');    //lee el numero puesto en la pantalla

function appendToDisplay(value) {   //funcion append para que se coloquen los numeros a la pantalla 
  if (value === 'x') value = '*';
  if (value === '÷') value = '/';  //es importante remplazar lkos simbolos para uqe se lean bien 
  display.value += value;
}

function clearDisplay() {    //funcion para limpiar la pantalla
  display.value = '';
}

function calculateResult() {  // realiza la operacion y muestra en pantalla
  try {
    display.value = eval(display.value);  // eval() caulcula las expreciones matematicas
  } catch (error) {
    display.value = 'Error coloque valores validos';   //muestra en la pantalla un mensaje de error si se colocan valores incorrectos
  }
}
