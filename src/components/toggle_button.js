/* Toggle button on <button> tag: 
HTML: 
<button
class=""
aria-label=""
is="toggle-button"
data-target="#id"
data-sign-open=""
data-sign-close=""
data-sign-active=""
hidden
></button>

CSS: 
button[is='toggle-button'] {
  background: inherit;
  border: none;
  font-size: inherit;
  width: fit-content;
}
button[is='toggle-button']::after {
    content: attr(data-sign-active);
  } 
*/

// JS:
if (typeof document !== "undefined") {
class ToggleButton extends HTMLButtonElement {
  connectedCallback () {
    this.removeAttribute('hidden')
    if (this.getAttribute('aria-expanded') !== 'false') {
      this.setAttribute('aria-expanded', 'false')
      this.target.classList.add('hide')
    }
    this.addEventListener('click', this.toggleClick.bind(this))
  }

  toggleClick () {
    const classList = this.target.classList
    classList.toggle('hide')
    if (classList.contains('hide')) {
      this.setAttribute('aria-expanded', 'false')
      this.dataset.signActive = this.dataset.signOpen
      // toggle 'expanded' buttons inside hidden target
      const nestedToggleButtons = this.target.querySelectorAll(
        `a[is='toggle-button'][aria-expanded='true']`
      )
      nestedToggleButtons.forEach(button => button.toggleClick())
    } else {
      this.setAttribute('aria-expanded', 'true')
      this.dataset.signActive = this.dataset.signClose
    }
  }

  get target () {
    return document.getElementById(this.dataset.target)
  }
}

customElements.define('toggle-button', ToggleButton, { extends: 'button' })
}
