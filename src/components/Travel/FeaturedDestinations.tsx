"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TravelDestination } from "@/types/mappls";

interface FeaturedDestinationsProps {
  onDestinationClick: (destination: TravelDestination) => void;
}

const FeaturedDestinations = ({ onDestinationClick }: FeaturedDestinationsProps) => {
  const featuredDestinations: TravelDestination[] = [
    {
      id: "goa",
      name: "Goa",
      description: "Sun, sand, and serene beaches with vibrant nightlife and Portuguese heritage",
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5c9d526-6239-4653-948d-88ef69af59ec.png"],
      location: {
        latitude: 15.2993,
        longitude: 74.1240,
        address: "Goa, India",
        city: "Panaji",
        state: "Goa",
      },
      attractions: [],
      hotels: [],
      restaurants: [],
      bestTimeToVisit: "October to March",
      duration: "4-7 days",
      rating: 4.8,
      reviews: [],
      packages: [],
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      description: "Land of maharajas, magnificent palaces, forts, and colorful culture",
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/127d3554-f2d4-48f3-8f72-337ad43fcdd6.png"],
      location: {
        latitude: 27.0238,
        longitude: 74.2179,
        address: "Rajasthan, India",
        city: "Jaipur",
        state: "Rajasthan",
      },
      attractions: [],
      hotels: [],
      restaurants: [],
      bestTimeToVisit: "October to March",
      duration: "7-14 days",
      rating: 4.9,
      reviews: [],
      packages: [],
    },
    {
      id: "kerala",
      name: "Kerala",
      description: "God's Own Country with backwaters, hill stations, and spice plantations",
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d237cb0-dfee-43eb-90c4-492aa16348ac.png"],
      location: {
        latitude: 10.8505,
        longitude: 76.2711,
        address: "Kerala, India",
        city: "Kochi",
        state: "Kerala",
      },
      attractions: [],
      hotels: [],
      restaurants: [],
      bestTimeToVisit: "October to March",
      duration: "5-10 days",
      rating: 4.7,
      reviews: [],
      packages: [],
    },
    {
      id: "himachal",
      name: "Himachal Pradesh",
      description: "Himalayan paradise with snow-capped peaks, valleys, and adventure sports",
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49fe3f93-ad27-4fcb-8f4d-3d521f618316.png"],
      location: {
        latitude: 31.1048,
        longitude: 77.1734,
        address: "Himachal Pradesh, India",
        city: "Shimla",
        state: "Himachal Pradesh",
      },
      attractions: [],
      hotels: [],
      restaurants: [],
      bestTimeToVisit: "March to June, September to November",
      duration: "6-12 days",
      rating: 4.6,
      reviews: [],
      packages: [],
    },
    {
      id: "uttarakhand",
      name: "Uttarakhand",
      description: "Land of the Gods with sacred temples, pristine rivers, and trekking trails",
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b0c3695-13d8-4465-baa6-399c25cb57b4.png"],
      location: {
        latitude: 30.0668,
        longitude: 79.0193,
        address: "Uttarakhand, India",
        city: "Dehradun",
        state: "Uttarakhand",
      },
      attractions: [],
      hotels: [],
      restaurants: [],
      bestTimeToVisit: "April to June, September to November",
      duration: "5-10 days",
      rating: 4.5,
      reviews: [],
      packages: [],
    },
    {
      id: "kashmir",
      name: "Kashmir",
      description: "Paradise on Earth with Dal Lake, houseboats, and stunning landscapes",
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62dbd348-8d25-4b48-abf3-7fd474afd17d.png"],
      location: {
        latitude: 34.0837,
        longitude: 74.7973,
        address: "Kashmir, India",
        city: "Srinagar",
        state: "Jammu and Kashmir",
      },
      attractions: [],
      hotels: [],
      restaurants: [],
      bestTimeToVisit: "March to October",
      duration: "4-8 days",
      rating: 4.8,
      reviews: [],
      packages: [],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most breathtaking destinations across India, each offering unique experiences and unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={destination.images[0]}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.src = '';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    ⭐ {destination.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{destination.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Best Time</p>
                    <p className="font-semibold">{destination.bestTimeToVisit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="font-semibold">{destination.duration}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1"
                    onClick={() => onDestinationClick(destination)}
                  >
                    Explore on Map
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Packages
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;