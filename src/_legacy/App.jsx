import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/cinematic/ScrollProgress'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { DURATION, EASE_PREMIUM } from './utils/motion'

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.page, ease: EASE_PREMIUM },
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_PREMIUM },
  },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="fixed inset-0 z-50 bg-[#0A0C0F] pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_PREMIUM }}
          />

          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Navigate to="/contact" replace />} />
            <Route path="/diagnostics" element={<Navigate to="/services" replace />} />
            <Route path="/maintenance" element={<Navigate to="/services" replace />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/services/*" element={<Navigate to="/services" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0A0C0F] text-[#F4F4F4]">
        <ScrollProgress />
        <Navbar />
        <div className="page-content flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
