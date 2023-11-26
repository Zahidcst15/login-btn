const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login_link');
const registerlink = document.querySelector('.register_link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.close_icon');

registerlink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
})

loginlink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
})