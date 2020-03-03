let noteIdCounter = 8
let colomnIdCounter = 4
let draggedNote = null //элемент, который перетаскиваем

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

    noteElement.addEventListener('dragstart', dragstart_noteHandler)
    noteElement.addEventListener('dragend', dragend_noteHandler)
    noteElement.addEventListener('dragenter', dragenter_noteHandler)
    noteElement.addEventListener('dragover', dragover_noteHandler)
    noteElement.addEventListener('dragleave', dragleave_noteHandler)
    noteElement.addEventListener('drop', drop_noteHandler)
}

function dragstart_noteHandler (event) {
    // console.log('dragstart', event, this)
    draggedNote = this
    this.classList.add('dragged')
}
function dragend_noteHandler (event) {
    // console.log('dragend', event, this)
    draggedNote = null
    this.classList.remove('dragged')
}
function dragenter_noteHandler (event) {
    if (this === draggedNote) { return }
    console.log('dragenter', event, this)
}
function dragover_noteHandler (event) {
    if (this === draggedNote) { return }
    console.log('dragover', event, this)
}
function dragleave_noteHandler (event) {
    if (this === draggedNote) { return }
    console.log('dragleave', event, this)
}
function drop_noteHandler (event) {
    if (this === draggedNote) { return }
    console.log('drop', event, this)
}