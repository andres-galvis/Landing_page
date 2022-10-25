let skills = [
    {
        title:"HTML5",
        img:'img/img_programas/html.png',
        porcentaje:"",
        ariaValue:"100", 
        anchura:"100%"
    },

    {
        title:"CSS3",
        img:'img/img_programas/css.png',
        porcentaje:"",
        ariaValue:"70",
        anchura:"70%", 
    },

    {
        title:"GIT",
        img:'img/img_programas/git.png',
        porcentaje:"",
        ariaValue:"70",
        anchura:"70%", 
    },

    {
        title:"SASS-SCSS",
        img:'img/img_programas/sass-logo-156.png',
        porcentaje:"",
        ariaValue:"70",
        anchura:"70%", 
    },
    
    {
        title:"Bootstrap",
        img:'img/img_programas/boots.png',
        porcentaje:"",
        ariaValue:"65",
        anchura:"65%", 
    },

    {
        title:"Figma",
        img:'img/img_programas/figma.png',
        porcentaje:"",
        ariaValue:"75",
        anchura:"75%", 
    },

    
    {
        title:"Java",
        img:'img/img_programas/java.png',
        porcentaje:"",
        ariaValue:"68",
        anchura:"68%", 
    },

    {
        title:"MongoDB",
        img:'img/img_programas/mongo.png',
        porcentaje:"",
        ariaValue:"68",
        anchura:"68%", 
    },

    {
        title:"Phyton",
        img:'img/img_programas/python.png',
        porcentaje:"",
        ariaValue:"60",
        anchura:"60%", 
    },

    {
        title:"Blender",
        img:'img/img_programas/blender.png',
        porcentaje:"",
        ariaValue:"60",
        anchura:"60%", 
    },

    {
        title:"Adobe AfterEffects",
        img:'img/img_programas/afterfx.png',
        porcentaje:"",
        ariaValue:"75",
        anchura:"75%", 
    },

    {
        title:"Adobe Photoshop",
        img:'img/img_programas/photoshop.png',
        porcentaje:"",
        ariaValue:"80",
        anchura:"80%", 
    },

    {
        title:"Adobe Premiere Pro",
        img:'img/img_programas/premiere.png',
        porcentaje:"",
        ariaValue:"68",
        anchura:"68%", 
    },

    {
        title:"Adobe Illustrator",
        img:'img/img_programas/illustrator.png',
        porcentaje:"",
        ariaValue:"80",
        anchura:"80%", 
    },

    {
        title:"Adobe Illustrator",
        img:'img/img_programas/illustrator.png',
        porcentaje:"",
        ariaValue:"75",
        anchura:"75%", 
    },
   
]

function renderProductos(arrayProductos) {
    
    const cardsContenedora = document.getElementById("autoSkills")
    cardsContenedora.innerHTML = ''
    
    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += `
        <div class="progress">
        <img src="${elementoDelArray.img}" alt="" title="${elementoDelArray.title}">
        <div class="progress-bar" role="progressbar" style="width:${elementoDelArray.anchura};" aria-valuenow="${elementoDelArray.ariaValue}"
            aria-valuemin="0" aria-valuemax="100">${elementoDelArray.porcentaje}</div>
        </div>  
        `;
    });
}

renderProductos(skills)