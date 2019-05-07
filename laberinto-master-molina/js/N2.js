var time2;
var minutos2 = 5,
segundos2 = 59;
function recargar2(){
	var tiempo2 = document.querySelector('#tiempo');
  document.querySelector('#fondoTiempo').setAttribute('visible', 'true');
  tiempo2.setAttribute('visible', 'true');
  tiempo2.setAttribute('value', 'Tienes ' + minutos2 +':' + segundos2 + ' minutos \n para encontrar los diamantes');

  if(minutos2 == 0 && segundos2 == 0){
    location.reload();

  } else if(segundos2 == 0){
    minutos2 -= 1;
    segundos2 = 59;
  } else if(segundos2 <= 9){
    tiempo2.setAttribute('value', 'Tienes ' + minutos2 +':' + 0 + segundos2 + ' minutos \n para encontrar los diamantes');
    segundos2 -= 1;
  } else {
    segundos2 -= 1;
  }
}

/*
1 significa muro
2 significa muro que desaparece del inicio
3 significa premio
4 significa llave
5 muro que se atraviesa
6 puertas
7 significa imagen
*/
var mapa2 = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1],
		[1,6,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1],
		[1,3,1,0,1,3,6,0,1,3,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1],
		[1,1,1,0,1,1,1,0,1,6,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,5,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1],
		[1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,5,0,0,0,0,0,1,4,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,1,0,0,5,3,1,0,1,0,1,3,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,3,0,3,0,0,1],
		[0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,1,0,1,0,0,6,0,6,0,1,0,1,7,0,0,0,1,0,0,0,3,0,0,0,1],
		[0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
		[0,0,0,0,0,1,7,5,0,1,1,0,1,0,5,0,1,0,0,0,0,0,0,0,0,0,0,5,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,3,1,0,1,1,0,1,1,1,1,1,1,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,3,0,0,1,1,1,1,1,1,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,6,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	];

  var TAMANO_PARED2 = 5
  var ALTO_PARED2 = 5
  var muro2, premio2
  var muros2 = document.querySelector('#muros2')
  var premios2 = document.querySelector('#premios2')
  var scoreEl2 = document.querySelector('#score')
	var plataforma2 = document.querySelector('#plataforma');
	var key = document.querySelector('#key');
	var tiempo2 = document.querySelector('#tiempo');
	var fondo2 = document.querySelector('#fondoTiempo');
	var muro_atravesar, posicion_muro_atravesar;
	var muro_especial2;
	var llave;
	var puertas;
	var imagen, posicion_imagen;
	var flechas;

  for (var x = 0; x < mapa2.length; x++) {
    for (var y = 0; y < mapa2[x].length; y++) {

      var posicion2 = (x - mapa2.length/2)*TAMANO_PARED2 + ' ' + 7.73 +
	      ' ' + (y - mapa2[x].length/2)*TAMANO_PARED2

      if (mapa2[x][y] == 0) {
        continue
      } else if(mapa2[x][y] == 1) {
        // muro
        muro2 = document.createElement('a-box')
        muros2.appendChild(muro2)
        muro2.setAttribute('color', '#fff')
        muro2.setAttribute('material', 'src: #textura_pared')
        muro2.setAttribute('width', TAMANO_PARED2)
        muro2.setAttribute('depth', TAMANO_PARED2)
        muro2.setAttribute('height', ALTO_PARED2)
        muro2.setAttribute('position', posicion2)
        muro2.setAttribute('static-body', '')

      }	else if (mapa2[x][y] == 3) {
        // premio
        premio2 = document.createElement('a-icosahedron')
        premios2.appendChild(premio2)
        premio2.setAttribute('position', posicion2)
        premio2.setAttribute('class', 'premio2')
        premio2.setAttribute('material', 'src: #texturaPremio')
        premio2.setAttribute('sound', 'src: #efecto_moneda; on: click; volume:10')

			} else  if (mapa2[x][y] == 4) {
				//llave
				llave = document.createElement('a-image');
				key.appendChild(llave);
				llave.setAttribute('src', '#imagenLlave');
				llave.setAttribute('id', 'llave_id');
				llave.setAttribute('position', posicion2);
				llave.setAttribute('width', '3');
				llave.setAttribute('height', '3');
				llave.setAttribute('sound', 'src: #efecto_moneda; on: click; volume:10');

			} else if (mapa2[x][y] == 5) {
				//muro que se atraviesa
				posicion_muro_atravesar = (x - mapa2.length/2)*TAMANO_PARED2 + ' ' + 7.73 +
	        ' ' + (((y - mapa2[x].length/2)*TAMANO_PARED2)-2.5)
				muro_atravesar = document.createElement('a-plane');
				muros2.appendChild(muro_atravesar);
				muro_atravesar.setAttribute('color', '#fff')
        muro_atravesar.setAttribute('material', 'side: double; src: #texturaMuroQueSePasa')
        muro_atravesar.setAttribute('width', TAMANO_PARED2)
        muro_atravesar.setAttribute('depth', TAMANO_PARED2)
        muro_atravesar.setAttribute('height', ALTO_PARED2)
        muro_atravesar.setAttribute('position', posicion_muro_atravesar)

			} else if (mapa2[x][y] == 6) {
				//puertas
					puertas = document.createElement('a-box');
					muros2.appendChild(puertas);
					puertas.setAttribute('color', '#fff')
					puertas.setAttribute('class', 'puertas_class')
	        puertas.setAttribute('material', 'side: double; src: #texturaPuerta')
	        puertas.setAttribute('width', TAMANO_PARED2)
	        puertas.setAttribute('depth', TAMANO_PARED2)
	        puertas.setAttribute('height', ALTO_PARED2)
	        puertas.setAttribute('static-body', '')
	        puertas.setAttribute('position', posicion2)

			} else if (mapa2[x][y] == 7) {
				//imagen
				posicion_imagen = (x - mapa2.length/2)*TAMANO_PARED2 + ' ' + 7.73 +
		      ' ' + (((y - mapa2[x].length/2)*TAMANO_PARED2)-2.44)
				imagen = document.createElement('a-image');
				muros2.appendChild(imagen);
				imagen.setAttribute('width', TAMANO_PARED2)
				imagen.setAttribute('height', ALTO_PARED2)
				imagen.setAttribute('class', 'img_class')
				imagen.setAttribute('material', 'src: #imagenImpulso')
				imagen.setAttribute('position', posicion_imagen)
			}
    }
  }

//Imagen troll
	var eventoImagen = Array.from(document.querySelectorAll('.img_class'));
		eventoImagen.forEach(function(imagen){
			imagen.addEventListener('click', function(){
				var posicion_jugador2 = (-66.280 + ' ' + 7 + ' ' + -20);
				var jugador2 = document.querySelector('#jugador');
				jugador2.setAttribute('position', posicion_jugador2);
			});
		})

	//selecciona la llave
	var llaveYpremios = document.querySelector('#llave_id');

		llaveYpremios.addEventListener('click', function(){
			llave.setAttribute('visible', 'false');
			time2 = setInterval(recargar2, 1000);

			var eliminaPuertas = Array.from(document.querySelectorAll('.puertas_class'));
			eliminaPuertas.forEach(function(puertas){
				muros2.removeChild(puertas);
			})

			var premios2 = Array.from(document.querySelectorAll('.premio2'))
			var score2 = premios2.length

			scoreEl2.setAttribute('value', "Encuentra " + score2 + " diamantes");

			premios2.forEach(function(premio2){
				premio2.addEventListener('click', function(){
					premio2.setAttribute('visible', 'false')
					score2 = score2 - 1
					if(score2 == 1){
						scoreEl2.setAttribute('value', 'Te falta ' + score2 + ' diamante' + ' para ganar!')
					} else {
						scoreEl2.setAttribute('value', 'Te faltan ' + score2 + ' diamantes' + ' para ganar!')
					}

					if (score2 <= 0) {
						setTimeout(function(){
							scoreEl2.setAttribute('value',  'Al subir, busca el boton');
							document.querySelector('#jugador').setAttribute('sound', 'src:#sonidoDeFondoEfecto; volume:2; autoplay: true; loop: true')
						}, 40000);
						scoreEl2.setAttribute('value', 'Ve al inicio \n y sube la plataforma');
						plataforma.setAttribute('toggle-velocity', 'axis:y; min:4; max:11');
						muros.removeChild(muro_especial);
						clearInterval(time2);
						tiempo2.setAttribute('visible', 'false');
						fondo2.setAttribute('visible', 'false');
					}
				})
			})
		});
