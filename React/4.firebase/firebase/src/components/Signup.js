import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const SignUp = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
              <Form.Group id="email">
                <FormLabel>
                    
                </FormLabel>
              </Form.Group>
          </FormLabel>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Already have an account? Log In</div>
    </>
  );
};

export default SignUp;
