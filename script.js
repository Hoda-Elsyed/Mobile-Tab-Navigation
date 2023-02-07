  const navElements = document.querySelectorAll('.nav div')
  const imgDivs = document.querySelectorAll('.screen div')

  navElements.forEach((navElement) =>{
    navElement.addEventListener('click', ()=>{
        const navElementData = navElement.getAttribute('data-nav')
   
        clearActive(navElements)
        navElement.classList.add('active')
        imgDivs.forEach(div =>{
            if(div.id== navElementData){
                div.classList.add('show')
            }else{
                div.classList.remove('show')
            }
            
        })
       
    })
  })

  function clearActive(listOfDivs){
    listOfDivs.forEach(div => div.classList.remove('active'))
  }
