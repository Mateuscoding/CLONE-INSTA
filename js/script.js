let check = document.querySelector('#check')
let labelCheck = document.querySelector('#label-check')
const campoLupa = document.getElementById('campoLupa')

check.addEventListener('click', ()=>{

    if(check.checked){
        console.log('on checked')
        campoLupa.style.animationName = 'animationLupa'
        campoLupa.style.display = 'flex'
    }else{
        // animationLupa
        // campoLupa.style.animationDirection = 'reverse'
        // campoLupa.style.transitionDuration = ".5s";
        campoLupa.style.animationName = 'animationLupaReverse'
        
        campoLupa.style.display = 'none'
        // campoLupa.style.marginLeft = '500px';
    }
})


let iconCurtida = document.querySelector('#curtida')
let iconCurtir = document.querySelector('#curtir')


iconCurtir.addEventListener('click', ()=>{

    iconCurtir.classList.toggle('bxs-heart')
    iconCurtida.style.display = 'flex'
    
    setTimeout(()=>{
        iconCurtida.style.display = 'none'
    }, 1000)
})



var margin = 0
let story = document.querySelector('#storys')
let btnStory = document.querySelector('#btnStory')


btnStory.addEventListener('click', ()=>{
    margin-= 100
    story.style.transition = '.5s'
    story.style.marginLeft = margin+'%';
})