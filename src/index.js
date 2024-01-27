document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  const select = form.querySelector('select')
  const sortBtn = document.createElement('button')
  selection(select)
  sortting(sortBtn)

  form.addEventListener('submit', e => {
    e.preventDefault()
    buildTodo(e.target.children[1].value, select)
    form.reset()
  })

  // sortBtn.addEventListener('click', e => {
  //   console.log(list.getElementsByTagName('li'))
  // })

});

const buildTodo = (todo, el)=> {  
  const li = document.createElement('li')
  li.textContent = `${todo} `
  const options = document.querySelectorAll('option')
  el.addEventListener('click', e => {
    for(let i = 0; i < options.length; i++) {
      li.value = options[i].textContent
      console.log(li.value)
    }
  })
  // for(let i = 0; i < options.length; i++) {
  //   options[i].addEventListener('click', e => console.log(e.target))
  // }
  const btn = document.createElement('button')
  btn.addEventListener('click', e => e.target.parentNode.remove())
  btn.innerText = 'X'
  li.appendChild(btn)
  document.querySelector('#list').appendChild(li)
}

const selection = (s) => {
  const priorities = { high: 'Red', meddium: 'Yellow', low: 'Green' }
  for(const key in priorities) {
    const option = document.createElement('option')
    option.innerHTML = key 
    option.style.color = `${priorities[key]}` 
    s.appendChild(option)    
  }
}

const sortting = (sortBtn) => {
  const list = document.querySelector('#list')  
  sortBtn.textContent = 'SORT TASKS'  
  document.querySelector('#main-content').appendChild(sortBtn)
}
