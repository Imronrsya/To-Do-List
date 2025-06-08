import React, { useState } from 'react'

const AddTodo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAdd(inputValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tambahkan tugas baru..."
            className="input-field flex-1"
            autoFocus
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            ➕ Tambah
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddTodo
