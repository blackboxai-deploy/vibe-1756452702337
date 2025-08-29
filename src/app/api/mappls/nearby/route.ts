import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { lat, lng, type, radius = 5000 } = await request.json();

    if (!lat || !lng || !type) {
      return NextResponse.json(
        { error: 'Latitude, longitude, and type parameters are required' },
        { status: 400 }
      );
    }

    // Mock nearby places data for demo
    const mockResults = {
      results: [
        {
          name: `${type.charAt(0).toUpperCase() + type.slice(1)} Near You`,
          place_id: 'demo_nearby_1',
          geometry: {
            location: {
              lat: lat + 0.01,
              lng: lng + 0.01,
            },
          },
          rating: 4.5,
          types: [type],
          vicinity: 'Nearby area',
          photos: [
            {
              photo_reference: 'demo_photo_ref',
              height: 300,
              width: 400,
            },
          ],
        },
        {
          name: `Another ${type}`,
          place_id: 'demo_nearby_2',
          geometry: {
            location: {
              lat: lat - 0.01,
              lng: lng - 0.01,
            },
          },
          rating: 4.2,
          types: [type],
          vicinity: 'Close vicinity',
        },
      ],
    };

    return NextResponse.json(mockResults);

    // Actual Mappls nearby places API call would be:
    /*
    const mapplsApiKey = process.env.MAPPLS_API_KEY;
    
    const response = await fetch(
      `https://atlas.mappls.com/api/places/nearby/json?location=${lat},${lng}&radius=${radius}&type=${type}`,
      {
        headers: {
          'Authorization': `Bearer ${mapplsApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
    */
  } catch (error) {
    console.error('Error in nearby places API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}