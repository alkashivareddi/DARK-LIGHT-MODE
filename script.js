const fulldarkmodecheckbox = document.querySelector('#full-dark-mode')
const containeddarkmodecheckbox= document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')



const isfulldarkmode = JSON.parse(localStorage.getItem('fulldarkmodecheckbox'))
const iscontainerdarkmode = JSON.parse(localStorage.getItem('containeddarkmodecheckbox'))

if(isfulldarkmode){
    fulldarkmodecheckbox.checked=true
}
if(iscontainerdarkmode){
    containeddarkmodecheckbox.checked=true
}

changefulldarkmode()
changecontaineddarkmode()



fulldarkmodecheckbox.addEventListener('change',()=>{
    changefulldarkmode()
    changecontaineddarkmode()

})

function changefulldarkmode(){
    if(fulldarkmodecheckbox.checked ){
        document.body.classList.add('dark')
        localStorage.setItem('fulldarkmodecheckbox',true)
        }else{
        document.body.classList.remove('dark')
        localStorage.setItem('fulldarkmodecheckbox',false)
        
        }
}    

function changecontaineddarkmode(){
    if(containeddarkmodecheckbox.checked){
        container.classList.add('dark')
        localStorage.setItem('containeddarkmodecheckbox',true)
    }else{
        container.classList.remove('dark')
        localStorage.setItem('containeddarkmodecheckbox',false)
    }
}