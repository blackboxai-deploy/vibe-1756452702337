// Mappls API Type Definitions

export interface MapplsConfig {
  apiKey: string;
  clientId?: string;
  clientSecret?: string;
}

export interface MapplsPlace {
  placeName: string;
  placeAddress: string;
  latitude: number;
  longitude: number;
  placeId?: string;
  type?: string;
  subType?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export interface MapplsAutoSuggestResponse {
  suggestedLocations: MapplsPlace[];
  userAddedLocations?: MapplsPlace[];
}

export interface MapplsGeocodingResponse {
  results: Array<{
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    place_id: string;
    types: string[];
  }>;
}

export interface MapplsDirectionsResponse {
  routes: Array<{
    legs: Array<{
      distance: {
        text: string;
        value: number;
      };
      duration: {
        text: string;
        value: number;
      };
      steps: Array<{
        distance: {
          text: string;
          value: number;
        };
        duration: {
          text: string;
          value: number;
        };
        html_instructions: string;
        polyline: {
          points: string;
        };
      }>;
    }>;
    overview_polyline: {
      points: string;
    };
    summary: string;
  }>;
}

export interface MapplsNearbyResponse {
  results: Array<{
    name: string;
    place_id: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    rating?: number;
    types: string[];
    vicinity: string;
    photos?: Array<{
      photo_reference: string;
      height: number;
      width: number;
    }>;
  }>;
}

// Travel-specific types
export interface TravelDestination {
  id: string;
  name: string;
  description: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
    city: string;
    state: string;
  };
  attractions: Attraction[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  bestTimeToVisit: string;
  duration: string;
  rating: number;
  reviews: Review[];
  packages: TravelPackage[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  category: 'historical' | 'religious' | 'adventure' | 'nature' | 'cultural';
  rating: number;
  entryFee?: string;
  timings: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  rating: number;
  priceRange: string;
  amenities: string[];
  contact: {
    phone: string;
    email?: string;
  };
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  cuisine: string[];
  rating: number;
  priceRange: string;
  specialties: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface TravelPackage {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
  images: string[];
  rating: number;
  reviewCount: number;
  availability: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation?: string;
  places: {
    latitude: number;
    longitude: number;
    name: string;
  }[];
}

export interface BookingRequest {
  packageId: string;
  travelers: number;
  startDate: string;
  endDate: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  specialRequests?: string;
}

export interface MapMarkerType {
  id: string;
  type: 'destination' | 'hotel' | 'restaurant' | 'attraction' | 'transport';
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  description?: string;
  icon?: string;
  data?: any;
}