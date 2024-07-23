
let elementoDuvida = document.querySelectorAll('.duvida')
let btnParaTopo = document.querySelector('.paraOTop')
let startSection = document.getElementById('inicio');


elementoDuvida.forEach ( (duvida) => {
    duvida.addEventListener('click',() =>{
        duvida.classList.toggle('ativo')
    })
})

window.addEventListener('scroll', () => {
    // Obtém a posição da parte inferior da seção clinica
    let startSectionBottom = startSection.offsetTop + startSection.offsetHeight;

    // Verifica se o scroll atingiu ou ultrapassou a parte inferior da seção clinica
    if (window.scrollY >= startSectionBottom) {
        // Se sim, mostra o botão
        btnParaTopo.style.display = 'block';
    } else {
        // Se não, oculta o botão
        btnParaTopo.style.display = 'none';
    }
});

btnParaTopo.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior:'smooth'});
})

