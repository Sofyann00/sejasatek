import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Search } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Simple Header */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-8">
            Software Development Services
          </h1>

          {/* Simplified Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Simplified Layout */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div className="lg:col-span-1">
              <ProductFilters />
            </div>
            <div className="lg:col-span-2 mt-6 lg:mt-0">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}