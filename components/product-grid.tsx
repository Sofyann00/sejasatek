"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'
import { products, formatPrice } from "@/lib/data"
import { useFilter } from "@/contexts/filter-context"

export function ProductGrid() {
  const { selectedCategories, selectedBrands } = useFilter()

  const filteredProducts = products.filter(product => {
    const brand = product.name.split(' ')[0]
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand)
    return categoryMatch && brandMatch
  })

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="aspect-video relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <div className="bg-white px-2 py-1 rounded text-sm text-gray-600">
                    {product.category}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium text-gray-900">
                    {formatPrice(product.price)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Starting price
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  )
}