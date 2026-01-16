'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  label: string
  duration?: number
}

export default function Counter({ end, label, duration = 2 }: CounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="text-center">
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {inView && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration }}
            className="text-4xl font-bold text-primary"
          >
            {end.toLocaleString()}+
          </motion.span>
        )}
      </motion.div>
      <p className="mt-2 text-gray-600 font-medium">{label}</p>
    </div>
  )
}