'use client'

import { motion } from 'framer-motion'

export default function PromoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[#F2B94B] text-[#1F2933] text-sm h-[var(--promo-bar-height)] border-b border-[#1F2933]/10">
      <div className="container h-full flex items-center justify-between px-4">
        {/* Desktop/Tablet View */}
        <div className="hidden md:flex items-center w-full h-full">
          <div className="flex items-center space-x-4">
            <span>Concept demo</span>
            <span>•</span>
            <span>Conținut orientativ</span>
            <span>•</span>
            <span>Dezvoltat de </span>
            <a href="https://sky.ro" className="hover:underline">sky.ro</a>
            <span>•</span>
            <a href="mailto:dan.trifan@sky.ro" className="hover:underline">dan.trifan@sky.ro</a>
            <span>•</span>
            <a href="tel:+40720088880" className="hover:underline">+4 0720 088 880</a>
          </div>
          <div className="flex items-center">
            <a
              href="#programare"
              className="bg-[#2F80ED] text-white px-4 py-1 rounded hover:bg-opacity-90 transition-colors"
            >
              Programează-te
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-between w-full h-full">
          <div className="flex-1 min-w-0">
            <span className="truncate block">Concept demo</span>
          </div>
          <div className="flex-1 text-center px-2">
            <span className="whitespace-nowrap">Dezvoltat de sky.ro</span>
          </div>
          <div className="flex-1 text-right">
            <a href="tel:+40720088880" className="hover:underline">
              +4 0720 088 880
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}