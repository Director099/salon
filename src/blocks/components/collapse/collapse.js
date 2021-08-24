
const Collapse = () => {
  const titleCollapse = document.querySelectorAll('.js-collapse-click');

  titleCollapse.forEach((elem) => {
    elem.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.height) {
        content.style.height = null;
      } else {
        content.style.height = content.scrollHeight + 'px';
      }
    });
  })
};

export default Collapse;
