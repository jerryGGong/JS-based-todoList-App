// 개별 할목 관리

export default function TodoItem({
                         todo, //
                         selectedId, //선택된 todoId
                         onToggle, // 완료/미완료 처리
                         onDelete, // 삭제 함수
                         onSelect, // 선택 함수
                         onEdit // 수정 함수
    }){
    const li = document.createElement('li')
    const checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.checked = todo.id === selectedId
    checkbox.onclick = () => onSelect(todo.id)

    if(todo.isCompleted){
        checkbox.style.display = 'none'
    }else{
        checkbox.style.display = 'inline-block'
    }


    const input = document.createElement('input')
    input.type = 'text'
    input.value = todo.name
    input.className = 'todo-input-edit'
    input.readOnly = todo.isCompleted || todo.id !== selectedId // 2번째 조건은 체크박스 체크할 경우에만 수정
    input.addEventListener('change', (e) => onEdit(todo.id, e.target.value))
    //input.onChange = (e) => onEdit(todo.id, e.target.value)
    //체크 박스로 선택한 놈만 노출되게
    if(todo.id !== selectedId || todo.isCompleted){
        input.style.display = 'none'

    }else{
        input.style.display = 'inline-block'
    }


    const title = document.createElement('span')
    title.textContent = todo.isCompleted ? todo.name+'(완료)' : todo.name
    //title.style.textDecoration = todo.isCompleted ? 'line-through' : 'none'
    title.style.color = todo.isCompleted ? '#2980b9' : '#000000'
    title.style.fontStyle = todo.isCompleted ? 'italic' : 'normal'
    title.style.cursor = 'pointer'
    title.className = 'todo-item-title'
    title.onclick = () => onToggle(todo.id)

    const delBtn = document.createElement('button')
    delBtn.textContent = '목록 삭제'
    delBtn.onclick = () => onDelete(todo.id)

    li.appendChild(checkbox)
    li.appendChild(input)
    li.appendChild(title)
    li.appendChild(delBtn)

    return li
}
