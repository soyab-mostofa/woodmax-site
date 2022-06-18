import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Footer from './Footer';
import SocialMediaBanner from './layout/SocialMediaBanner';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [showBanner, setShowBanner] = React.useState(true);
  return (
    <div>
      <Navbar />
      <AnimatePresence>
        {showBanner && (
          <SocialMediaBanner
            showBanner={showBanner}
            setShowBanner={setShowBanner}
          />
        )}
      </AnimatePresence>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
