const todoButton = document.querySelector('.todo__input--button')

todoButton.addEventListener('click', () => {
  const subtitle = document.querySelector('#subtitle').value
  const descr = document.querySelector('#descr').value

  const todoItem = document.createElement('div')
  todoItem.className = 'todo__task'

  const todoDescr = document.createElement('div')
  todoDescr.className = 'todo__task--descr'

  const todoOptions = document.createElement('div')
  todoOptions.className = 'todo__task--options'

  const buttonCheck = document.createElement('button')
  const buttonDelete = document.createElement('button')
  buttonCheck.setAttribute('type', 'button')
  buttonDelete.setAttribute('type', 'button')
  buttonCheck.className = 'todo__checkmark--btn'
  buttonDelete.className = 'todo__delete--btn'

  const imgCheck = document.createElement('img')
  const imgDelete = document.createElement('img')

  imgCheck.src = 'complete.svg'
  imgDelete.src = 'delete.svg'

  buttonCheck.append(imgCheck)
  buttonDelete.append(imgDelete)

  todoDescr.innerHTML = `
  <p>${subtitle}</p>
  <span>${descr}</span>
  `
  if (subtitle === '') return

  document.querySelector('.todo__content').prepend(todoItem)
  todoItem.append(todoDescr)
  todoItem.append(todoOptions)
  todoOptions.append(buttonCheck)
  todoOptions.append(buttonDelete)
  todoDelete(buttonDelete, todoItem)
  todoComplete(buttonCheck, todoItem)
})

function todoDelete(taskDelete, todoTask) {
  taskDelete.addEventListener('click', () => {
    todoTask.remove()
  })
}

function todoComplete(taskComplete, todoTask) {
  taskComplete.addEventListener('click', () => {
    todoTask.style.backgroundColor = '#76BA99'
    todoTask.children[0].children[0].style.textDecoration = 'line-through'
    setTimeout(() => {
      todoTask.remove()
    }, 2000)
  })
}
// todoTask.remove()
