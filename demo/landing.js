const listThumb = document.querySelector('.list-thumb')
const thumb = document.querySelector('.right .circle img')
const images = [
  './assets/a_1.png',
  './assets/a_2.png',
  './assets/a_3.png',
  './assets/a_4.png',
]

const removeAllActive = () => {
  let changeThumbBtn = document.querySelectorAll('.list-thumb li')
  changeThumbBtn.forEach((item) => {
    item.classList.remove('active')
  })
}

console.log(listThumb)
const changeThumb = (event) => {
  removeAllActive()
  thumb.src = event.target.dataset.image
  event.target.classList.add('active')
}
images.forEach((item) => {
  let li = document.createElement('li')
  li.setAttribute('data-image', item)
  li.addEventListener('click', changeThumb)
  listThumb.appendChild(li)
})