
document
    .querySelectorAll('.column')
    .forEach(Column.process)

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
    .forEach(Note.process)



