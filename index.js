document.querySelector('.cross').style.display='none'
document.querySelector(".humberg").addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebargo');
    if(document.querySelector('.slidebar').classList.contains('slidebargo')){
        document.querySelector('.hum').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.hum').style.display='none'
        setTimeout(()=>{ document.querySelector('.cross').style.display='inline'

        },350)
        // document.querySelector('.cross').style.display='inline'
    }
})