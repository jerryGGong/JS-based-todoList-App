// 전체 완료 및 전체 삭제 기능 버튼
export default function TodoControls({ onClear, onCompleteAll }) {
    const container = document.getElementById('todo-controls')
    // DOM 렌더 순서 엉킴 방지
    if(!container) return

    container.innerHTML ='' //중복 생성 방지

    const completeBtn = document.createElement('button')
    completeBtn.textContent = '전체 완료'
    completeBtn.className = 'complete'
    completeBtn.onclick = onCompleteAll

    const clearBtn = document.createElement('button')
    clearBtn.textContent = '전체 삭제'
    clearBtn.className = 'clear'
    clearBtn.onclick = onClear

    container.appendChild(completeBtn)
    container.appendChild(clearBtn)
}
