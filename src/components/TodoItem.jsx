import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 transition-all duration-200 hover:shadow-md ${
      todo.completed ? 'opacity-75' : ''
    }`}>      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {todo.completed && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}        </button>

        <div className="flex-1">
          <p className={`text-gray-800 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}>
            {todo.text}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Dibuat: {formatDate(todo.createdAt)}
          </p>        </div>

        <button
          onClick={() => onDelete(todo.id)}
          className="flex-shrink-0 btn-danger text-sm"
          title="Hapus tugas"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default TodoItem
