function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('dark')

    const img = document.querySelector('.switch button i')

    if(html.classList.contains('dark')) {
        img.classList.add('ph-sun-bold')
        img.classList.remove('ph-moon-stars-bold')
        
      } else {
        img.classList.add('ph-moon-stars-bold')
        img.classList.remove('ph-sun-bold')
      }
}
