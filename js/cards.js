let productosGenerales = [
    {
        class:"img1",
        img:'../img/img_galería/whiskey.webp',
        src:"https://www.instagram.com/p/CQKLgB7jjQd/",//PENDIENTE
    },
    
    {
        class:"img2",
        img:'../img/img_galería/cooking.webp',
        src:"https://www.instagram.com/p/CM2KiBGDmkq/",
    },

    {
        class:"img3",
        img:'../img/img_galería/apple.webp',
        src:"https://www.instagram.com/p/CNnHf3FDRlB/",
    },

    {
        class:"img_web",
        img:'../img/img_galería/cecilia_corredor.webp',
        src:"https://andres-galvis.github.io/cecilia_corredor/",
    },

    {
        class:"img_web2",
        img:'../img/img_galería/home.webp',
        src:"https://fegadesign.000webhostapp.com/",
    },

    {
        class:"img4",
        img:'../img/img_galería/carro.webp',
        src:"https://www.instagram.com/p/CRCkO7Sj_ZI/",
    },

    {
        class:"img5",
        img:'../img/img_galería/tick.webp',
        src:"https://www.instagram.com/p/CUDugEWPfHI/",
    },

    {
        class:"img6",
        img:'../img/img_galería/lego_nave.webp',
        src:"https://www.instagram.com/p/CTm6dZLlpKN/",
    },

    {
        class:"img7",
        img:'../img/img_galería/vecine.webp',
        src:"https://www.youtube.com/watch?v=J-hJEjmRCls&list=PLZXRDHI3Y9pzk57Q7XeyUA0vO7aJPJxme",
    },

    {
        class:"img8",
        img:'../img/img_galería/pan.webp',
        src:"https://www.instagram.com/p/CM2KiBGDmkq/",
    },

    {
        class:"img9",
        img:'../img/img_galería/render_farol.webp',
        src:"https://www.instagram.com/fega___/",
    },

    {
        class:"img10",
        img:'../img/img_galería/Render_vino.webp',
        src:"https://www.instagram.com/fega___/",
    },

    {
        class:"img11",
        img:'../img/img_galería/flyer_bershka.jpg',
        src:"",//PENDIENTE
    },

    {
        class:"img12",
        img:'../img/img_galería/bolsa.jpg',
        src:"",//PENDIENTE
    },

    {
        class:"img12",
        img:'../img/img_galería/3emeliendo.png',
        src:"https://3emeliendo.com/",
    },

    {
        class:"img12",
        img:'../img/img_galería/paloma.png',
        src:"https://www.instagram.com/fega___/",
        
    },
    

    
]

function renderProductos(arrayProductos) {
    
    const cardsContenedora = document.getElementById("galeria-container")
    cardsContenedora.innerHTML = ''
    
    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` 
        <div class="${elementoDelArray.class}">
        <a href="${elementoDelArray.src}" target="blank"><img src="${elementoDelArray.img}" alt=""></a>
    </div>`;
    });
}

renderProductos(productosGenerales)