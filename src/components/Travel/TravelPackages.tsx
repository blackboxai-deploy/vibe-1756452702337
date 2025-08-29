"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TravelPackage } from "@/types/mappls";

const TravelPackages = () => {
  const packages: TravelPackage[] = [
    {
      id: "golden-triangle",
      name: "Golden Triangle Explorer",
      description: "Experience Delhi, Agra, and Jaipur in this classic India journey featuring the Taj Mahal, Red Fort, and Pink City",
      duration: "6 Days 5 Nights",
      price: 25000,
      originalPrice: 30000,
      includes: ["Accommodation", "Meals", "Transport", "Guide", "Entry Tickets"],
      excludes: ["Flight", "Personal Expenses", "Tips"],
      itinerary: [],
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc4bcb66-48d1-4375-965a-b4de5739cacc.png"],
      rating: 4.8,
      reviewCount: 245,
      availability: true,
    },
    {
      id: "kerala-backwaters",
      name: "Kerala Backwater Bliss",
      description: "Cruise through serene backwaters, stay in houseboats, and experience spice plantations in God's Own Country",
      duration: "8 Days 7 Nights",
      price: 35000,
      originalPrice: 42000,
      includes: ["Houseboat Stay", "All Meals", "Airport Transfer", "Sightseeing", "Ayurvedic Spa"],
      excludes: ["Flight Tickets", "Alcoholic Beverages", "Shopping"],
      itinerary: [],
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8580aaf8-ea27-40bd-92b8-205a571e06b2.png"],
      rating: 4.9,
      reviewCount: 189,
      availability: true,
    },
    {
      id: "rajasthan-royal",
      name: "Royal Rajasthan Heritage",
      description: "Live like royalty visiting magnificent palaces, forts, and experience the rich culture of desert state",
      duration: "10 Days 9 Nights",
      price: 45000,
      originalPrice: 55000,
      includes: ["Palace Hotels", "Desert Safari", "Cultural Shows", "All Meals", "Heritage Walks"],
      excludes: ["International Flight", "Visa Fees", "Personal Shopping"],
      itinerary: [],
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/77f25ad6-7593-452a-87ec-e50905252566.png"],
      rating: 4.7,
      reviewCount: 312,
      availability: true,
    },
    {
      id: "himalayan-adventure",
      name: "Himalayan Adventure Trek",
      description: "Challenge yourself with breathtaking mountain treks, pristine valleys, and spiritual experiences",
      duration: "12 Days 11 Nights",
      price: 55000,
      originalPrice: 65000,
      includes: ["Trekking Guide", "Camping Equipment", "All Meals", "Permits", "Medical Kit"],
      excludes: ["Personal Trekking Gear", "Insurance", "Emergency Evacuation"],
      itinerary: [],
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/19757467-c804-4968-ba20-0ab3caf4963e.png"],
      rating: 4.6,
      reviewCount: 156,
      availability: true,
    },
    {
      id: "goa-beaches",
      name: "Goa Beach Paradise",
      description: "Relax on pristine beaches, enjoy water sports, and experience vibrant nightlife in India's beach capital",
      duration: "5 Days 4 Nights",
      price: 18000,
      originalPrice: 22000,
      includes: ["Beach Resort", "Water Sports", "Sunset Cruise", "Airport Transfer", "Breakfast"],
      excludes: ["Lunch & Dinner", "Alcoholic Beverages", "Personal Expenses"],
      itinerary: [],
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/60d58c11-35ea-4ff0-a498-0926a5b444a1.png"],
      rating: 4.5,
      reviewCount: 298,
      availability: true,
    },
    {
      id: "south-india-temples",
      name: "South India Temple Circuit",
      description: "Explore ancient temples, rich traditions, and diverse cultures across Tamil Nadu, Karnataka, and Andhra Pradesh",
      duration: "9 Days 8 Nights",
      price: 32000,
      originalPrice: 38000,
      includes: ["Temple Visits", "Cultural Guide", "Traditional Meals", "Heritage Hotels", "Classical Performances"],
      excludes: ["Flight Tickets", "Personal Donations", "Shopping"],
      itinerary: [],
      images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c45b6d53-477b-4d10-8c6b-d28fc3988bd8.png"],
      rating: 4.8,
      reviewCount: 201,
      availability: true,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Curated Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked experiences designed to give you the best of India. From heritage tours to adventure treks, find your perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card">
              <div className="relative">
                <img
                  src={pkg.images[0]}
                  alt={pkg.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.src = '';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Discount Badge */}
                {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">
                      {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    ⭐ {pkg.rating} ({pkg.reviewCount})
                  </Badge>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                    {pkg.duration}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-foreground">{formatPrice(pkg.price)}</span>
                  {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                    <span className="text-lg text-muted-foreground line-through">{formatPrice(pkg.originalPrice)}</span>
                  )}
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.includes.slice(0, 3).map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                    {pkg.includes.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{pkg.includes.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1">Book Now</Button>
                  <Button variant="outline" className="flex-1">View Details</Button>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-center mt-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${pkg.availability ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-xs text-muted-foreground">
                      {pkg.availability ? 'Available' : 'Sold Out'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;