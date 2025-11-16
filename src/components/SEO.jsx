// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      {/* Page Meta */}
      <title>Tripyy Tales – Explore Uttarakhand's Best Destinations & Tours</title>
      <meta
        name="description"
        content="Tripyy Tales offers curated travel experiences in Jim Corbett & Uttarakhand. Wildlife safaris, trekking, luxury stays, and adventure tours for your next vacation."
      />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Tripyy Tales – Explore Uttarakhand's Best Destinations & Tours" />
      <meta
        property="og:description"
        content="Tripyy Tales offers curated travel experiences in Jim Corbett & Uttarakhand. Wildlife safaris, trekking, luxury stays, and adventure tours for your next vacation."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tripyytales.com" />

      {/* OG Image (Poster) */}
      <meta property="og:image" content="https://i.postimg.cc/8cXfy4p2/Poster-Adventure-Awaits.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:site_name" content="Tripyy Tales" />
      <meta property="og:locale" content="en_IN" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Tripyy Tales",
          "url": "https://www.tripyytales.com",
          "logo": "https://i.postimg.cc/1zKtCBM0/Crisp-Minimalist-Logo-for-Tripyy-Tales.png",
          "sameAs": [
            "https://www.instagram.com/tripyy_tales"
          ],
          "description":
            "Tripyy Tales offers curated travel experiences in Jim Corbett & Uttarakhand. Wildlife safaris, trekking, luxury stays, and adventure tours for your next vacation.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Uttarakhand",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
}
