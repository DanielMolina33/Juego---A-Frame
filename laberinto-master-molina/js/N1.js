function pausar(){
  var entity = document.querySelector('[sound]');
  entity.components.sound.pauseSound();
}

function play(){
  var entity = document.querySelector('[sound]');
  entity.components.sound.playSound();
}

var boton = document.querySelector('#boton');
document.addEventListener('keydown', correr);
function correr(event){
  if(event.key == "q"){
    document.querySelector('#jugador').setAttribute('universal-controls', 'movementAcceleration:160');
    boton.style.backgroundImage = "url('assets/correr.svg')";
  }
}

document.addEventListener('keyup', parar);
function parar(event){
  if(event.key == "q"){
    document.querySelector('#jugador').setAttribute('universal-controls', '');
    boton.style.backgroundImage = "url('assets/caminar.svg')";
  }
}

function cargarPagina(event){
  if(event.key == "p"){
    location.reload();
  }
}

//tiempo
window.addEventListener('load', time);
var time = setInterval(recargar, 1000);

var minutos = 5,
segundos = 59;
function recargar(){
  fondo.setAttribute('visible', 'true');
  tiempo.setAttribute('visible', 'true');
  tiempo.setAttribute('value', 'Tienes ' + minutos +':' + segundos + ' minutos \n para encontrar los diamantes');

  if(minutos == 0 && segundos == 0){
    location.reload();
  } else if(segundos == 0){
    minutos -= 1;
    segundos = 59;
  } else if(segundos <= 9){
    tiempo.setAttribute('value', 'Tienes ' + minutos +':' + 0 + segundos + ' minutos \n para encontrar los diamantes');
    segundos -= 1;
  } else {
    segundos -= 1;
  }
}

function redireccionar(){
  window.location.href = '../laberinto-master-molina/index.html';
}
// 0 significa nada
// 1 significa muro
// 2 significa jugador
// 3 significa premio
// 4 significa muro ancho
// 5 significa muro alto
// 6 significa muro que desaparece y plataforma

