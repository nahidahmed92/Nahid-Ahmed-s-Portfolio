import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const formatPhoneNumber = (value) => {
    const removeSpace = ('' + value).replace(/\D/g, '');
    const phoneValue = removeSpace.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (phoneValue) {
      return `(${phoneValue[1]}) ${phoneValue[2]}-${phoneValue[3]}`;
    }
    return value;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = name === 'phone' ? formatPhoneNumber(value) : value;
    setForm({ ...form, [name]: formattedValue });
    // reset error when user types
    setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    // validate name field
    if (!form.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      valid = false;
    }

    // validate email field
    if (!form.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      valid = false;
    } else if (!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(form.email.trim())) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      valid = false;
    }

    if (!form.message.trim()) {
      // validate message field
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
      valid = false;
    }

    // valid form
    if (valid) {
      console.log('Form submitted:', form);

      // reset form after submission
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <div
      className="d-flex flex-column tab-pane fade show active"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex="0">
      <h1>Contact</h1>
      <div className="border border-1 border-light rounded p-4">
        <form className="contactForm row g-3" onSubmit={handleFormSubmit}>
          <div className="col-12">
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
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
          <div className="col-12">
            <label htmlFor="emailInput" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="emailInput"
              name="email"
              onChange={handleInputChange}
              placeholder="name@example.com"
              value={form.email}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="col-12">
            <label htmlFor="phoneInput" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneInput"
              maxLength="10"
              name="phone"
              onChange={handleInputChange}
              placeholder="(212) 222-3333"
              value={form.phone}
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>
          <div className="col-12">
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
            {errors.message && <div className="text-danger">{errors.message}</div>}
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
