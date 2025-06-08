import React, { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import FilterBar from './components/FilterBar'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem('todolist-app-todos')
      
      if (savedTodos && savedTodos !== 'undefined' && savedTodos !== 'null') {
        const parsedTodos = JSON.parse(savedTodos)
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos)
        }
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error)
      localStorage.removeItem('todolist-app-todos')
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('todolist-app-todos', JSON.stringify(todos))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }, [todos, isLoaded])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 To-Do List
          </h1>
          <p className="text-gray-600">
            Kelola tugas Anda dengan mudah dan efisien
          </p>        </div>

        <AddTodo onAdd={addTodo} />

        <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <span className="text-gray-600">
                Total: <span className="font-semibold text-gray-800">{todos.length}</span>
              </span>
              <span className="text-blue-600">
                Aktif: <span className="font-semibold">{activeCount}</span>
              </span>
              <span className="text-green-600">
                Selesai: <span className="font-semibold">{completedCount}</span>
              </span>
            </div>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Hapus yang Selesai
              </button>
            )}
          </div>        </div>

        <FilterBar currentFilter={filter} onFilterChange={setFilter} />

        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">
                {filter === 'completed' ? '🎉' : filter === 'active' ? '💪' : '📝'}
              </div>
              <p className="text-gray-500 text-lg">
                {filter === 'completed' 
                  ? 'Belum ada tugas yang selesai'
                  : filter === 'active'
                  ? 'Tidak ada tugas aktif'
                  : 'Belum ada tugas. Tambahkan tugas pertama Anda!'
                }
              </p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))          )}
        </div>

      </div>
    </div>
  )
}

export default App
