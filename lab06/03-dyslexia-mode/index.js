/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  const Pressed = window.localStorage.getItem('dyslexic') === 'true';
  if (Pressed) {
    document.body.classList.add("dys-mark");
  }
  const toggle = document.querySelector('#dyslexia-toggle');
  //second press
  if (Pressed){
    toggle.setAttribute('pressed', 'true');
  }

  toggle.addEventListener('click', headEvent);

};


const headEvent = (ev) => {
  let pressed = ev.currentTarget.getAttribute('pressed') === 'true'
  document.body.classList.toggle("dys-mark");
  ev.currentTarget.setAttribute('pressed', String(!pressed));
  window.localStorage.setItem("dyslexic", String(!pressed))

}

initPage();