var q = 81
document.addEventListener('keyup', correr);

function correr(event) {
  if (event.keyCode == q) {
    document.querySelector('#jugador')
      .setAttribute('universal-controls', 'movementAcceleration: 150');
  } else {
    document.querySelector('#jugador')
      .setAttribute('universal-controls', '');
  }
}

function pausar() {
  var entity = document.querySelector('[sound]');
  entity.components.sound.pauseSound();
}

function play() {
  var entity = document.querySelector('[sound]');
  entity.components.sound.playSound();
}

// 0 significa nada
// 1 significa muro
// 2 significa jugador
// 3 significa premio
// 4 significa puerta
// 5 significa plataforma
var mapa = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 0, 0, 1, 1, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 7, 0, 0, 0, 6, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 3, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

var TAMANO_PARED = 6
var ALTO_PARED = 17
var muro, premio, puerta, caja, correcto, puerta2
var muros = document.querySelector('#muros')
var cajas = document.querySelector('#caja')
var correctos = document.querySelector('#correcto')
var premios = document.querySelector('#premios')
var puertas = document.querySelector('#puertas')
var puertas2 = document.querySelector('#puertas2')
var scoreEl = document.querySelector('#score')

for (var x = 0; x < mapa.length; x++) {
  for (var y = 0; y < mapa[x].length; y++) {

    var posicion = (x - mapa.length / 2) * TAMANO_PARED + ' ' + 1.5 +
      ' ' + (y - mapa[x].length / 2) * TAMANO_PARED

    if (mapa[x][y] == 0) {
      continue
    } else if (mapa[x][y] == 1) {
      // muro
      muro = document.createElement('a-box')
      muros.appendChild(muro)
      muro.setAttribute('color', '#fff')
      muro.setAttribute('material', 'src:#muro')
      muro.setAttribute('width', TAMANO_PARED)
      muro.setAttribute('depth', TAMANO_PARED)
      muro.setAttribute('height', ALTO_PARED)
      muro.setAttribute('position', posicion)
      muro.setAttribute('static-body', '')
      muro.setAttribute('opacity', 5)
    } else if (mapa[x][y] == 2) {
      // jugador
      document.querySelector('#jugador')
        .setAttribute('position', posicion)
    } else if (mapa[x][y] == 3) {
      // premio
      premio = document.createElement('a-sphere')
      premios.appendChild(premio)
      premio.setAttribute('position', posicion)
      premio.setAttribute('material', 'src:#premio')
      premio.setAttribute('class', 'premio')
      premio.setAttribute('radius', '0.6')
      premio.setAttribute('static-body', '')
      premio.setAttribute('sound', 'src: #sonidoMoneda; on: click; volume:10')
    } else if (mapa[x][y] == 4) {
      //puerta
      puerta = document.createElement('a-box')
      puertas.appendChild(puerta)
      puerta.setAttribute('color', '#ffffff')
      puerta.setAttribute('material', 'src:#puerta')
      puerta.setAttribute('width', TAMANO_PARED)
      puerta.setAttribute('depth', TAMANO_PARED)
      puerta.setAttribute('height', ALTO_PARED)
      puerta.setAttribute('position', posicion)
      puerta.setAttribute('static-body', '')
      puerta.setAttribute('class', 'puerta')

    } else if (mapa[x][y] == 5) {
      //plataforma
      caja = document.createElement('a-box')
      cajas.appendChild(caja)
      caja.setAttribute('color', '#fff')
      caja.setAttribute('material', 'src:#plataforma')
      caja.setAttribute('scale', '3 1 3')
      caja.setAttribute('position', posicion)
      caja.setAttribute('static-body', '')
    } else if (mapa[x][y] == 6) {
      // Correcto
      correcto = document.createElement('a-box')
      correctos.appendChild(correcto)
      correcto.setAttribute('material', 'src:#muro')
      correcto.setAttribute('width', TAMANO_PARED)
      correcto.setAttribute('depth', TAMANO_PARED)
      correcto.setAttribute('height', ALTO_PARED)
      correcto.setAttribute('position', posicion)
    } else if (mapa[x][y] == 7) {
      //puerta
      puerta2 = document.createElement('a-box')
      puertas2.appendChild(puerta2)
      puerta2.setAttribute('color', '#fff')
      puerta2.setAttribute('material', 'src:#puerta')
      puerta2.setAttribute('width', TAMANO_PARED)
      puerta2.setAttribute('depth', TAMANO_PARED)
      puerta2.setAttribute('height', ALTO_PARED)
      puerta2.setAttribute('position', posicion)
      puerta2.setAttribute('static-body', '')
      puerta2.setAttribute('class', 'puerta2')
    }
  }
}

var r = 82

function eliminarMensaje() {
  scoreEl.setAttribute('value', '');
}
function abrir() {
  scoreEl.setAttribute('value', 'Oprime el boton rojo y abre la puerta');
}

function reaparecer(tecla) {
  if (tecla.keyCode == r) {
    if (score == 0) {
      if (tecla.keyCode == r) {
        document.querySelector('#jugador')
          .setAttribute('position', {
            x: -5.823,
            y: 2,
            z: -59.832
          })
      }
    } else {
      scoreEl.setAttribute('value', 'Ya no puedes reaparecer')
      setTimeout(eliminarMensaje, 1000);
    }
  }
}



var premios = Array.from(document.querySelectorAll('.premio'))
var score = 1 //premios.length
scoreEl.setAttribute('value', 'Encuentra ' + score + ' orbes')

premios.forEach(function(premio) {
  premio.addEventListener('click', function() {
    premio.setAttribute('visible', 'false')
    score = score - 1
    if (score >= 0) {
      if (score == 1) {
        scoreEl.setAttribute('value', 'Te falta ' + score + ' orbe')
      } else if (score == 0) {
        scoreEl.setAttribute('value', 've y abre la puerta')
      } else {
        scoreEl.setAttribute('value', 'Te faltan ' + score + ' orbes')
      }
    }
  })
})

var boton = document.querySelector('#boton')
boton.addEventListener('click', function() {
  score = -1
  scoreEl.setAttribute('value', '')
})

var puertas = Array.from(document.querySelectorAll('.puerta'))
puertas.forEach(function(puerta) {
  puerta.addEventListener('click', function() {
    if (score <= 0) {
      scoreEl.setAttribute('value', 'llega a la otra plataforma')
      setTimeout(abrir, 7000)
      setTimeout(eliminarMensaje, 3000)
      puerta.setAttribute('position', '30.143 1.5 48')
      puerta.setAttribute('visible', 'false')
      document.addEventListener('keyup', reaparecer)
      document.querySelector('#jugador').setAttribute('jump-ability', 'maxJumps:3, distance:3')

    }
  })
})

var puertas2 = Array.from(document.querySelectorAll('.puerta2'))
puertas2.forEach(function(puerta2) {
  puerta2.addEventListener('click', function() {
    if (score <= -1) {
      puerta2.setAttribute('position', '30.143 1.5 48')
      puerta2.setAttribute('visible', 'false')
      document.querySelector('#jugador')
        .setAttribute('jump-ability', 'maxJumps:0, distance: 0')
    }
  })
})

function redireccionar(){
  window.location.href = 'creditos.html' ;
}
var boton2 = document.querySelector('#boton2')
boton2.addEventListener('click',function(){
  redireccionar()
})
