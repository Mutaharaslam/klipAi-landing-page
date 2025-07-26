export function Partners() {
  const partners = [
    { name: 'Next.js', logo: '/logos/nextjs.svg' },
    { name: 'TypeScript', logo: '/logos/typescript.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Vercel', logo: '/logos/vercel.svg' },
    { name: 'GitHub', logo: '/logos/github.svg' },
  ]

  return (
    <section className="container-responsive py-16 mobile:py-20 tablet:py-24 bg-muted/50">
      <div className="text-center mb-12 mobile:mb-16">
        <h2 className="text-responsive-2xl font-bold mb-4">
          Built with Modern Technologies
        </h2>
        <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
          Powered by industry-leading technologies and tools
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-8 mobile:gap-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            title={partner.name}
          >
            <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">{partner.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
