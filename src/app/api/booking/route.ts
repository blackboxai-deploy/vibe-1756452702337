import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    const requiredFields = ['packageId', 'travelers', 'startDate', 'customerInfo'];
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate customer info
    const { customerInfo } = bookingData;
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      return NextResponse.json(
        { error: 'Customer name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Generate booking ID
    const bookingId = `EI${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Mock booking response
    const booking = {
      bookingId,
      status: 'confirmed',
      packageId: bookingData.packageId,
      travelers: bookingData.travelers,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      customerInfo: bookingData.customerInfo,
      specialRequests: bookingData.specialRequests,
      totalAmount: calculateTotalAmount(bookingData),
      paymentStatus: 'pending',
      confirmationNumber: bookingId,
      createdAt: new Date().toISOString(),
    };

    // In a real application, you would:
    // 1. Save booking to database
    // 2. Send confirmation email
    // 3. Process payment
    // 4. Update inventory

    return NextResponse.json({
      success: true,
      booking,
      message: 'Booking confirmed successfully!',
    });

  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const bookingId = url.searchParams.get('bookingId');

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    // Mock booking retrieval
    const booking = {
      bookingId,
      status: 'confirmed',
      packageName: 'Golden Triangle Explorer',
      travelers: 2,
      startDate: '2024-03-15',
      endDate: '2024-03-21',
      customerInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91-9876543210',
      },
      totalAmount: 50000,
      paymentStatus: 'paid',
      createdAt: '2024-01-15T10:30:00Z',
    };

    return NextResponse.json(booking);

  } catch (error) {
    console.error('Error retrieving booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function calculateTotalAmount(bookingData: any): number {
  // Mock price calculation
  const basePrice = 25000; // Base package price
  const travelers = bookingData.travelers || 1;
  
  return basePrice * travelers;
}