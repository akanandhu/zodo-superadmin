import React from "react";
import BookingsCard from "../../Hospitals/TotalBookings/BookingsCard";
import { DatePicker } from "antd";
import TransactionTable from "../../Hospitals/Transactions/TransactionTable";

function DoctorsBookings() {
  const bookinsDetails = [
    {
      id: 1,
      bookings: "12,000",
      dueStatus: "",
      operation: "Total Bookings",
    },
    {
      id: 2,
      bookings: "5000",
      dueStatus: "",
      operation: "Total Fast Tag Booking",
    },
    {
      id: 3,
      bookings: "12",
      dueStatus: "No Dues",
      operation: "Cancellation",
    },
  ];
  return (
    <div>
      <div className="row mt-2">
        {bookinsDetails.map((item) => (
          <div
            key={item.id + item.operation}
            className="col-md-4 col-sm-6 col-lg-4 col-xl-4"
          >
            <BookingsCard data={item} />
          </div>
        ))}
      </div>

      <div className="card-box">
        <h5 className="text-black">Bookings</h5>
        <div className="row mt-4">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group local-forms cal-icon">
              <DatePicker
                className="form-control datetimepicker"
                // onChange={onChange}
                suffixIcon={null}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group local-forms">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group local-forms">
              <div className="outlined-btn form-control">Export</div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-black">{232} results found</h5>
        </div>

        <div className="table-responsive">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default DoctorsBookings;
