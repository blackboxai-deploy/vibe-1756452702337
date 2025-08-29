import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { query, region = 'IND' } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    // For demo purposes, return mock data
    // In production, this would call the actual Mappls API
    const mockSuggestions = [
      {
        placeName: 'Goa',
        placeAddress: 'Goa, India',
        latitude: 15.2993,
        longitude: 74.1240,
        type: 'state',
        city: 'Panaji',
        state: 'Goa',
      },
      {
        placeName: 'Taj Mahal',
        placeAddress: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh',
        latitude: 27.1751,
        longitude: 78.0421,
        type: 'monument',
        city: 'Agra',
        state: 'Uttar Pradesh',
      },
      {
        placeName: 'Kerala Backwaters',
        placeAddress: 'Alleppey, Kerala, India',
        latitude: 9.4981,
        longitude: 76.3388,
        type: 'natural',
        city: 'Alleppey',
        state: 'Kerala',
      },
      {
        placeName: 'Jaipur',
        placeAddress: 'Jaipur, Rajasthan, India',
        latitude: 26.9124,
        longitude: 75.7873,
        type: 'city',
        city: 'Jaipur',
        state: 'Rajasthan',
      },
      {
        placeName: 'Himachal Pradesh',
        placeAddress: 'Himachal Pradesh, India',
        latitude: 31.1048,
        longitude: 77.1734,
        type: 'state',
        city: 'Shimla',
        state: 'Himachal Pradesh',
      },
    ].filter(place => 
      place.placeName.toLowerCase().includes(query.toLowerCase()) ||
      place.placeAddress.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json({
      suggestedLocations: mockSuggestions,
      userAddedLocations: [],
    });

    // Actual Mappls API call would look like this:
    /*
    const mapplsApiKey = process.env.MAPPLS_API_KEY;
    
    if (!mapplsApiKey) {
      return NextResponse.json(
        { error: 'Mappls API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://atlas.mappls.com/api/places/search/json?query=${encodeURIComponent(query)}&region=${region}`,
      {
        headers: {
          'Authorization': `Bearer ${mapplsApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Mappls API request failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
    */
  } catch (error) {
    console.error('Error in autosuggest API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}