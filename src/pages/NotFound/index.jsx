import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0D0F] pt-20 pb-16">
      <div className="container text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="text-7xl font-extrabold text-[#C9A86A]">404</div>
          <h2 className="h2-title">
            Looks like you took a wrong turn.
          </h2>
          <p className="body-text">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn-primary inline-flex">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
