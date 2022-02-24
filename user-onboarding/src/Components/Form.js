import React from "react";

export default function Form(props) {
  const {change, submit, errors} = props
  const {name, email, password, terms} = props.values

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <div>
        <h1>New User Form</h1>
      <form className="form container" onSubmit={onSubmit}>
      <div className='errors'>
          <p>{errors.name}</p>
          <p>{errors.email}</p>
          <p>{errors.password}</p>
          <p>{errors.terms}</p>
        </div>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms and Conditions
          <input
            name="terms"
            type="checkbox"
            checked={terms}
            onChange={onChange}
          />
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
}
