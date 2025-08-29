"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TravelGuides = () => {
  const guides = [
    {
      id: "rajasthan-complete",
      title: "Complete Guide to Rajasthan",
      description: "Everything you need to know about traveling in the Land of Kings, from palaces to desert safaris",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7935e130-efbb-4fbe-b276-7b2b64733e27.png",
      category: "State Guide",
      readTime: "15 min read",
      publishDate: "2024-01-15",
      tags: ["Heritage", "Culture", "Desert"],
    },
    {
      id: "kerala-backwaters",
      title: "Kerala Backwaters: A Complete Experience",
      description: "Navigate the tranquil backwaters of Kerala with our comprehensive guide to houseboats and local life",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acd6e585-5989-490b-8c3a-795f757b9851.png",
      category: "Experience Guide",
      readTime: "12 min read",
      publishDate: "2024-01-10",
      tags: ["Nature", "Backwaters", "Peaceful"],
    },
    {
      id: "himalayan-trekking",
      title: "Himalayan Trekking for Beginners",
      description: "Your first step into the mighty Himalayas - preparation, routes, and essential tips for safe trekking",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88f53af9-b924-47a0-90ef-6546a9faf9e8.png",
      category: "Adventure Guide",
      readTime: "18 min read",
      publishDate: "2024-01-05",
      tags: ["Adventure", "Mountains", "Trekking"],
    },
    {
      id: "south-indian-temples",
      title: "Spiritual Journey: South Indian Temples",
      description: "Explore the architectural marvels and spiritual significance of South India's ancient temple complexes",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5ae4942-beb4-429b-9c89-06eba2ecaafa.png",
      category: "Cultural Guide",
      readTime: "20 min read",
      publishDate: "2024-01-01",
      tags: ["Spiritual", "Architecture", "Culture"],
    },
    {
      id: "goa-beyond-beaches",
      title: "Goa Beyond Beaches",
      description: "Discover the hidden gems of Goa - from spice plantations to Portuguese heritage and local cuisine",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08bf869c-a610-459a-a91e-900ec5f1e151.png",
      category: "Hidden Gems",
      readTime: "10 min read",
      publishDate: "2023-12-28",
      tags: ["Beaches", "Heritage", "Food"],
    },
    {
      id: "indian-street-food",
      title: "The Ultimate Indian Street Food Guide",
      description: "A foodie's journey through India's diverse street food culture, from Delhi chaat to Mumbai vada pav",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ee23479-2593-4304-b6bb-98dfc09e6bee.png",
      category: "Food Guide",
      readTime: "14 min read",
      publishDate: "2023-12-25",
      tags: ["Food", "Culture", "Local"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel Guides & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights, local tips, and comprehensive guides to help you make the most of your Indian adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Card key={guide.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-card">
              <div className="relative">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.src = '';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {guide.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{guide.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {guide.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                  <span>{guide.readTime}</span>
                  <span>{new Date(guide.publishDate).toLocaleDateString()}</span>
                </div>
                
                <Button className="w-full" variant="outline">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Guides
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;