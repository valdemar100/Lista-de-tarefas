let tasklist = document.querySelector("ul#task-list")
let taskinput = document.querySelector("input#task-input")
let taskbutton = document.querySelector("input#task-button")

// essa função não apenas adiciona a tarefa, ela tambem cria os botões de concluir e remover
function adicionartarefa() {
    tasktext = taskinput.value
    let lista = document.createElement("li")
    let textspan = document.createElement("span")
    textspan.innerText = tasktext
    
    let concluir = document.createElement("button")
    concluir.innerText = "Concluir"
    concluir.className = "complete-btn"
    let remover = document.createElement("button")
    
    remover.innerText = "Remover"
    remover.className = "remove-btn"
    
    lista.appendChild(textspan)
    lista.appendChild(concluir)
    lista.appendChild(remover)
    tasklist.appendChild(lista)
}

function GerenciarTarefas(event) {
    if (event.target.classList.contains("remove-btn")) {
        let apagartarefa = event.target.parentElement
        apagartarefa.remove()
    } else if (event.target.classList.contains("complete-btn")) {
            concluirtarefa = event.target.parentElement
            concluirtarefa.classList.toggle("task-completed")
        }
}

tasklist.addEventListener("click", GerenciarTarefas)
taskbutton.addEventListener("click", adicionartarefa)
