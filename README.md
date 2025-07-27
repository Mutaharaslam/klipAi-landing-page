# Next.js 14+ and tailwind CSS (version 4.1) using TypeScript


## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS V-4.1** for styling
- **Responsive Design** with mobile-first approach
- **Performance Optimized** with Next.js Image component
- **Accessibility Ready** with ARIA labels and keyboard navigation
- **SEO Friendly** with proper meta tags and structured data
- **Error Handling** with custom error pages
- **Loading States** with skeleton components
- **Modern Development** with ESLint and Prettier

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Formatting**: Prettier
- **Icons**: React icons(Had to use React icons because of some issue with Lucide React)
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
nextjs-boilerplate/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── index.ts
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Partners.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
├── public/
│   ├── images/
│   ├── icons/
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/klipAI-landing-page-test.git
cd nextjs-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Development Features

- **Hot Reload**: Instant feedback during development
- **Type Safety**: Full TypeScript support with strict mode
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Performance**: Optimized images and fonts
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO**: Meta tags and structured data

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎨 Customization

The project includes a custom design system with:
- Color palette variables
- Typography scales
- Spacing utilities
- Component variants

## 🛡️ Security

- Input validation
- XSS protection
- Content Security Policy (CSP) ready
- HTTPS enforcement

## 📊 Performance

- Optimized images with Next.js Image component
- Font optimization
- Code splitting
- Bundle analysis ready

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) for the type safety
- [Vercel](https://vercel.com/) for the deployment platform
