import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button, TextField } from "@material-ui/core";
import styles from "../styles/LandingForm.module.css";
import ReCaptcha from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import axios from "axios";
import Rellax from "rellax";

const LandingForm = ({ location }) => {
  useEffect(() => {
    var rellax = new Rellax(".rellax");
  }, []);

  const { register, handleSubmit, errors, reset } = useForm();

  async function submitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.data.status === 200) {
        console.log("Success");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.form}>
      <Form
        onSubmit={handleSubmit(submitForm)}
        className="rellax"
        data-rellax-speed="2"
      >
        <Form.Group controlId="ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="text"
            required="required"
            {...register("name", {
              required: {
                value: true,
                message: "You must enter your name",
              },
            })}
            placeholder="John Smith"
          />
        </Form.Group>
        <Form.Group controlId="ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="email"
            required="required"
            {...register("email", {
              required: {
                value: true,
                message: "You must enter your email",
              },
              minLength: {
                value: 8,
                message: "This is not long enough to be a valid email",
              },
              maxLength: {
                value: 120,
                message: "This is too long ",
              },
            })}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group controlId="ControlInput3">
          <Form.Label>Your Phone</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="tel"
            {...register("phone")}
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="ControlSelect1">
          <Form.Label>Location interested in:</Form.Label>
          <Form.Control
            className={styles.formControl}
            as="select"
            {...register("location")}
          >
            {[location].map((option) => (
              <option>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            className={styles.formControl}
            as="textarea"
            rows={1}
            required="required"
            {...register("message", {
              required: {
                value: true,
                message: "Let us know how we can help you",
              },

              maxLength: {
                value: 1000,
                message: "Your message can't be longer than 1000 characters ",
              },
            })}
          />
        </Form.Group>
        <Form.Group controlId="recaptcha">
          <ReCaptcha
            className={styles.captcha}
            sitekey="6LcWu5oaAAAAACQpFQwojwE2ZEh8KbwtN8OKofVb"
          />
        </Form.Group>
        <Form.Group controlId="btn">
          <Button variant="outline-secondary" type="submit">
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LandingForm;
