# IIT Guwahati Alumni Association Website

A modern, responsive website for the IIT Guwahati Alumni Association built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 📱 **Fully Responsive** design for mobile, tablet, and desktop
- 🌙 **Dark Mode** support with beautiful slider toggle and smooth transitions
- ⚡ **Optimized Performance** with Next.js Image optimization
- 🎨 **Custom Tailwind Theme** matching the original design
- 📝 **TypeScript** for type safety
- 🧩 **Component-based Architecture** for maintainability
- ♿ **Accessibility** features with proper ARIA labels
- 🎛️ **Multiple Theme Toggle Variations** (basic, advanced, with labels)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Header.tsx       # Navigation header with mobile menu
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── EventCard.tsx    # Event card component
│   │   ├── ReportItem.tsx   # Report item component
│   │   ├── TeamMember.tsx   # Team member component
│   │   ├── GalleryGrid.tsx  # Photo gallery grid
│   │   ├── ThemeToggle.tsx  # Basic theme toggle slider
│   │   ├── AdvancedThemeToggle.tsx # Advanced theme toggle with animations
│   │   ├── ThemeIcons.tsx   # Custom SVG icons for sun and moon
│   │   └── ThemeToggleDemo.tsx # Demo component showcasing variations
│   ├── sections/            # Page section components
│   │   ├── HeroSection.tsx  # Hero/landing section
│   │   ├── EventsSection.tsx # Events showcase
│   │   ├── ReportsSection.tsx # Event reports
│   │   ├── GallerySection.tsx # Photo gallery
│   │   └── TeamSection.tsx  # Team members
│   └── ThemeProvider.tsx    # Dark mode theme provider
├── lib/
│   ├── constants.ts         # Static data (events, team, etc.)
│   └── types.ts            # TypeScript interfaces
├── public/                 # Static assets
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iit-guwahati-alumni-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors and Theme

The custom color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#ccb700",      // Gold
  secondary: "#001aff",    // Blue
  tertiary: "#f00000",     // Red
  "background-light": "#f7f7f7",
  "background-dark": "#1a1a1a",
  "text-light": "#333333",
  "text-dark": "#f0f0f0",
}
```

### Content Management

- **Events**: Edit `lib/constants.ts` → `events` array
- **Team Members**: Edit `lib/constants.ts` → `teamMembers` array
- **Reports**: Edit `lib/constants.ts` → `reports` array
- **Gallery**: Edit `lib/constants.ts` → `galleryImages` array

### Adding New Sections

1. Create a new component in `components/sections/`
2. Add the section to `app/page.tsx`
3. Update navigation in `components/ui/Header.tsx` if needed

### Theme Toggle Components

The project includes multiple theme toggle variations:

#### Basic Theme Toggle
```tsx
import ThemeToggle from '@/components/ui/ThemeToggle'

<ThemeToggle size="md" showIcons={true} />
```

#### Advanced Theme Toggle
```tsx
import AdvancedThemeToggle from '@/components/ui/AdvancedThemeToggle'

<AdvancedThemeToggle 
  size="md" 
  showIcons={true} 
  showLabels={true} 
/>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' - Controls the size of the toggle
- `showIcons`: boolean - Shows/hides the light/dark mode icons
- `showLabels`: boolean - Shows/hides text labels (Advanced only)
- `className`: string - Additional CSS classes

#### Custom SVG Icons

The theme toggles now use custom SVG icons instead of Material Icons:

```tsx
import { SunIcon, MoonIcon } from '@/components/ui/ThemeIcons'

<SunIcon className="w-4 h-4 text-yellow-500" />
<MoonIcon className="w-4 h-4 text-blue-500" />
```

**Features:**
- **Custom SVG Design**: Beautiful sun and moon icons designed specifically for the theme toggle
- **Scalable**: Vector-based icons that look crisp at any size
- **Consistent**: Matches the overall design aesthetic of the website
- **Reusable**: Can be used independently in other components

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark mode
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Material Icons
- **Image Optimization**: Next.js Image component

## Performance Features

- ⚡ **Server Components** by default for better performance
- 🖼️ **Optimized Images** with Next.js Image component
- 📦 **Code Splitting** automatic with Next.js
- 🎯 **SEO Optimized** with proper metadata
- 🚀 **Fast Loading** with optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the IIT Guwahati Alumni Association.

---

Built with ❤️ for the IIT Guwahati Alumni Community
