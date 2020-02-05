export class UserComponent extends HTMLElement {
  
  get onBirthDateChange() {
    return this._onBirthDateChange;
  }

  set onBirthDateChange(fn) {
    this._onBirthDateChange = fn;
  }

  // Question 1
  /// Votre réponse ici ///

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    const txt = `<template>
        <div style="display: flex; margin-bottom: 20px">
            <div class="firstname" style="width: 130px"></div>
            <div class="lastname" style="width: 230px"></div>
            <div class="birthdate" style="width: 130px"></div>
            <button>Add year</button>
        </div>
    </template>`;

    const template = new DOMParser().parseFromString(txt, 'text/html').querySelector('template');
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this._onBirthDateChange = function() {};

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      const newBirthDate = this.addYear(this.getAttribute('birthdate'));
      this.setAttribute('birthdate', newBirthDate);
      this.onBirthDateChange(new Date(newBirthDate));
    });
  }

  addYear(currentBirthDate) {
    const currentYear = currentBirthDate.substr(0, 4);
    const currentDayAndMonth = currentBirthDate.substr(4);
    const newBirthDate = `${1 * currentYear + 1}${currentDayAndMonth}`;
    return newBirthDate;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
      switch(name) {
        case 'firstname':
          this.shadowRoot.querySelector('.firstname').innerText = newValue;
          break;
        case 'lastname':
          this.shadowRoot.querySelector('.lastname').innerText = newValue;
          break;
        case 'birthdate':
          this.shadowRoot.querySelector('.birthdate').innerText = newValue;
          break;
      }
  }
}

customElements.define('user-component', UserComponent);
