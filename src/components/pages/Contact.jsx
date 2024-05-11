import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('user submission', form);

    // Reset form after submission
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div
      className="d-flex flex-column tab-pane fade show active w-50"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex="0">
      <h1>Contact</h1>
      <div className="border border-1 border-light rounded p-4">
        <form className="contactForm" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="nameInput"
              name="name"
              onChange={handleInputChange}
              placeholder="John Doe"
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              onChange={handleInputChange}
              placeholder="name@example.com"
              value={form.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="messageInput"
              name="message"
              onChange={handleInputChange}
              rows="3"
              value={form.message}></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
