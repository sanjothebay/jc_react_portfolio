import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./ContactmeElements";

function ContactMe() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">JC</Icon>
          <FormContent>
            <Form action="https://formsubmit.co/sanjothebay@gmail.com" method="POST">
              <FormH1>Contact me Here!</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" name="name" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput type="message" name="message" required />
              <FormButton type="submit">Submit</FormButton>
              <Text>Thank You!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default ContactMe;
