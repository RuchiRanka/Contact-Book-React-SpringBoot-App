import React, { useRef } from 'react'

export default function AddContacts() {

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);

    const submitContact = (e) => {
        e.preventDefault();

        let contact = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
        };

        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then(response => response.json())

        window.location.reload();
    };

    return (
        <div className="row">
          <form className="col s12" onSubmit={ submitContact }>
            <div className="row">
              <div className="input-field col s6">
                <input ref={firstNameRef} type="text" className="validate" />
                <label htmlFor="firstName">First Name</label>
              </div>

              <div className="input-field col s6">
                <input ref={lastNameRef} type="text" className="validate" />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input ref={emailRef} type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
            </div>

            <div className="row">
                <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
            </div>
          </form>
        </div>
    )
}
