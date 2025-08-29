"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5b9f256-06d8-4fef-8719-7afbb29719df.png",
      rating: 5,
      review: "ExplorIndia made our Rajasthan trip absolutely magical! The interactive maps helped us discover hidden gems and the travel package was perfectly curated. The desert safari in Jaisalmer was unforgettable!",
      tripType: "Royal Rajasthan Heritage",
      date: "January 2024",
    },
    {
      id: 2,
      name: "Raj Kumar",
      location: "Delhi, NCR",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b729dde-3669-40dc-8091-d3ab417251da.png",
      rating: 5,
      review: "The Kerala backwater experience exceeded all expectations. The houseboat stay was serene and the local guides were incredibly knowledgeable. The Mappls integration made navigation so easy!",
      tripType: "Kerala Backwater Bliss",
      date: "December 2023",
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Ahmedabad, Gujarat",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04db8d4f-e704-4937-9295-ba2382fda8d9.png",
      rating: 5,
      review: "Amazing Himalayan trek! The preparation guide was thorough and the support team was always available. The interactive maps showing trail routes and nearby facilities were incredibly helpful.",
      tripType: "Himalayan Adventure Trek",
      date: "November 2023",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Bangalore, Karnataka",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f29ae918-b6c6-40b5-8483-e734ac7bbfff.png",
      rating: 5,
      review: "Perfect Golden Triangle tour! Seeing the Taj Mahal at sunrise was breathtaking. The digital guides and location-based recommendations made every moment special. Highly recommended!",
      tripType: "Golden Triangle Explorer",
      date: "October 2023",
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e0c32d7-00ed-480d-b5ba-5f0e385ee62a.png",
      rating: 4,
      review: "Goa was fantastic! Beyond the beautiful beaches, we discovered amazing local culture and cuisine. The map integration helped us find the best sunset points and local eateries.",
      tripType: "Goa Beach Paradise",
      date: "September 2023",
    },
    {
      id: 6,
      name: "Arjun Nair",
      location: "Kochi, Kerala",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10862f83-8bbb-4b2e-bddc-ebe81a2ba9b2.png",
      rating: 5,
      review: "The South India temple circuit was spiritually enriching. The detailed guides about temple architecture and rituals enhanced our understanding. The planning was impeccable!",
      tripType: "South India Temple Circuit",
      date: "August 2023",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real travelers who discovered incredible India with ExplorIndia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">({testimonial.rating}/5)</span>
                </div>

                {/* Review */}
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  "{testimonial.review}"
                </p>

                {/* Trip Type */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.tripType}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Destinations Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Recommendation Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;