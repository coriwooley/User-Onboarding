import React from "react";

export default function Form(props) {
  const { values, submit, change, errors } = props;

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
        <h2>New User Form</h2>
      <form className="form container" onSubmit={onSubmit}>
      <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="text"
            value={values.password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms and Conditions
          <input
            name="terms"
            type="checkbox"
            checked={values.terms}
            onChange={onChange}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
