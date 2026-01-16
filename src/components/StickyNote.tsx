'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function StickyNote() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50 w-64 bg-yellow-100 p-4 rounded-lg shadow-lg border-l-4 border-yellow-400"
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h4 className="font-semibold text-gray-800 mb-2">Promoție Specială!</h4>
      <p className="text-sm text-gray-700 mb-3">Consultație gratuită pentru noi pacienți în ianuarie 2026.</p>
      <a
        href="#programare"
        className="inline-block bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition-colors"
      >
        Programează-te acum
      </a>
    </motion.div>
  )
}