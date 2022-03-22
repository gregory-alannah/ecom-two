import React from "react";

const Contact = () => {
  return (
    <div className="form-container">
      <div className="img-background">
        <form action="" className="submit-form">
          <h2 className="contact-request">Want More Information?</h2>
          <div id="error-message"></div>
          <p className="contact-text">
            Please submit the form below for further inquires
          </p>
          <hr className="underline" />
          <br />

          <label for="fullname">Full Name:</label>
          <input type="text" id="fullname" required />
          <br />

          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" required />
          <br />

          <label for="email">Email:</label>
          <input type="email" id="email" required />
          <br />
          <br />
          <label>
            Comment:
            <br />
            <textarea required></textarea>
          </label>
          <br />
          <input class="submit-button" type="submit" name="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
