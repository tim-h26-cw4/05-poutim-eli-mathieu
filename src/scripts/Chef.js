import Poutine from './Poutine.js';
export default class Chef {
  constructor(elements) {
    this.elements = elements;
    this.poutines = this.elements.querySelectorAll('.poutine');
    this.container = [];

    this.init();
  }
  init() {
    for (let i = 0; i < this.poutines.length; i++) {
      const element = this.poutines[i];
      const instance = new Poutine(element);
      this.container.push(instance);
      console.log('test2');
    }
    const btnOrder = this.elements.querySelector('.button-secondary');
    btnOrder.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {
    const active = this.elements.querySelectorAll('.is-active');
    this.elements.querySelector('.js-container').innerHTML = '';
    console.log(this.container.length);
    const paragraphe = document.createElement('p');
    paragraphe.innerText = `Nombre total de poutine(s) : ${active.length}`;
    this.elements.querySelector('.js-container').appendChild(paragraphe);
  }
}
