
let mainBodysQ = document.querySelectorAll('.router_link')
let manuLinksQ = document.querySelectorAll('.links')
console.log(mainBodysQ)

const handleClick = (event)=> {
  console.log(event.target.className)
  mainBodysQ.forEach(item => item.classList.add('dsp_none'))
  if (event.target.className.includes('home-link')){
    document.querySelector('#home-content').classList.remove('dsp_none')
  }
  if (event.target.className.includes('menu-link')){
    document.querySelector('#menu-content').classList.remove('dsp_none')
    console.log('nine nine nine')
  }
  if (event.target.className.includes('about-link')){
    document.querySelector('#about-content').classList.remove('dsp_none')
  }
  if (event.target.className.includes('story-link')){
    document.querySelector('#story-content').classList.remove('dsp_none')
  }
  if (event.target.className.includes('blog-link')){
    document.querySelector('#blog-content').classList.remove('dsp_none')
  }
  if (event.target.className.includes('blog_inner-link')){
    document.querySelector('#blog_inner-content').classList.remove('dsp_none')
  }
  if (event.target.className.includes('conractUS-link')){
    document.querySelector('#contactUS-content').classList.remove('dsp_none')
  }

}
manuLinksQ.forEach(button => {
  button.addEventListener('click', handleClick)
} )

