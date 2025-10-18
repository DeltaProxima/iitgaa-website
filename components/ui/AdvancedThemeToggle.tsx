'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface AdvancedThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  showIcons?: boolean
  showLabels?: boolean
  className?: string
}

export default function AdvancedThemeToggle({ 
  size = 'md', 
  showIcons = true,
  showLabels = false,
  className = '' 
}: AdvancedThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const sizeClasses = {
    sm: {
      container: 'h-5 w-9',
      thumb: 'h-3 w-3',
      translate: 'translate-x-4',
      icons: 'text-xs',
      labels: 'text-xs'
    },
    md: {
      container: 'h-6 w-11',
      thumb: 'h-4 w-4',
      translate: 'translate-x-6',
      icons: 'text-sm',
      labels: 'text-sm'
    },
    lg: {
      container: 'h-8 w-14',
      thumb: 'h-6 w-6',
      translate: 'translate-x-7',
      icons: 'text-base',
      labels: 'text-base'
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {showIcons && (
        <div className="flex items-center space-x-1">
          <span className={`material-icons ${currentSize.icons} text-gray-500 dark:text-gray-400 transition-colors`}>
            light_mode
          </span>
          {showLabels && (
            <span className={`${currentSize.labels} text-gray-500 dark:text-gray-400 transition-colors`}>
              Light
            </span>
          )}
        </div>
      )}
      
      <button
        onClick={toggleTheme}
        className={`relative inline-flex ${currentSize.container} items-center rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-gray-600 dark:to-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 hover:shadow-lg`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 transition-opacity duration-300" />
        
        {/* Toggle thumb */}
        <span
          className={`${
            theme === 'dark' ? currentSize.translate : 'translate-x-1'
          } inline-block ${currentSize.thumb} transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110`}
        >
          {/* Icon inside thumb */}
          <span className={`material-icons ${currentSize.icons} text-gray-600 dark:text-gray-300 flex items-center justify-center w-full h-full`}>
            {theme === 'dark' ? 'dark_mode' : 'light_mode'}
          </span>
        </span>
      </button>
      
      {showIcons && (
        <div className="flex items-center space-x-1">
          <span className={`material-icons ${currentSize.icons} text-gray-500 dark:text-gray-400 transition-colors`}>
            dark_mode
          </span>
          {showLabels && (
            <span className={`${currentSize.labels} text-gray-500 dark:text-gray-400 transition-colors`}>
              Dark
            </span>
          )}
        </div>
      )}
    </div>
  )
}
