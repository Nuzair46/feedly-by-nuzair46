import React from "react";

import { Modal, Typography, Button, Input, Textarea } from "neetoui";

function EmptyModal({ showModal, setShowModal }) {
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
        <Modal.Body>
          <div className="flex space-x-4 w-11/12 my-4">
            <Input label="Name" placeholder="Oliver Smith" />
            <Input label="Email" placeholder="oliver@example.com" />
          </div>
          <Textarea
            className="w-11/12"
            label="Message"
            placeholder="Write your message here."
          />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Submit"
            onClick={() => setShowModal(false)}
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
            size="large"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmptyModal;
