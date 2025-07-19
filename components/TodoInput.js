// 입력 필드 및 버튼

export default function TodoInput({ onAdd }) {
    const container = document.getElementById('todo-input')

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = '할 일을 입력하세요'
    input.autofocus = true

    const button = document.createElement('button')
    button.textContent = '추가'
    button.style.display = 'none' // 초기 미입력 시 미노출



    const tryAddTodo = () => {
        const value = input.value.trim()
        if(value) {
            onAdd(value)
            input.value = ''
            button.style.display = 'none'
            //setTimeout(()=>input.focus(),0) // 입력 후 바로 포커스 디테일 처리
        }
    }

    // 버튼 클릭 시 추가
    button.onclick = tryAddTodo


    /**
     * input에 입력값 감지 리스너 추가하여 우측 추가 버튼 실시간 노출/미노출 처리
     */
    input.addEventListener('input', (e) => {
        const value = e.target.value.trim()
        button.style.display = value ? 'inline-block': 'none'
    })

    /**
     * 엔터키 누를 경우 추가 되도록 처리
     * onkeypress 디플리케이티드되었으므로 리스너를 통해 keydown 처리
     */
    input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            tryAddTodo()
        }
    })

    container.appendChild(input)
    container.appendChild(button)

    // render단에서 TodoInput() 실행 전에는 input 존재하지 않음
    // defer 를 통해 이벤트 큐
    setTimeout(()=>input.focus(),0)

}

