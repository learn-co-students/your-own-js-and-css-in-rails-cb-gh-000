function hideWhenClicked() {
  const element = document.getElementById('hide_this')
  element.addEventListener('click', function(e){this.style.display = 'none'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  hideWhenClicked()
});
