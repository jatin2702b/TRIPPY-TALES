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
      <meta property="og:image" content="https://www.canva.com/design/DAG41gwWdpg/ARYHasxquAW4p29aHnXOSA/edit" />

      {/* Instagram link for social preview */}
      <meta property="og:site_name" content="Tripyy Tales" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:see_also" content="https://www.instagram.com/tripyytales__official?igsh=MXRncXpxb3drNWRsbw==" />

      {/* Twitter / X - Commented for future use */}
      {/*
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tripyy Tales – Explore Uttarakhand's Best Destinations & Tours" />
      <meta
        name="twitter:description"
        content="Tripyy Tales offers curated travel experiences in Jim Corbett & Uttarakhand. Wildlife safaris, trekking, luxury stays, and adventure tours for your next vacation."
      />
      <meta name="twitter:image" content="https://www.tripyytales.com/og-image.jpg" />
      */}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Tripyy Tales",
          "url": "https://www.tripyytales.com",
          "logo": "https://www.canva.com/design/DAG41giJZuY/2cPTL-7YYmelagxyDp2jcw/edit",
          "sameAs": [
            "https://www.instagram.com/tripyy_tales"
          ],
          "description": "Tripyy Tales offers curated travel experiences in Jim Corbett & Uttarakhand. Wildlife safaris, trekking, luxury stays, and adventure tours for your next vacation.",
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
