import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Software Development Services</h1>
        <p className="mt-2 text-muted-foreground">
          Transform your business with our comprehensive software development solutions. We deliver high-quality, 
          scalable applications using modern technology stacks including Next.js, React, Node.js, and cloud services.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *Custom pricing available for enterprise solutions. Contact our team for detailed project consultations.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}