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
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 50 50" fill="currentColor">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </Link>
      </div>
      <p className="text-gray-500 dark:text-gray-400">
        © 2025 IIT Guwahati Alumni Association. All Rights Reserved.
      </p>
    </footer>
  )
}
