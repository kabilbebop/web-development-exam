export class UserComponent extends HTMLElement {

  static get observedAttributes() {
    return ['name', 'city', 'age'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    const txt = `<template>
        <div style="display: flex; margin-bottom: 20px">
            <div class="name" style="width: 130px"></div>
            <div class="city" style="width: 230px"></div>
            <div class="age"  style="width: 130px"></div>
        </div>
    </template>`;
    const template = new DOMParser().parseFromString(txt, 'text/html').querySelector('template');
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, _oldValue, newValue) {
      // Question 1
      switch(name) {
          case 'name':
            this.shadowRoot.querySelector(`.name`).innerText = newValue;
            break;
          case 'city':
            this.shadowRoot.querySelector(`.city`).innerText = newValue;
            break;
          case 'age':
            this.shadowRoot.querySelector(`.age`).innerText = newValue;
            break;
          default:

      }
  }
}

customElements.define('user-component', UserComponent);
