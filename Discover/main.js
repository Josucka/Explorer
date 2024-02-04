function toggleMode(){
    const html = document.documentElement
    // troca do style de dark pra light
    html.classList.toggle("light")
    
    //pegando a tag img
    const img = document.querySelector("#profile img")
    //substituir a imagem 
    if(html.classList.contains("light")){
            //adicionando o light mode ao click no switch
        img.setAttribute("scr", "https://picsum.photos/200")
    }else{
        img.setAttribute("src", "https://picsum.photos/200")
    }   
}