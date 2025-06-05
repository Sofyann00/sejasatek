"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Shield, Code, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center bg-black text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative max-w-2xl">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-lg rotate-12" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary rounded-lg -rotate-12" />
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Bangun
                <span className="block leading-tight mt-2">Software Terbaik</span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-300">
                Kami menciptakan produk digital yang luar biasa untuk menyelesaikan masalah nyata. 
                Kode yang bersih, desain yang indah, dan pengembangan yang berfokus pada pengguna.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace">
                  <Button size="lg" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white hover:bg-primary hover:text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-xl">
                    <span className="relative flex items-center">
                      Mulai Proyek Anda
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black border-white hover:bg-white/10 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-xl">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-gray-400 mt-2">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-gray-400 mt-2">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-gray-400 mt-2">Dukungan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-gray-400 mt-2">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  {[
                    {
                      title: "Desain Modern",
                      description: "Interface yang intuitif dan menarik untuk pengalaman pengguna terbaik"
                    },
                    {
                      title: "Performa Tinggi",
                      description: "Optimasi untuk kecepatan dan efisiensi dalam setiap aspek"
                    },
                    {
                      title: "Keamanan Maksimal",
                      description: "Standar keamanan tertinggi untuk melindungi data Anda"
                    }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                Karya Kami
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-black">
              Proyek Unggulan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Beberapa proyek terbaik yang telah kami kerjakan untuk klien kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group relative border-0 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden">
                <CardContent className="relative p-6">
                  <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-xl text-black group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{formatPrice(product.price)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-secondary ring-1 ring-inset ring-primary/20">
                Pendekatan Kami
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Mengapa Kami Berbeda
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Kami menggabungkan teknologi modern dengan pengalaman untuk memberikan solusi terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="group relative">
                <div className="relative flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7">
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                      {feature.icon && React.cloneElement(feature.icon, { className: "h-5 w-5 text-secondary" })}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Teknologi Modern',
    description: 'Dibangun dengan Next.js, React, dan teknologi cloud-native untuk performa dan skalabilitas maksimal.',
    icon: <Code className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Pengembangan Ahli',
    description: 'Tim developer senior yang membuat kode bersih dan terawat dengan fokus pada performa dan keamanan.',
    icon: <Cpu className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Dukungan Terpercaya',
    description: 'Dukungan teknis 24/7 dan pemeliharaan proaktif untuk memastikan aplikasi Anda berjalan lancar.',
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
]