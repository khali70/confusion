import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const MaxLength = (len) => (val) => !val || val.length <= len;
const MinLength = (len) => (val) => val && val.length >= len;

function DishdetailComponent({ addComment, dishId }) {
  const [modal, toggleModalState] = useState(() => {
    return { isModalOpen: false };
  });
  const toggleModal = () => {
    toggleModalState({ isModalOpen: !modal.isModalOpen });
  };
  const handleSubmit = (values) => {
    toggleModal();
    alert(JSON.stringify(values));
    addComment(dishId, values.rating, values.name, values.comment);
  };
  return (
    <>
      <Button color="secondary" outline onClick={toggleModal}>
        <i class="fa fa-pencil"></i>
        Submit Comment
      </Button>
      <Modal isOpen={modal.isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="rating" xs={12}>
                Rating
              </Label>
              <Col xs={12}>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                  required
                  validators={{
                    required,
                  }}
                >
                  <option disabled selected>
                    Rating
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".rating"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="name" xs={12}>
                Your Name
              </Label>
              <Col xs={12}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: MinLength(3),
                    maxLength: MaxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" xs={12}>
                Your Comment
              </Label>
              <Col xs={12}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col xs={12}>
                <Button type="submit" color="primary" block>
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  );
}

export default DishdetailComponent;
