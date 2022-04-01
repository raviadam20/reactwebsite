import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            };
        })
    };
    const FormSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My phone number is ${data.phone}. my email id is ${data.email}. and The message is ${data.message}`);
    };

    return (
        <>
            <div className="my-5 m-lg-0 p-lg-2">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={FormSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label ">Full Name</label>
                                <input type="text" className="form-control" required id="exampleFormControlInput1" name="fullname"
                                    value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="text" className="form-control" required id="exampleFormControlInput1" name="phone"
                                    value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">E-mail Address</label>
                                <input type="email" className="form-control" required id="exampleFormControlInput1" name="email"
                                    value={data.email} onChange={InputEvent} placeholder="Enter Your E-mail" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" required id="exampleFormControlTextarea1" name="message"
                                    value={data.message} onChange={InputEvent} placeholder="Enter Here" rows="3"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit Form
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;