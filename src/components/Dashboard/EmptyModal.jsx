import React, { useState } from "react";

import { Modal, Typography, Button, Input, Textarea } from "neetoui";
import axios from "axios";
import { WEBHOOK_URL } from "../common/constants";

function EmptyModal({ showModal, setShowModal }) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const onSubmit = () => {
    axios.post(WEBHOOK_URL, {
      query: {
        name: nameValue,
        email: emailValue,
        message: messageValue,
      },
    });
  };
  return (
    <div className="w-full">
      <Modal
        size="lg"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        closeButton={false}
      >
        <Modal.Header>
          <div className="space-y-1">
            <Typography style="h2" className="font-semibold to-gray-800">
              Can't find what you came for?
            </Typography>
            <Typography className="to-gray-700 text-sm">
              Write to us about which category interests you and we will fetch
              them for you daily, for free.
            </Typography>
          </div>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="flex space-x-4 w-11/12 my-4">
              <Input
                label="Name"
                placeholder="Oliver Smith"
                name="name"
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
              />
              <Input
                label="Email"
                placeholder="oliver@example.com"
                name="email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
            </div>
            <Textarea
              className="w-11/12"
              label="Message"
              placeholder="Write your message here."
              name="message"
              value={messageValue}
              onChange={e => setMessageValue(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              label="Submit"
              type="submit"
              onClick={e => {
                e.preventDefault();
                onSubmit();
                setShowModal(false);
              }}
              size="large"
            />
            <Button
              style="text"
              label="Cancel"
              onClick={() => setShowModal(false)}
              size="large"
            />
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default EmptyModal;
