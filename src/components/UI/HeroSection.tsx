"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onExploreClick();
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/184d8de1-36d2-405e-a199-5c21aeb23dcc.png"
          alt="Beautiful Indian landscape with mountains and traditional architecture"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.currentTarget.src = '';
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the Magic of{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Incredible India
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Explore breathtaking destinations, immerse in rich culture, and create unforgettable memories 
            with our expertly curated travel experiences across India.
          </p>

          {/* Search Bar */}
          <Card className="max-w-2xl mx-auto p-4 mb-8 bg-white/90 backdrop-blur-sm">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Where do you want to explore? (e.g., Goa, Rajasthan, Kerala)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button type="submit" size="lg" className="h-12 px-8">
                Explore Now
              </Button>
            </form>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
              onClick={onExploreClick}
            >
              Interactive Map
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              asChild
            >
              <a href="#packages">View Packages</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="text-gray-300 mt-1">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
            <div className="text-gray-300 mt-1">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-gray-300 mt-1">Travel Packages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">4.9</div>
            <div className="text-gray-300 mt-1">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;