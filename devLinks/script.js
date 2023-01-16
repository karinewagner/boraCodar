function toggleMode() {
  const html = document.documentElement
  
  html.classList.toggle('light')

  const img = document.querySelector('.profile img')

  if(html.classList.contains('light')) {
    /* setAttribute serve para adicionar, ajustar, modificar um atributo*/
    img.setAttribute('src', 'https://github.com/karinewagner.png')
  } else {
    img.setAttribute('src', 'https://github.com/karinewagner.png')
  }
}