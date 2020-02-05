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
      /// Votre réponse ici ///
  }
}

customElements.define('user-component', UserComponent);
