let productosGenerales = [
    {
        class:"img1",
        img:'img/img_galeria/whiskey.jpg'
//        src:"https://www.instagram.com/p/CQKLgB7jjQd/",//PENDIENTE
    },
    
    {
        class:"img2",
        img:'img/img_galeria/cooking.jpg'
//        src:"https://www.instagram.com/p/CM2KiBGDmkq/",
    },

    {
        class:"img3",
        img:'img/img_galeria/apple.jpg'
//        src:"https://www.instagram.com/p/CNnHf3FDRlB/",
    },

    {
        class:"img_web",
        img:'img/img_galeria/cecilia_corredor.jpg',
        src:"https://andres-galvis.github.io/cecilia_corredor/",
    },

    {
        class:"img_web2",
        img:'img/img_galeria/home.jpg'
//        src:"https://fegadesign.000webhostapp.com/",
    },

    {
        class:"img4",
        img:'img/img_galeria/carro.jpg'
//        src:"https://www.instagram.com/p/CRCkO7Sj_ZI/",
    },

    {
        class:"img5",
        img:'img/img_galeria/tick.jpg'
//        src:"https://www.instagram.com/p/CUDugEWPfHI/",
    },

    {
        class:"img6",
        img:'img/img_galeria/lego_nave.jpg'
//        src:"https://www.instagram.com/p/CTm6dZLlpKN/",
    },

    {
        class:"img7",
        img:'img/img_galeria/vecine.jpg'
//        src:"https://www.youtube.com/watch?v=J-hJEjmRCls&list=PLZXRDHI3Y9pzk57Q7XeyUA0vO7aJPJxme",
    },

    {
        class:"img8",
        img:'img/img_galeria/pan.jpg'
//        src:"https://www.instagram.com/p/CM2KiBGDmkq/",
    },

    {
        class:"img9",
        img:'img/img_galeria/render_farol.jpg'
//        src:"https://www.instagram.com/fega___/",
    },

    {
        class:"img10",
        img:'img/img_galeria/Render_vino.jpg'
//        src:"https://www.instagram.com/fega___/",
    },

    {
        class:"img11",
        img:'img/img_galeria/flyer_bershka.jpg'
//        src:"",//PENDIENTE
    },

    {
        class:"img12",
        img:'img/img_galeria/bolsa.jpg'
//        src:"",//PENDIENTE
    },

    {
        class:"img12",
        img:'img/img_galeria/3emeliendo.jpg'
//        src:"https://3emeliendo.com/",
    },

    {
        class:"img12",
        img:'img/img_galeria/paloma.jpg'    
    },

    {
        class:"img12",
        img:'img/img_galeria/AMAZON.jpg',  
    },
    
    {
        class:"img12",
        img:'img/img_galeria/BERSHKA.jpg'
    },

    {
        class:"img12",
        img:'img/img_galeria/SPOTIFY.jpg' 
    },

    {
        class:"img12",
        img:'img/img_galeria/KOAJ.jpg' 
    },
    

    
]

function renderProductos(arrayProductos) {
    
    const cardsContenedora = document.getElementById("galeria-container")
    cardsContenedora.innerHTML = ''
    
    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` 
        <div class="${elementoDelArray.class}">
        <a <!--href="${elementoDelArray.src}"target="blank"--><img src="${elementoDelArray.img}" alt=""></a>
    </div>`;
    });
}

renderProductos(productosGenerales)