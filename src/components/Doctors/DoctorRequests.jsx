import React, { useState } from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../Pagination";
import {
  blogimg10,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8,
  pdficon,
  pdficon3,
  pdficon4,
  // plusicon,
  // refreshicon,
} from "../imagepath";
function DoctorRequests() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const datasource = [
    {
      id: 1,
      Img: blogimg2,
      Name: "Andrea Lalema",
      Department: "Otolaryngology",
      Specialization: "Infertility",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 2,
      Img: blogimg4,
      Name: "Dr.Smith Bruklin",
      Department: "Urology",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 3,
      Img: blogimg6,
      Name: "Dr.William Stephin",
      Department: "Radiology",
      Specialization: "Cancer",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 4,
      Img: blogimg12,
      Name: "Bernardo James",
      Department: "Dentist",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 5,
      Img: blogimg10,
      Name: "Cristina Groves",
      Department: "Gynocolgy",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 6,
      Img: blogimg8,
      Name: "Mark Hay Smith",
      Department: "Gynocolgy",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 7,
      Img: blogimg2,
      Name: "Andrea Lalema",
      Department: "Otolaryngology",
      Specialization: "Infertility",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
    {
      id: 8,
      Img: blogimg4,
      Name: "Dr.Smith Bruklin",
      Department: "Urology",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      FIELD9: "",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link
              to={`/manage-doctors/${record.id}`}
              className="avatar avatar-sm me-2"
            >
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to={`/manage-doctors/${record.id}`}>{record.Name}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a, b) => a.Department.length - b.Department.length,
    },
    {
      title: "Specialization",
      dataIndex: "Specialization",
      sorter: (a, b) => a.Specialization.length - b.Specialization.length,
    },
    {
      title: "Degree",
      dataIndex: "Degree",
      sorter: (a, b) => a.Degree.length - b.Degree.length,
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
      render: (text, record) => (
        <>
          <Link to="#">{record.Mobile}</Link>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "Action",
      dataIndex: "FIELD8",
      render: () => (
        <>
          <button className="btn hospital-draft-btn rounded-pill text-primary ps-3 pe-3">
            view
          </button>
        </>
      ),
    },
  ];
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-table show-entire">
          <div className="card-body">
            {/* Table Header */}
            <div className="page-table-header mb-2">
              <div className="row align-items-center">
                <div className="col-12  col-md-1">
                  <div className="doctor-table-blk">
                    <h3>Doctors Requests</h3>
                  </div>
                </div>
                <div className="col-12 col-md-3 ms-md-5">
                  <div className="doctor-list-search ms-md-4">
                    <div className="search-container">
                      <SearchBox />
                    </div>
                  </div>
                </div>

                <div className="col-md-auto text-end float-md-end ms-auto download-grp mt-3 mt-md-0">
                  <Link to="#" className=" me-2">
                    <img src={pdficon} alt="#" />
                  </Link>
                  <Link to="#" className=" me-2"></Link>
                  <Link to="#" className=" me-2">
                    <img src={pdficon3} alt="#" />
                  </Link>
                  <Link to="#">
                    <img src={pdficon4} alt="#" />
                  </Link>
                </div>
              </div>
            </div>
            {/* /Table Header */}
            <div className="table-responsive doctor-list">
              <Table
                pagination={{
                  total: datasource.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  // showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                columns={columns}
                dataSource={datasource}
                rowSelection={rowSelection}
                rowKey={(record) => record.id}
                style={{
                  backgroundColor: "#f2f2f2", // Replace with your desired background color for the table
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRequests;