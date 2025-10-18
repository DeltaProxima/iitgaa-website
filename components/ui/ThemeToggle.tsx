'use client'
import { SunIcon, MoonIcon } from './ThemeIcons'

import { useTheme } from 'next-themes'

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  showIcons?: boolean
  className?: string
}

export default function ThemeToggle({ 
  size = 'md', 
  showIcons = true, 
  className = '' 
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const sizeClasses = {
    sm: {
      container: 'h-5 w-9',
      thumb: 'h-3 w-3',
      translate: 'translate-x-4',
      icons: 'text-xs'
    },
    md: {
      container: 'h-6 w-11',
      thumb: 'h-4 w-4',
      translate: 'translate-x-6',
      icons: 'text-sm'
    },
    lg: {
      container: 'h-8 w-14',
      thumb: 'h-6 w-6',
      translate: 'translate-x-7',
      icons: 'text-base'
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showIcons && (
        <span className={`material-icons ${currentSize.icons} text-gray-500 dark:text-gray-400`}>
          <SunIcon className="w-4 h-4" />
        </span>
      )}
      
      <button
        onClick={toggleTheme}
        className={`relative inline-flex ${currentSize.container} items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900`}
        aria-label="Toggle theme"
      >
        <span
          className={`${
            theme === 'dark' ? currentSize.translate : 'translate-x-1'
          } inline-block ${currentSize.thumb} transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out`}
        />
      </button>
      
      {showIcons && (
        <span className={`material-icons ${currentSize.icons} text-gray-500 dark:text-gray-400`}>
          <MoonIcon className="w-4 h-4" />
        </span>
      )}
    </div>
  )
}
