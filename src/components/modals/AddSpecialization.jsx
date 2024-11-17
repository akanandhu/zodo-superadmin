import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";

function AddSpecialization(props) {
  const { show, setShow } = props;
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="hospital-modal-backdrop"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Specialisation</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <div className="form-group">
          <label className="col-form-label">Specialisation Name</label>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Specialisation Name"
            />
          </div>

          <label className="col-form-label col-md-4">Message</label>
          <div className="col-md-10">
            <textarea
              rows={5}
              cols={5}
              className="form-control"
              placeholder="Type the message here"
              defaultValue={""}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <button
          to="#"
        //   data-bs-toggle="modal"
        //   data-bs-target="#delete_invoices_details"
          className="btn hospital-draft-btn text-primary"
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
        <button
          to="#"
        //   data-bs-toggle="modal"
        //   data-bs-target="#save_invocies_details"
          className="btn hospital-add-btn ms-1 text-white"
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}

AddSpecialization.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
};

export default AddSpecialization;