// 완료/전체 표기
export default function TodoStats({ todos }) {
    const container = document.getElementById('todo-stats')
    if(!container) return

    // todos가 없으면 섹션 자체를 숨김
    container.style.display = todos.length === 0 ? 'none' : 'block'

    // todos가 있을 때만 동작 (렌더링)
    if (todos.length === 0) {
        container.innerHTML = '' // 안 해도 되지만 안전하게 초기화
        return
    }

    const completed = todos.filter(todo => todo.isCompleted).length

    // 전체 완료 %표기
    const total = todos.length
    const percent = total === 0 ? 0: Math.round((completed / total) * 100)

    let color = '#999'
    if (percent > 75) color = '#059669'      // 진한 민트초록 ✅
    else if (percent > 50) color = '#0d6efd' // 부트스트랩 블루 ✅
    else if (percent > 25) color = '#fd7e14' // 오렌지 ✅
    else color = '#dc3545'                  // 붉은색 ✅

    container.innerHTML = `
      <p style="color: ${color}; font-weight: 500;">
    완료: ${completed} / 전체: ${total} (<strong style="font-weight: 700">${percent}%</strong>)
  </p>
  `
}
