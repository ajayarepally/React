function Contact() {
  return (
    <section className="section" id="contact">
      <h3>Contact</h3>
      <p><strong>Let's get in touch and talk about your next project.</strong></p>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Comment" rows="4"></textarea>
        <button type="submit">SEND MESSAGE</button>
      </form><br />
      <img src="https://www.w3schools.com/w3images/map.jpg" alt="map" />
    </section>
  );
}

export default Contact;
