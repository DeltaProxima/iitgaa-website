'use client'

import ThemeToggle from './ThemeToggle'
import AdvancedThemeToggle from './AdvancedThemeToggle'

export default function ThemeToggleDemo() {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-zinc-800 rounded-lg">
      <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">
        Theme Toggle Variations
      </h2>
      
      <div className="space-y-6">
        {/* Basic Theme Toggle */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text-dark">Basic Toggle</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Simple slider with icons</p>
          </div>
          <ThemeToggle size="md" showIcons={true} />
        </div>

        {/* Small Theme Toggle */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text-dark">Small Toggle</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Compact version</p>
          </div>
          <ThemeToggle size="sm" showIcons={true} />
        </div>

        {/* Large Theme Toggle */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text-dark">Large Toggle</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Bigger version for emphasis</p>
          </div>
          <ThemeToggle size="lg" showIcons={true} />
        </div>

        {/* Advanced Theme Toggle */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text-dark">Advanced Toggle</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">With gradients and animations</p>
          </div>
          <AdvancedThemeToggle size="md" showIcons={true} />
        </div>

        {/* Advanced with Labels */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text-dark">With Labels</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Includes text labels</p>
          </div>
          <AdvancedThemeToggle size="md" showIcons={true} showLabels={true} />
        </div>

        {/* No Icons */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text-dark">No Icons</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Clean slider only</p>
          </div>
          <ThemeToggle size="md" showIcons={false} />
        </div>
      </div>
    </div>
  )
}
