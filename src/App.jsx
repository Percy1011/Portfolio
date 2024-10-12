import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Cursor from './components/canvas/Cursor';

function App() {
  const parallaxVariant = {
    hidden: { opacity: 0, y: -100 }, // Start off-screen (above)
    visible: {
      opacity: 1,
      y: 0, // Move to the normal position
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }, // Smooth easing
    },
  };

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <Cursor />
          <Navbar />
          {/* Hero Section */}
          <motion.div
            className="section bg-hero-pattern bg-cover bg-no-repeat bg-center snap-start"
            style={{ height: '100vh' }} // Full viewport height for the section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger early when the section is slightly visible
            variants={parallaxVariant}
          >
            <Hero />
          </motion.div>

          {/* About Section */}
          <motion.div
            className="section snap-start"
            style={{ height: '100vh' }} // Full viewport height
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger early
            variants={parallaxVariant}
          >
            <About />
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="section snap-start"
            style={{ height: '130vh' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger as soon as it's a little visible
            variants={parallaxVariant}
          >
            <Experience />
          </motion.div>

          {/* Tech Section */}
          <motion.div
            className="section snap-start"
            style={{ height: '100vh' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} 
            variants={parallaxVariant}
          >
            <Tech />
          </motion.div>

          {/* Works Section */}
          <motion.div
            className="section snap-start"
            style={{ height: '100vh' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={parallaxVariant}
          >
            <Works />
          </motion.div>

          {/* Contact Section */}
          <div className="section relative z-0 snap-start" style={{ height: '100vh' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }} // Trigger early
              variants={parallaxVariant}
            >
              <Contact />
            </motion.div>
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

