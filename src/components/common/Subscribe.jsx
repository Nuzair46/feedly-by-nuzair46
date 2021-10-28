import React from "react";

import { Modal, Typography, Button, Input } from "neetoui";

import { ReactComponent as SubLogo } from "../../assets/SubImage.svg";

function Subscribe({ showSub, setShowSub }) {
  return (
    <div className="w-full">
      <Modal size="xs" isOpen={showSub} onClose={() => setShowSub(false)}>
        <Modal.Header>
          <div className="mb-3">
            <SubLogo />
          </div>
          <Typography style="h2" className="font-semibold text-gray-800">
            Subscribe to Feed.ly
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography className="text-sm text-gray-700">
            We don’t spam, but, we deliver the latest news in short.
          </Typography>
          <Input className="my-3" placeholder="oliver@example.com" />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Sign Up"
            onClick={() => setShowSub(false)}
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowSub(false)}
            size="large"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Subscribe;
