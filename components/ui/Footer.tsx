import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        
        <Link 
          href="https://x.com/iitgaa" 
          className="text-gray-500 dark:text-gray-400 hover:text-tertiary transition-colors"
          aria-label="Twitter"
        >
          <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </Link>
        <Link 
          href="https://www.linkedin.com/company/iitgaa" 
          className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path clipRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.225-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.336 9.763H6.34v-8.59H3.669v8.59zM17.668 1H6.34C4.486 1 3 2.486 3 4.332v15.336C3 21.514 4.486 23 6.34 23h11.328c1.854 0 3.332-1.486 3.332-3.332V4.332C21 2.486 19.522 1 17.668 1z" fillRule="evenodd"></path>
          </svg>
        </Link>
      </div>
      <p className="text-gray-500 dark:text-gray-400">
        © 2025 IIT Guwahati Alumni Association. All Rights Reserved.
      </p>
    </footer>
  )
}
