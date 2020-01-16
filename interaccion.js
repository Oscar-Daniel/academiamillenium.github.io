const menu = document.querySelector('#menu')
const burgerButton = document.querySelector('#burger-menu')
const costo = document.querySelector('.costo_table')
var titulo_costo = document.querySelector('#costo_titulo')
var mensualidad = document.querySelector('#mensualidad')
const cerrarInfoPrice = document.querySelector('#cerrarInfoPrice')
const pantaBlack = document.querySelector('.pantalla-negra')
const cajaImagenes = document.querySelector('.imagenes')

// Reto: ejercicios propuestos
// const reto1 = document.querySelector('#reto1')
// const $puntajeGustavo = document.querySelector('#puntajeGustavo')
// const btnGustavo = document.querySelector('#btnGustavo')
//     const p1G = document.getElementById('p1G')
//     const p2G = document.getElementById('p2G')
//     const p3G = document.getElementById('p3G')
//         const $respuesta1G = document.getElementById('respuesta1G')
//         const g1 = document.getElementById('g1')
//         const $respuesta2G = document.getElementById('respuesta2G')
//         const g2 = document.getElementById('g2')
//         const $respuesta3G = document.getElementById('respuesta3G')
//         const g3 = document.getElementById('g3')

// const reto2 = document.querySelector('#reto2')
// const $puntajeOscar = document.querySelector('#puntajeOscar')
// const btnOscar = document.querySelector('#btnOscar')
//     const p1O = document.getElementById('p1O')
//     const p2O = document.getElementById('p2O')
//     const p3O = document.getElementById('p3O')
//         const $respuesta1O = document.getElementById('respuesta1O')
//         const o1 = document.getElementById('o1')
//         const $respuesta2O = document.getElementById('respuesta2O')
//         const o2 = document.getElementById('o2')
//         const $respuesta3O = document.getElementById('respuesta3O')
//         const o3 = document.getElementById('o3')

// const reto3 = document.querySelector('#reto3')
// const $puntajeWilder = document.querySelector('#puntajeWilder')
// const btnWilder = document.querySelector('#btnWilder')
//     const p1W = document.getElementById('p1W')
//     const p2W = document.getElementById('p2W')
//     const p3W = document.getElementById('p3W')
//         const $respuesta1W = document.getElementById('respuesta1W')
//         const w1 = document.getElementById('w1')
//         const $respuesta2W = document.getElementById('respuesta2W')
//         const w2 = document.getElementById('w2')
//         const $respuesta3W = document.getElementById('respuesta3W')
//         const w3 = document.getElementById('w3')

// const reto4 = document.querySelector('#reto4')
// const $puntajeBilly = document.querySelector('#puntajeBilly')
// const btnBilly = document.querySelector('#btnBilly')
//     const p1B = document.getElementById('p1B')
//     const p2B = document.getElementById('p2B')
//     const p3B = document.getElementById('p3B')
//         const $respuesta1B = document.getElementById('respuesta1B')
//         const b1 = document.getElementById('b1')
//         const $respuesta2B = document.getElementById('respuesta2B')
//         const b2 = document.getElementById('b2')
//         const $respuesta3B = document.getElementById('respuesta3B')
//         const b3 = document.getElementById('b3')

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
// const toggleExercises = (n) => {
//     switch(n) {
//         case 1:
//             reto1.classList.toggle('most-reto')
//             break;
//         case 2:
//             reto2.classList.toggle('most-reto')
//             break;
//         case 3:
//             reto3.classList.toggle('most-reto')
//             break;
//         case 4:
//             reto4.classList.toggle('most-reto')
//             break;
//     }
// }

// function resultados(n) {
//     let puntaje = 0;
//     switch(n) {
//         case 1:
//             if (p1G.checked) {
//                 g1.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta1G.style.display = 'block'
//             }
//             if (p2G.checked) {
//                 g2.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta2G.style.display = 'block'
//             }
//             if (p3G.checked) {
//                 g3.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta3G.style.display = 'block'
//             }
//             btnGustavo.style.display = 'none'
//             $puntajeGustavo.innerHTML = `Puntaje obtenido: <strong>${puntaje} puntos.</strong>`
//             $puntajeGustavo.style.display = 'block'
//             break;
//         case 2:
//             if (p1O.checked) {
//                 o1.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta1O.style.display = 'block'
//             }
//             if (p2O.checked) {
//                 o2.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta2O.style.display = 'block'
//             }
//             if (p3O.checked) {
//                 o3.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta3O.style.display = 'block'
//             }
//             btnOscar.style.display = 'none'
//             $puntajeOscar.innerHTML = `Puntaje obtenido: <strong>${puntaje} puntos.</strong>`
//             $puntajeOscar.style.display = 'block'
//             break;
//         case 3:
//             if (p1W.checked) {
//                 w1.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta1W.style.display = 'block'
//             }
//             if (p2W.checked) {
//                 w2.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta2W.style.display = 'block'
//             }
//             if (p3W.checked) {
//                 w3.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta3W.style.display = 'block'
//             }
//             btnWilder.style.display = 'none'
//             $puntajeWilder.innerHTML = `Puntaje obtenido: <strong>${puntaje} puntos.</strong>`
//             $puntajeWilder.style.display = 'block'
//             break;
//         case 4:
//             if (p1B.checked) {
//                 b1.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta1B.style.display = 'block'
//             }
//             if (p2B.checked) {
//                 b2.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta2B.style.display = 'block'
//             }
//             if (p3B.checked) {
//                 b3.style.display = 'block'
//                 puntaje++
//             } else {
//                 $respuesta3B.style.display = 'block'
//             }
//             btnBilly.style.display = 'none'
//             $puntajeBilly.innerHTML = `Puntaje obtenido: <strong>${puntaje} puntos.</strong>`
//             $puntajeBilly.style.display = 'block'
//             break;
//     }
// }
                
burgerButton.addEventListener('click', hideShow)
cerrarInfoPrice.addEventListener('click', ocultarInfoPrice)
// btnGustavo.addEventListener('click', ()=> resultados(1))
// btnOscar.addEventListener('click', ()=> resultados(2))
// btnWilder.addEventListener('click', ()=> resultados(3))
// btnBilly.addEventListener('click', ()=> resultados(4))
mostarHero(2)