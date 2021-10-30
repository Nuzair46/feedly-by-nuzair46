import React from "react";

import { Modal, Typography, Button, Input as FormikInput } from "neetoui";

import { Form, Formik } from "formik";

import { ReactComponent as SubLogo } from "../../assets/SubImage.svg";

function Subscribe({ showSub, setShowSub }) {
  const onSubmit = email => {
    console.log(email);
  };

  return (
    <div className="w-full">
      <Modal size="xs" isOpen={showSub} onClose={() => setShowSub(false)}>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={onSubmit}
          validator={() => ({})}
        >
          {({ handleSubmit }) => (
            <Form>
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
                <FormikInput
                  className="mt-3"
                  name="email"
                  type="email"
                  placeholder="oliver@example.com"
                />
              </Modal.Body>
              <Modal.Footer className="space-x-2">
                <Button
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    handleSubmit();
                    setShowSub(false);
                  }}
                  label="Sign Up"
                  size="large"
                />
                <Button
                  style="text"
                  label="Cancel"
                  onClick={() => setShowSub(false)}
                  size="large"
                />
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default Subscribe;
