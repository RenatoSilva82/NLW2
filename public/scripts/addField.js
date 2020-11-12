// Procurar o botão
document.querySelector("#add-time") // Botão "+ Novo Horário"
// Quando cliclar no botão
.addEventListener('click', cloneField)

// Executa uma ação
function cloneField() {
    // Duplica os campos. Que campos?
    // Formulário "Horários disponíveis"
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // Clona .schedule-item com seu conteúdo (true)
    
    // limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //fields[0].value = "" // Limpa os campos
    //fields[1].value = ""

    fields.forEach(field => {
        //para cada elemento em fields, pega o field e limpa seu conteúdo
        field.value= ""
    });

    //Clonar a página: onde?
    // Insere o "".schedule-item" clonado em "#schedule-items"
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
