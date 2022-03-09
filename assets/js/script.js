class Carousel extends HTMLElement {
  constructor (...arg) {
    // return super(...arg)
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const imgContainer = document.createElement('div')
    const btnContainer = document.createElement('div')
    const btnNext = document.createElement('input', {
      value: 'Next',
      type: 'button'
    })
    const btnPrev = document.createElement('button')

    btnContainer.appendChild(btnNext)
    btnContainer.appendChild(btnPrev)

    shadow.appendChild(imgContainer)
    shadow.appendChild(btnContainer)
  }
}

customElements.define('neko-carousel', Carousel)
// const carousel = new Carousel('neko-carousel')