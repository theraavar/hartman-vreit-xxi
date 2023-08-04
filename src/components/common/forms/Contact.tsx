"use client"

import styles from './Contact.module.css'
import { useState } from 'react'
import Set from './inputs/Set'

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
}
const initialErrors = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}
const Contact = () => {

    const [values, setValue] = useState(initialValues)
    const [message, setMessage] = useState("")
    const [errors] = useState(initialErrors)
    const [sent, isSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValue({
            ...values, [name]: value,
        });
    }
    const validate = () => {
        let isValid = true
        if (!values.firstName.trim()) {
            errors.firstName = "First name is required."
            isValid = false
        } else {
            errors.firstName = ""
        }
        if (!values.lastName.trim()) {
            errors.lastName = "Last name is required."
            isValid = false
        } else {
            errors.lastName = ""
        }
        if (!values.email.trim()) {
            errors.email = "Email address is required."
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address provided."
            isValid = false
        } else {
            errors.email = ""
        }
        return isValid
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validate()) {
            if (!sent) {
                //Handle our data in here.
                isSent(true)
            }
        }
    }

    /* Once they send the form, this will appear instead. */
    if (sent) {
        return (
            <div className={styles.form}>
                <h3>Your message has been sent!</h3>
            </div>
        )
    }
    /* This is our form that appears on the page. */
    return (
        <form className={styles.form}
            onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <div className={styles.group}>
                <Set
                    error={errors.firstName}
                    htmlFor='firstName'
                    id='firstName'
                    label='First Name'
                    name='firstName'
                    onChange={handleChange}
                    placeholder='What is your first name?'
                    value={values.firstName}
                />
                <Set
                    error={errors.lastName}
                    htmlFor='lastName'
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    placeholder='What is your last name?'
                    value={values.lastName} />
            </div>
            <Set
                error={errors.email}
                htmlFor='email'
                id='email'
                label='Email Address'
                name='email'
                onChange={handleChange}
                placeholder='What is your email address?'
                type2='email'
                value={values.email} />
            <div className={styles.wrapper}>
                <label className={styles.label}
                    htmlFor='message'>
                    Message
                </label>
                <textarea className={styles.textarea}
                    id='message'
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='What is your inquiry?'
                    value={message} />
            </div>
            <button className={styles.button}
                type="submit">
                Submit
            </button>
        </form>
    )
}
export default Contact