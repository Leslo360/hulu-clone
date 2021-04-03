import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/LandingForm.module.css";
import ReCaptcha from "react-google-recaptcha";

const LandingForm = () => {
  return (
    <div className={styles.form}>
      <Form>
        <Form.Group controlId="ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="text"
            placeholder="John Smith"
          />
        </Form.Group>
        <Form.Group controlId="ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group controlId="ControlInput3">
          <Form.Label>Your Phone</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="tel"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="ControlSelect1">
          <Form.Label>Location interested in:</Form.Label>
          <Form.Control className={styles.formControl} as="select">
            <option>Dubai</option>
            <option>London</option>
            <option>Australia</option>
            <option>South Africa</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control className={styles.formControl} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="recaptcha">
          <ReCaptcha
            className={styles.captcha}
            sitekey="6LcWu5oaAAAAACQpFQwojwE2ZEh8KbwtN8OKofVb"
          />
        </Form.Group>
        <Form.Group controlId="btn">
          <Button variant="outline-secondary">Send</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LandingForm;
