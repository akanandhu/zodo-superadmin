import React from "react";
import BookingsCard from "./BookingsCard";

function TotalBookings() {
  const bookinsDetails = [
    {
      id: 1,
      bookings: "12,000",
      operation: "Total Bookings",
    },
    {
      id: 2,
      bookings: "5000",
      operation: "Total Fast Tag Booking",
    },
    {
      id: 3,
      bookings: "12",
      operation: "Cancellation",
    },
  ];
  return (
    <div className="row mt-2">
      {bookinsDetails.map((item) => (
        <div key={item.id + item.operation} className="col-md-4 col-sm-6 col-lg-4 col-xl-4">
          <BookingsCard data={item} />
        </div>
      ))}
    </div>
  );
}

export default TotalBookings;