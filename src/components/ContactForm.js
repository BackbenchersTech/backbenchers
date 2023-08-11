import * as React from 'react'
import {
  btn,
  formContainer,
  formFieldWrapper,
  formInput,
} from './ContactForm.module.scss'

export const ContactForm = ({ origin }) => (
  <div>
    <div className={formContainer}>
      <div className={formFieldWrapper}>
        <label htmlFor="name">Name*</label>
        <input className={formInput} id="name" type="text" />
      </div>

      <div className={formFieldWrapper}>
        <label htmlFor="email">Email*</label>
        <input className={formInput} id="email" type="email" />
      </div>

      <div className={formFieldWrapper}>
        <label htmlFor="email">Company*</label>
        <input className={formInput} id="email" type="text" />
      </div>

      <div className={formFieldWrapper}>
        <label htmlFor="message">Message*</label>
        <textarea className={formInput} id="message" />
      </div>
    </div>

    <button className={btn}>Submit</button>
  </div>
)
