import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! we'll be in touch.`);
  };

  return (
    <section
      className="container"
      style={{
        maxWidth: "80%",
      }}
    >
      <h1 className={styles.title}>Get in Touch</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
          />
        </label>
        <button type="submit" className="button button-primary">
          Send
        </button>
      </form>
    </section>
  );
}
