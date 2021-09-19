const collapseButtons = dataGroup => {
  if (typeof document !== 'undefined') {
    const buttonsGroup = document.querySelectorAll(
      `button[data-group=${dataGroup}]`
    )
    buttonsGroup.forEach(button =>
      button.setAttribute('aria-expanded', 'false')
    )
  }
}

export default collapseButtons
