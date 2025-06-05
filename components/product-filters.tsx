"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useFilter } from "@/contexts/filter-context"
import { products } from "@/lib/data"
import { X } from "lucide-react"

// Get unique categories and brands from products
const categories = Array.from(new Set(products.map(product => product.category)))
const brands = Array.from(new Set(products.map(product => product.name.split(' ')[0])))

export function ProductFilters() {
  const { selectedCategories, selectedBrands, toggleCategory, toggleBrand, clearFilters } = useFilter()

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-gray-900">Filters</h2>
          {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={category} 
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <Label htmlFor={category} className="text-gray-600">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-3">Brand</h3>
          <div className="space-y-2">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox 
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                />
                <Label htmlFor={brand} className="text-gray-600">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}