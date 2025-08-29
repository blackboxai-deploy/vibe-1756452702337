"use client";

import { useEffect, useRef, useState } from "react";
import { TravelDestination } from "@/types/mappls";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface MapComponentProps {
  initialDestination?: TravelDestination | null;
  height?: string;
  className?: string;
}

const MapComponent = ({ 
  initialDestination, 
  height = "500px", 
  className = "" 
}: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  // Initialize Mappls Map
  useEffect(() => {
    const initializeMap = async () => {
      if (!mapRef.current) return;

      try {
        // Load Mappls script if not already loaded
        if (!window.mappls) {
          const script = document.createElement('script');
          script.src = 'https://apis.mappls.com/advancedmaps/api/v2.0.0/maps/map_load?v=1.5';
          script.async = true;
          
          script.onload = () => {
            createMap();
          };
          
          script.onerror = () => {
            console.error('Failed to load Mappls script');
            setIsLoading(false);
          };
          
          document.head.appendChild(script);
        } else {
          createMap();
        }
      } catch (error) {
        console.error('Error initializing map:', error);
        setIsLoading(false);
      }
    };

    const createMap = () => {
      try {
        // Use demo map since we don't have API keys
        const demoMap = createDemoMap();
        setMapInstance(demoMap);
        setIsLoading(false);
      } catch (error) {
        console.error('Error creating map:', error);
        setIsLoading(false);
      }
    };

    initializeMap();
  }, []);

  // Focus on initial destination
  useEffect(() => {
    if (mapInstance && initialDestination) {
      // Simulate focusing on destination
      setSelectedPlace(initialDestination);
    }
  }, [mapInstance, initialDestination]);

  const createDemoMap = () => {
    // Create a demo map interface since we don't have API keys
    return {
      center: initialDestination 
        ? [initialDestination.location.latitude, initialDestination.location.longitude]
        : [20.5937, 78.9629], // Center of India
      zoom: initialDestination ? 10 : 5,
    };
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Demo search results for popular Indian destinations
    const demoResults = [
      {
        id: 'goa',
        name: 'Goa',
        address: 'Goa, India',
        latitude: 15.2993,
        longitude: 74.1240,
        type: 'State'
      },
      {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        address: 'Agra, Uttar Pradesh',
        latitude: 27.1751,
        longitude: 78.0421,
        type: 'Monument'
      },
      {
        id: 'kerala-backwaters',
        name: 'Kerala Backwaters',
        address: 'Alleppey, Kerala',
        latitude: 9.4981,
        longitude: 76.3388,
        type: 'Natural'
      },
      {
        id: 'jaipur',
        name: 'Jaipur',
        address: 'Jaipur, Rajasthan',
        latitude: 26.9124,
        longitude: 75.7873,
        type: 'City'
      },
    ].filter(place => 
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.address.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(demoResults);
  };

  const handlePlaceSelect = (place: any) => {
    setSelectedPlace(place);
    setSearchResults([]);
    setSearchQuery(place.name);
  };

  if (isLoading) {
    return (
      <div 
        className={`relative bg-muted rounded-lg ${className}`} 
        style={{ height }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Interactive Map...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ height }}>
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg relative overflow-hidden"
      >
        {/* Demo Map Background */}
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a24ed08d-b255-4ff3-88a9-5f07063e42a2.png"
          alt="Interactive map of India showing travel destinations"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.currentTarget.src = '';
          }}
        />
        
        {/* Map Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Demo Location Markers */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer" title="Delhi" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer" title="Mumbai" />
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer" title="Goa" />
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer" title="Chennai" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer" title="Bangalore" />
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button size="sm" variant="secondary" className="w-10 h-10 p-0">+</Button>
          <Button size="sm" variant="secondary" className="w-10 h-10 p-0">-</Button>
          <Button size="sm" variant="secondary" className="w-10 h-10 p-0">📍</Button>
        </div>
      </div>

      {/* Search Panel */}
      <Card className="absolute top-4 left-4 w-80 max-w-[calc(100%-2rem)]">
        <CardContent className="p-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search destinations, cities, attractions..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
              className="pr-10"
            />
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute right-1 top-1 h-8 w-8 p-0"
              onClick={() => handleSearch(searchQuery)}
            >
              🔍
            </Button>
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="p-2 hover:bg-muted rounded cursor-pointer flex items-center justify-between"
                  onClick={() => handlePlaceSelect(result)}
                >
                  <div>
                    <div className="font-medium text-sm">{result.name}</div>
                    <div className="text-xs text-muted-foreground">{result.address}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {result.type}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Selected Place Info */}
      {selectedPlace && (
        <Card className="absolute bottom-4 left-4 w-80 max-w-[calc(100%-2rem)]">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">{selectedPlace.name}</h3>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-6 w-6 p-0"
                onClick={() => setSelectedPlace(null)}
              >
                ×
              </Button>
            </div>
            {selectedPlace.address && (
              <p className="text-sm text-muted-foreground mb-3">{selectedPlace.address}</p>
            )}
            {selectedPlace.description && (
              <p className="text-sm mb-3">{selectedPlace.description}</p>
            )}
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Get Directions</Button>
              <Button size="sm" variant="outline" className="flex-1">View Details</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Map Legend */}
      <Card className="absolute bottom-4 right-4">
        <CardContent className="p-3">
          <div className="text-xs">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Tourist Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Major Cities</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapComponent;