const Column = {
    colomnIdCounter: 4,
    process (colomnElem) {
        const spanAction_addNode = colomnElem.querySelector('[data-action-addNote')
        spanAction_addNode.addEventListener('click', () => {
            const noteElement = document.createElement('div')
            noteElement.classList.add('note')
            noteElement.setAttribute('draggable', 'true')
            noteElement.setAttribute('data-note-id', Note.IdCounter)
            Note.IdCounter++
    
            colomnElem.querySelector('[data-notes').append(noteElement)
            Note.process(noteElement)
    
            noteElement.setAttribute('contenteditable', 'true')
            noteElement.focus()
        })
    
        const headerElem = colomnElem.querySelector('.column-header')
        headerElem.addEventListener('dblclick', () => {
            headerElem.setAttribute('contenteditable', 'true')
            headerElem.focus()
        })
    
        headerElem.addEventListener('blur', () => {
            headerElem.removeAttribute('contenteditable', 'true')
        })
    
        colomnElem.addEventListener('dragover', event => {
            event.preventDefault()
        })
    
        colomnElem.addEventListener('drop', event => {
            if (Note.dragged) {
                return colomnElem.querySelector('[data-notes]').append(Note.dragged)
            }
        })
    }
}