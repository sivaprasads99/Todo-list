let TodoInput = document.getElementById("Todo-input")
let addBtn = document.getElementById("add-btn")
let TodoItemsList = document.getElementById("Todo-items-list")
let arr = []

//add items//
  function btnClick(){
    let jjj = TodoInput.value
    let li = document.createElement('li')
    let spanEl = document.createElement('span')
    li.appendChild(spanEl)
    spanEl.innerText = jjj
    // li.innerText = jjj
    li.style.cssText = 'animation-name: slideIn;'
    TodoItemsList.appendChild(li)
    TodoInput.value = ""
    TodoInput.focus()
    arr.push(li.innerText)
    console.log(arr)
    //trash button//
    let trashButton = document.createElement('i')
    trashButton.classList.add("fas","fa-trash")
    li.appendChild(trashButton)
    //edit button
    let editBtn = document.createElement('i')
    editBtn.classList.add('fas','fa-edit')
    li.appendChild(editBtn)
}

// delete list function
  function deleteBtn(event){
    if(event.target.classList[1] === "fa-trash"){
      let parentLi = event.target.parentElement
      parentLi.classList.add("slideOut")
      parentLi.addEventListener("transitionend",function(){
        parentLi.remove()
      })
    }
  }

  //edit button
  function editItems(event){
    let targetValue = event.target.classList[1]
    console.log(targetValue)
    if(targetValue === 'fa-edit'){
      let editedText = prompt("edit text below")
      let item = event.target.parentElement
      let spanText= item.querySelector('span')   
      spanText.innerText =  editedText
  }
  }
addBtn.addEventListener('click',btnClick)
TodoItemsList.addEventListener("click",deleteBtn)
TodoItemsList.addEventListener("click",editItems)

localStorage.setItem("name","sivaprasad")
// let name = localStorage.getItem("name")
// console.log(name)