import React from 'react'

const FilterBar = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Semua', icon: '📋' },
    { key: 'active', label: 'Aktif', icon: '⏳' },
    { key: 'completed', label: 'Selesai', icon: '✅' }
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
      <div className="flex justify-center">
        <div className="flex bg-gray-100 rounded-lg p-1">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentFilter === filter.key
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterBar
