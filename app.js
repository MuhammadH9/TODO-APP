function addTodo() {
    var todoParent = document.getElementById("todoParent")
    var Input = document.getElementById("Input")
    if (Input.value.length < 3) {
        alert("Enter correct todo value")
        return
    }
    var li = document.createElement("li")
    li.innerHTML = Input.value
    var editBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"

    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onClick", "delTodo(this)")
    
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    todoParent.appendChild(li)
    Input.value = ""
}

function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}
function delTodo(ele) {
    console.log("delTodo", ele.parentNode)
    ele.parentNode.remove()
}   