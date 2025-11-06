'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { iitgaa_logoUrl } from '@/lib/constants'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="relative flex justify-between items-center py-6">
      <Link href="/" className="flex items-center space-x-4">
        <Image
          alt="IIT Guwahati Alumni Association Logo"
          className="h-16 w-24"
          src={iitgaa_logoUrl}
          width={64}
          height={64}
          priority
        />
        <h1 className="font-bold text-text-light dark:text-text-dark">
          <span className="hidden sm:inline md:text-xl text-lg">
            IIT Guwahati Alumni Association
          </span>
          <span className="inline sm:hidden text-lg">
            
          </span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link
          href="/vision-mission"
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          Vision & Mission
        </Link>
        <button
          onClick={() => scrollToSection('events')}
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          Events
        </button>
        <button
          onClick={() => scrollToSection('reports')}
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          Reports
        </button>
        <button
          onClick={() => scrollToSection('gallery')}
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection('team')}
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          Our Team
        </button>
      </nav>

      {/* Theme Toggle & Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        <ThemeToggle size="md" showIcons={true} />
        
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-text-light dark:text-text-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-text-light dark:text-text-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path d="M 4 4 A 1.0001 1.0001 0 1 0 4 6 L 20 6 A 1.0001 1.0001 0 1 0 20 4 L 4 4 z M 4 11 A 1.0001 1.0001 0 1 0 4 13 L 20 13 A 1.0001 1.0001 0 1 0 20 11 L 4 11 z M 4 18 A 1.0001 1.0001 0 1 0 4 20 L 20 20 A 1.0001 1.0001 0 1 0 20 18 L 4 18 z"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-800 shadow-lg md:hidden z-50 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/vision-mission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Vision & Mission
            </Link>
            <button
              onClick={() => scrollToSection('events')}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('reports')}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Reports
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              Our Team
            </button>
            
          </nav>
        </div>
      )}
    </header>
  )
}
