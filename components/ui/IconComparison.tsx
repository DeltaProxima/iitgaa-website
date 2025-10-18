'use client'

import { SunIcon, MoonIcon } from './ThemeIcons'

export default function IconComparison() {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-zinc-800 rounded-lg">
      <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">
        Icon Comparison: Material Icons vs Custom SVG
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Material Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
            Material Icons (Old)
          </h3>
          <div className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <span className="material-icons text-2xl text-gray-500 dark:text-gray-400">
              light_mode
            </span>
            <span className="material-icons text-2xl text-gray-500 dark:text-gray-400">
              dark_mode
            </span>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>• Text-based icons</p>
              <p>• Limited customization</p>
              <p>• External dependency</p>
            </div>
          </div>
        </div>

        {/* Custom SVG Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
            Custom SVG Icons (New)
          </h3>
          <div className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <SunIcon className="w-8 h-8 text-yellow-500" />
            <MoonIcon className="w-8 h-8 text-blue-500" />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>• Vector-based graphics</p>
              <p>• Fully customizable</p>
              <p>• No external dependencies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
          Benefits of Custom SVG Icons:
        </h4>
        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
          <li>• Better performance (no external font loading)</li>
          <li>• Consistent with your brand design</li>
          <li>• Scalable without quality loss</li>
          <li>• Easy to customize colors and sizes</li>
          <li>• Better accessibility with proper SVG attributes</li>
        </ul>
      </div>
    </div>
  )
}

