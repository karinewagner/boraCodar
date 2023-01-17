let isExplorer = true

function changeCard(event) {
  const card = event.currentTarget

  const bgImg = isExplorer ? 'ignite' : 'explorer'
  card.style.backgroundImage = `url(./assets/bg-${bgImg}.svg)`

  isExplorer = !isExplorer
}
