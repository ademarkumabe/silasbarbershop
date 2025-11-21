//Dom Document Model 
/*abre a fecha menu quando clicar no icone menu e x*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}



/*quando clicar em um item do item do menu*/
/*querySelectorAll - pesquisa por todos os seletor a frente */

const links = document.querySelectorAll('nav ul li a')
for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show') 
    })
}




/*Mudar o header da pagina quando der scroll*/

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

    if (window.scrollY >= navHeight){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }

}





//testimonials slider carousel swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel:true ,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView:3,
            setWrapperSize:true
        }
    }
})






/*ScrollReveal - mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '14px',
    duration: 650,
    reset: true
})

scrollReveal.reveal(`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
`,
{interval :25})


/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){

    if(window.scrollY >= 460) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/*menu ativo conforme a seção visivel na pagina*/
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) *4

    for( const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

/*When Scroll*/
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activeMenuAtCurrentSection()
})



const imageGallery = document.getElementById("imageGallery");
const images = imageGallery.getElementsByTagName("img");
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const offsetX = -currentIndex * 100;
  imageGallery.style.transform = `translateX(${offsetX}%)`;
}

// Avance automaticamente a cada 3 segundos (3000 milissegundos)
setInterval(nextImage, 3000);

