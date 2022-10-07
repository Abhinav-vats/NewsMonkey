import React, { Component } from 'react'

export default class RegisterUser extends Component {
    render() {
        return (
            <div>
                <section className="text-center text-lg-start">
                    <div className="container py-1">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card cascading-right" style={{ "background": "hsla(0, 0%, 100%, 0.55)", "backdrop-filter": "blur(30px)" }}>
                                    <div className="card-body p-5 shadow-5 text-center">
                                        <h2 className="fw-bold mb-5">Sign up now</h2>
                                        <form>
                                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" />
                                                        <label className="form-label" for="form3Example1">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" />
                                                        <label className="form-label" for="form3Example2">Last name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" />
                                                <label className="form-label" for="form3Example3">Email address</label>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" />
                                                <label className="form-label" for="form3Example4">Password</label>
                                            </div>

                                            {/* <!-- Checkbox --> */}
                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                                <label className="form-check-label" for="form2Example33">
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Sign up
                                            </button>

                                            {/* <!-- Register buttons --> */}
                                            {/* <div className="text-center">
                                                <p>or sign up with:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img src="https://images.unsplash.com/photo-1579064211320-66c8ed1cd426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=387&h=2000&q=80" className="w-100 rounded-4 shadow-4"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Jumbotron --> */}
                </section>

            </div>
        )
    }
}
