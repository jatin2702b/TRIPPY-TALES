// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      {/* HTML Meta Tags */}
      <title>Tripyy Tales – Jim Corbett Safari & Uttarakhand Tours</title>
      <meta
        name="description"
        content="Book Corbett Safari, Nainital tour packages, Chopta treks and luxury resort stays with Tripyy Tales."
      />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:url" content="https://tripyytales.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Tripyy Tales – Jim Corbett Safari & Uttarakhand Tours" />
      <meta
        property="og:description"
        content="Book Corbett Safari, Nainital tour packages, Chopta treks and luxury resort stays with Tripyy Tales."
      />
      <meta
        property="og:image"
        content="https://i.pinimg.com/1200x/65/cb/aa/65cbaa1f528cb47ee2eeb180bccc42aa.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tripyytales.com" />
      <meta property="twitter:url" content="https://tripyytales.com" />
      <meta name="twitter:title" content="Tripyy Tales – Jim Corbett Safari & Uttarakhand Tours" />
      <meta
        name="twitter:description"
        content="Book Corbett Safari, Nainital tour packages, Chopta treks and luxury resort stays with Tripyy Tales."
      />
      <meta
        name="twitter:image"
        content="https://i.pinimg.com/1200x/65/cb/aa/65cbaa1f528cb47ee2eeb180bccc42aa.jpg"
      />
    </Helmet>
  );
}
