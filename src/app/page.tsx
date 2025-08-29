"use client";

import { useState } from "react";
import Navbar from "@/components/UI/Navbar";
import HeroSection from "@/components/UI/HeroSection";
import FeaturedDestinations from "@/components/Travel/FeaturedDestinations";
import TravelPackages from "@/components/Travel/TravelPackages";
import TravelGuides from "@/components/Travel/TravelGuides";
import Testimonials from "@/components/UI/Testimonials";
import Footer from "@/components/UI/Footer";
import MapModal from "@/components/Map/MapModal";

export default function HomePage() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);

  const handleExploreDestination = (destination: any) => {
    setSelectedDestination(destination);
    setIsMapOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection onExploreClick={() => setIsMapOpen(true)} />
      
      {/* Featured Destinations */}
      <FeaturedDestinations onDestinationClick={handleExploreDestination} />
      
      {/* Travel Packages */}
      <TravelPackages />
      
      {/* Travel Guides */}
      <TravelGuides />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
      
      {/* Map Modal */}
      {isMapOpen && (
        <MapModal
          isOpen={isMapOpen}
          onClose={() => setIsMapOpen(false)}
          initialDestination={selectedDestination}
        />
      )}
    </div>
  );
}