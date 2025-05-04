import React from 'react'

const Index = () => {
  return (
    <>
    {/* Header with navigation bar */}
    <header>
      <h1>Radiant College</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  
    {/* Main content area */}
    <main>
      {/* Section 1: Home */}
      <section id="home">
        <h2>Welcome to Radiant College</h2>
        <p>We provide top-quality education in IT, Science, and Management with a focus on innovation and real-world skills.</p>
      </section>
  
      {/* Section 2: About Us */}
      <section id="about">
        <h2>About Us</h2>
        <p>Radiant College was established in 2005 to deliver excellence in higher education. We have experienced faculty and modern infrastructure to support student growth.</p>
      </section>
  
      {/* Section 3: Courses */}
      <section id="courses">
        <h2>Our Courses</h2>
        <ul>
          <li>B.Tech in Information Technology</li>
          <li>B.Sc. in Computer Science</li>
          <li>Diploma in Web Development</li>
          <li>Certificate in Cyber Security</li>
        </ul>
      </section>
  
      {/* Section 4: Admissions */}
      <section id="admissions">
        <h2>Admissions</h2>
        <p>Admissions for 2025 are now open! Apply online or visit our campus. Scholarships are available based on merit and financial need.</p>
      </section>
  
      {/* Section 5: Contact Us */}
      <section id="contact">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required /><br /><br />
  
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required /><br /><br />
  
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" required></textarea><br /><br />
  
          <button type="submit">Send Message</button>
        </form>
        <p>📍 Address: Radiant College, Knowledge Park, YourCity</p>
        <p>📞 Phone: +91-9876543210</p>
        <p>📧 Email: info@radiantcollege.edu</p>
      </section>
    </main>
  
    {/* Back to Top Button */}
    <button id="backToTop">Top</button>
  
    {/* Footer section */}
    <footer>
      &copy; <span id="year"></span> Radiant College. All Rights Reserved.
    </footer>
  </>
  
  )
}

export { Index };
