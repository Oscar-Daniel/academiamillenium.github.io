const menu = document.querySelector('#menu')
const burgerButton = document.querySelector('#burger-menu')
const costo = document.querySelector('.costo_table')
var titulo_costo = document.querySelector('#costo_titulo')
var mensualidad = document.querySelector('#mensualidad')
const cerrarInfoPrice = document.querySelector('#cerrarInfoPrice')
const pantaBlack = document.querySelector('.pantalla-negra')
const cajaImagenes = document.querySelector('.imagenes')

const hideShow = () => {
    if(menu.classList.contains('is-active')) {
        menu.classList.remove('is-active')
    }
    else {
        menu.classList.add('is-active')
    }
}
const informacionPrecio = (curso) => {
    costo.classList.remove('invisible_t')
    pantaBlack.classList.remove('invisible_t')
    switch(curso) {
        case 1:
            titulo_costo.innerHTML = "Primer Año"
            mensualidad.innerHTML = "70 Soles"
            break;
        case 2:
            titulo_costo.innerHTML = "Segundo Año"
            mensualidad.innerHTML = "70 Soles"
            break;
        case 3:
            titulo_costo.innerHTML = "Tercer Año"
            mensualidad.innerHTML = "70 Soles"
            break;
        case 4:
            titulo_costo.innerHTML = "Preuniversitario"
            mensualidad.innerHTML = "100 Soles"
            break;
    }
}
const ocultarInfoPrice = () =>{
    costo.classList.add('invisible_t')
    pantaBlack.classList.add('invisible_t')
}
const mostarHero = (ops) => {
    switch(ops) {
        case 1:
            cajaImagenes.classList.add('derecha')
            cajaImagenes.classList.remove('izquierda')
            break;
        case 2:
            cajaImagenes.classList.remove('izquierda')
            cajaImagenes.classList.remove('derecha')
            break;
        case 3:
            cajaImagenes.classList.remove('derecha')
            cajaImagenes.classList.add('izquierda')
            break;
    }
}

burgerButton.addEventListener('click', hideShow)
cerrarInfoPrice.addEventListener('click', ocultarInfoPrice)
mostarHero(2)