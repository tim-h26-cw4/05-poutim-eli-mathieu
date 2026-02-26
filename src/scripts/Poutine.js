export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.js-type');
    this.selectedType = '';
    this.init();
  }
  init() {
    console.log(this.element);
    console.log('*');
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selecteType.bind(this));
    }
  }
  selecteType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
      event.currentTarget.classList.add('is-active');
      this.selectedType = event.currentTarget.innerText;
    }
    this.updatePhoto.bind(this)();
  }
  updatePhoto() {
    console.log('allo');
    const img = this.element.querySelector('.poutine__image');

    img.src = `./assets/images/${this.selectedType}.png`;

    //this.element.classList.add('is-active');
  }
}
