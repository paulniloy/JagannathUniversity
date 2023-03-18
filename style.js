const dark = document.getElementsByClassName('writing')

document.getElementById('color-black-btn').addEventListener('click', ()=>{
    document.getElementById('body').style.background = 'rgb(63,63,63)';
    // document.getElementById('body').style.color = 'white';
    for(let i of dark){
        i.style.color = 'white';
    }
})
document.getElementById('color-white-btn').addEventListener('click', ()=>{
    document.getElementById('body').style.background = 'white';
    document.getElementById('body').style.color = 'black';
    for(let i of dark){
        i.style.color = 'black';
    }
})