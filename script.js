let noteIdCounter = 8
let colomnIdCounter = 4

document
    .querySelectorAll('.column')
    .forEach(columnProcess)

document
    .querySelector('[data-action-addColumn]')
    .addEventListener('click', (event) => {
        const columnElem = document.createElement('div')
        columnElem.setAttribute('draggable', 'true')
        columnElem.setAttribute('data-column-id', colomnIdCounter)
        columnElem.classList.add('column')

        columnElem.innerHTML = `
        <p class="column-header">В плане</p>
        <div data-notes></div>
        <p class="column-footer">
            <span data-action-addNote class="action">+ Добавить карточку</span>
        </p>
        `

        colomnIdCounter++
        document.querySelector('.columns').append(columnElem)
        columnProcess(columnElem)
    })

document
    .querySelectorAll('.note')
    .forEach(noteProcess)

function columnProcess (colomnElem) {
    const spanAction_addNode = colomnElem.querySelector('[data-action-addNote')
    spanAction_addNode.addEventListener('click', () => {
        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        noteElement.setAttribute('draggable', 'true')
        noteElement.setAttribute('data-note-id', noteIdCounter)
        noteIdCounter++

        colomnElem.querySelector('[data-notes').append(noteElement)
        noteProcess(noteElement)
    })

    const headerElem = colomnElem.querySelector('.column-header')
    headerElem.addEventListener('dblclick', () => {
        headerElem.setAttribute('contenteditable', 'true')
        headerElem.focus()
    })

    headerElem.addEventListener('blur', () => {
        headerElem.removeAttribute('contenteditable', 'true')
    })
}
function noteProcess (noteElement) {
    noteElement.addEventListener('dblclick', event => {
        noteElement.setAttribute('contenteditable', 'true')
        noteElement.focus()
    })

    noteElement.addEventListener('blur', (event) => {
        noteElement.removeAttribute('contenteditable', 'true')
    })
}

