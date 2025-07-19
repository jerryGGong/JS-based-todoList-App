/**
 *
 * @param $container
 * @param data
 * @constructor
 * 리스트 랜더링 및 리스트 항목 클릭 이벤트
 */

import TodoItem from './TodoItem.js'

export default function TodoList({ todos, selectedId, onToggle, onDelete, onSelect, onEdit }) {
  const container = document.getElementById('todo-list')
  container.innerHTML = ''

  if (todos.length === 0) {
    const emptyMsg = document.createElement('p')
    emptyMsg.textContent = '등록된 TODO List가 없습니다.'
    emptyMsg.style.color = '#888'
    emptyMsg.style.textAlign = 'center'
    emptyMsg.style.margin = '20px 0'
    container.appendChild(emptyMsg)
    return
  }

  const ul = document.createElement('ul')
  todos.forEach(todo => {
    const li = TodoItem({ todo, selectedId, onToggle, onDelete, onSelect, onEdit })
    ul.appendChild(li)
  })

  container.appendChild(ul)
}