var mapa = [
[4,4,4,4,4,4,4,4,4,4,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,5,6,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,1,1,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,1,0,1,3,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0],
[0,1,0,1,3,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0],
[0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,3,1,0],
[0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,3,1,3,1,0],
[0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
[0,1,3,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
[0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,1,0,0,0,0,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,3,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,3,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//DE PRUEBA
// var mapa = [
// 		[4,4,4,4,4,4,4,4,4,4,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
// 		[0,0,0,0,0,0,0,0,0,0,5,6,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 		[0,0,0,0,0,1,1,1,1,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 		[0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,0,0,0,0,0,0,0,0,3,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0],
// 		[0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0],
// 		[0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
// 		[0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
// 		[0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
// 		[0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
// 		[0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
// 		[0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
// 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]
// 	];

var TAMANO_PARED = 5
var ALTO_PARED = 5
var muro, premio
var muros = document.querySelector('#muros')
var premios = document.querySelector('#premios')
var scoreEl = document.querySelector('#score')
var elemento_piso = document.querySelector('#piso');
var posicion_muro_especial = (-70 + ' ' + 7.73 + ' ' + -20);
var muro_especial;
var piso, altura_piso;
var posicion_jugador;
var muro_ancho;
var posicion_muro_ancho, posicion_muro_alto;
var plataforma, posicion_plataforma;


for (var x = 0; x < mapa.length; x++) {
  for (var y = 0; y < mapa[x].length; y++) {

    var posicion = (x - mapa.length/2)*TAMANO_PARED + ' ' + 2.5 +
      ' ' + (y - mapa[x].length/2)*TAMANO_PARED

    if (mapa[x][y] == 0) {
      continue
    } else if(mapa[x][y] == 1) {
      // muro
      muro = document.createElement('a-box')
      muros.appendChild(muro)
      muro.setAttribute('color', '#fff')
      muro.setAttribute('material', 'src: #textura_pared')
      muro.setAttribute('width', TAMANO_PARED)
      muro.setAttribute('depth', TAMANO_PARED)
      muro.setAttribute('height', ALTO_PARED)
      muro.setAttribute('position', posicion)
      muro.setAttribute('static-body', '')

    } else if(mapa[x][y] == 2) {
      // jugador
      posicion_jugador = (x - mapa.length/2)*TAMANO_PARED + ' ' + 2 +
        ' ' + (y - mapa[x].length/2)*TAMANO_PARED
      document.querySelector('#jugador')
        .setAttribute('position', posicion_jugador)

    } else if (mapa[x][y] == 3) {
      // premio
      premio = document.createElement('a-icosahedron')
      premios.appendChild(premio)
      premio.setAttribute('position', posicion)
      premio.setAttribute('class', 'premio')
      premio.setAttribute('material', 'src: #texturaPremio')
      premio.setAttribute('sound', 'src:#efecto_moneda; on: click; volume:6')

    } else if (mapa[x][y] == 4) {
      //muros anchos
      posicion_muro_ancho = ((x - mapa.length/2)*TAMANO_PARED+1.48) + ' ' + 8 +
        ' ' + ((y - mapa[x].length/2)*TAMANO_PARED);
      muro_ancho = document.createElement('a-box');
      muros.appendChild(muro_ancho);
      muro_ancho.setAttribute('color', '#fff')
      muro_ancho.setAttribute('material', 'src: #texturaConcreto')
      muro_ancho.setAttribute('width', '7.8')
      muro_ancho.setAttribute('depth', TAMANO_PARED)
      muro_ancho.setAttribute('height', '16')
      muro_ancho.setAttribute('position', posicion_muro_ancho)
      muro_ancho.setAttribute('static-body', '')

    } else if (mapa[x][y] == 5) {
      //muros altos
      posicion_muro_alto = (x - mapa.length/2)*TAMANO_PARED + ' ' + 8 +
        ' ' + ((y - mapa[x].length/2)*TAMANO_PARED);
      muro_alto = document.createElement('a-box');
      muros.appendChild(muro_alto);
      muro_alto.setAttribute('color', '#fff')
      muro_alto.setAttribute('material', 'src: #texturaConcreto')
      muro_alto.setAttribute('width', TAMANO_PARED)
      muro_alto.setAttribute('depth', TAMANO_PARED)
      muro_alto.setAttribute('height', '16')
      muro_alto.setAttribute('position', posicion_muro_alto)
      muro_alto.setAttribute('static-body', '')

    } else if (mapa[x][y] == 6) {
      //Muro que desaparece
      muro_especial= document.createElement('a-box')
      muros.appendChild(muro_especial)
      muro_especial.setAttribute('color', '#fff')
      muro_especial.setAttribute('material', 'src: #texturaConcreto')
      muro_especial.setAttribute('width', '1')
      muro_especial.setAttribute('depth', TAMANO_PARED)
      muro_especial.setAttribute('height', '5.3')
      muro_especial.setAttribute('position', posicion)
      muro_especial.setAttribute('static-body', '')

      //plataforma
      posicion_plataforma = ((x - mapa.length/2)*TAMANO_PARED-1) + ' ' + 0 +
        ' ' + (y - mapa[x].length/2)*TAMANO_PARED
      plataforma = document.createElement('a-box');
      muros.appendChild(plataforma);
      plataforma.setAttribute('color', 'fff');
      plataforma.setAttribute('id', 'plataforma');
      plataforma.setAttribute('material', 'side: double; src:#texturaConcreto');
      plataforma.setAttribute('width', '2');
      plataforma.setAttribute('depth', '4');
      plataforma.setAttribute('height', '1');
      plataforma.setAttribute('position', posicion_plataforma);
      plataforma.setAttribute('static-body', '');
      plataforma.setAttribute('toggle-velocity', 'axis:y; min:-1.7; max:5.5');
    }
  }
}

//pisos
for(var i = 5.2; i <= 15.6; i += 5.2){
  altura_piso = (0 + ' ' + i + ' ' + 0);
  piso = document.createElement('a-grid');
  elemento_piso.appendChild(piso);
  piso.setAttribute('position', altura_piso);
  piso.setAttribute('static-body', '');
  piso.setAttribute('side', 'double');
  piso.setAttribute('material', 'side: double; src: #texturaPiso');
  piso.setAttribute('width', '139.5');
  piso.setAttribute('height', '150');
}

//Oculta el mapa, el tiempo y cambia los mensajes
var tiempoTotal = 35;
var mapa = document.querySelector('#mapa');
var tiempo = document.querySelector('#tiempo');
var fondo = document.querySelector('#fondoTiempo');
function eliminaYcarga(){
  tiempo.setAttribute('value', 'Espera ' + tiempoTotal + ' segundos \n y recibe las pistas');
  if(tiempoTotal == 0){
    fondo.setAttribute('visible', 'false');
    tiempo.setAttribute('value', 'no alcanzaste a llegar al segundo nivel? \n pulsa "p" para intentarlo \n de nuevo');
    mapa.setAttribute('visible', 'false');
    muroYplataforma();
    setTimeout(mensajeTip, 6000);
    setTimeout(mensajeScore, 12000);
    document.addEventListener('keydown', cargarPagina);
  }else{
    tiempoTotal-= 1;
    setTimeout(eliminaYcarga, 1000);
  }
}

//Crea la plataforma y el muro que desaparece en una posicion diferente
function muroYplataforma(){
  muros.appendChild(muro_especial);
  muro_especial.setAttribute('material', 'src: #texturaConcreto')
  muro_especial.setAttribute('position', {y: 7.73})
  document.querySelector('#textoInicio').setAttribute('position', {y:7.8});
}

//muestra el mensaje tip pasados 6 segundos
function mensajeTip(){
  tiempo.setAttribute('position', {y: 0.60});
  fondo.setAttribute('position', {y:0.60});
  scoreEl.setAttribute('value', 'TIP \n Busca las marcas en los muros');
  time2 = setInterval(recargar2, 1000);
}

//cambia el mensaje del score pasados 6 segundos y hace invisible el tiempo
function mensajeScore(){
  scoreEl.setAttribute('value' , 'encuentra la llave');
}

var premios = Array.from(document.querySelectorAll('.premio'))
var score = premios.length

scoreEl.setAttribute('value', 'Encuentra ' + score + ' diamantes')

premios.forEach(function(premio){
  premio.addEventListener('click', function(){
  premio.setAttribute('visible', 'false')
  score = score - 1
    if(score == 1){
      scoreEl.setAttribute('value', 'Te falta ' + score + ' diamante' + '\n para ganar!')
    } else {
      scoreEl.setAttribute('value', 'Te faltan ' + score + ' diamantes' + '\n para ganar!')
    }

    if (score <= 0) {
      scoreEl.setAttribute('value', 'Ve al inicio \n y pasa al siguiente nivel');
      muros.removeChild(muro_especial);
      eliminaYcarga();
      clearInterval(time);
    }
  })
})
