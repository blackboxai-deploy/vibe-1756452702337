// Mappls API Utility Functions

import {
  MapplsConfig,
  MapplsPlace,
  MapplsAutoSuggestResponse,
  MapplsGeocodingResponse,
  MapplsDirectionsResponse,
  MapplsNearbyResponse
} from '@/types/mappls';

class MapplsAPI {
  private config: MapplsConfig;

  constructor(config: MapplsConfig) {
    this.config = config;
  }

  getConfig(): MapplsConfig {
    return this.config;
  }

  // Initialize Mappls Map Script
  static loadMapplsScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.mappls) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://apis.mappls.com/advancedmaps/v1/map_load?v=1.5';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        resolve();
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load Mappls script'));
      };
      
      document.head.appendChild(script);
    });
  }

  // Auto-suggest places
  async searchPlaces(query: string, region?: string): Promise<MapplsPlace[]> {
    try {
      const response = await fetch(`/api/mappls/autosuggest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          region: region || 'IND',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }

      const data: MapplsAutoSuggestResponse = await response.json();
      return data.suggestedLocations || [];
    } catch (error) {
      console.error('Error searching places:', error);
      throw error;
    }
  }

  // Geocoding - get coordinates from address
  async geocode(address: string): Promise<MapplsGeocodingResponse> {
    try {
      const response = await fetch(`/api/mappls/geocode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });

      if (!response.ok) {
        throw new Error('Failed to geocode address');
      }

      return await response.json();
    } catch (error) {
      console.error('Error geocoding:', error);
      throw error;
    }
  }

  // Reverse geocoding - get address from coordinates
  async reverseGeocode(lat: number, lng: number): Promise<MapplsGeocodingResponse> {
    try {
      const response = await fetch(`/api/mappls/reverse-geocode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lat, lng }),
      });

      if (!response.ok) {
        throw new Error('Failed to reverse geocode');
      }

      return await response.json();
    } catch (error) {
      console.error('Error reverse geocoding:', error);
      throw error;
    }
  }

  // Get directions between two points
  async getDirections(
    origin: string,
    destination: string,
    waypoints?: string[]
  ): Promise<MapplsDirectionsResponse> {
    try {
      const response = await fetch(`/api/mappls/directions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin,
          destination,
          waypoints,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get directions');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting directions:', error);
      throw error;
    }
  }

  // Find nearby places
  async findNearbyPlaces(
    lat: number,
    lng: number,
    type: string,
    radius = 5000
  ): Promise<MapplsNearbyResponse> {
    try {
      const response = await fetch(`/api/mappls/nearby`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lat,
          lng,
          type,
          radius,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to find nearby places');
      }

      return await response.json();
    } catch (error) {
      console.error('Error finding nearby places:', error);
      throw error;
    }
  }
}

// Helper functions
export const formatDistance = (meters: number): string => {
  if (meters < 1000) {
    return `${meters}m`;
  } else {
    return `${(meters / 1000).toFixed(1)}km`;
  }
};

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export const getMapplsIcon = (type: string): string => {
  const iconMap: Record<string, string> = {
    hotel: 'hotel',
    restaurant: 'restaurant',
    attraction: 'tourist_attraction',
    hospital: 'hospital',
    atm: 'atm',
    gas_station: 'gas_station',
    shopping: 'shopping_mall',
    transport: 'transit_station',
    default: 'place',
  };
  
  return iconMap[type] || iconMap.default;
};

export const createMapplsAPI = (config: MapplsConfig): MapplsAPI => {
  return new MapplsAPI(config);
};

// Export default instance with environment config
export const mapplsAPI = new MapplsAPI({
  apiKey: typeof window !== 'undefined' ? '' : '',
  clientId: '',
  clientSecret: '',
});

// Declare global mappls object
declare global {
  interface Window {
    mappls: any;
  }
}