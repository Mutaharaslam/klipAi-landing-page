import { Card } from '@/components/ui/Card'

const features = [
  {
    title: 'Next.js 14+ App Router',
    description: 'Built with the latest Next.js App Router for optimal performance and developer experience.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'TypeScript Strict Mode',
    description: 'Full TypeScript support with strict mode enabled for better code quality and developer experience.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first responsive design with custom breakpoints for mobile, tablet, and desktop.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework with custom design system and responsive utilities.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimized',
    description: 'Optimized images, fonts, and build configuration for maximum performance.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Accessibility Ready',
    description: 'Built with accessibility in mind, including ARIA labels and keyboard navigation support.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section className="container-responsive py-16 mobile:py-20 tablet:py-24">
      <div className="text-center mb-12 mobile:mb-16">
        <h2 className="text-responsive-2xl font-bold mb-4">
          Everything you need to build modern web apps
        </h2>
        <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
          This boilerplate includes all the essential tools and configurations 
          to help you build production-ready applications quickly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-6 mobile:gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 mobile:p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
              {feature.icon}
            </div>
            <h3 className="text-responsive-lg font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-responsive-sm">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
