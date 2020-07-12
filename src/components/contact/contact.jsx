import React, { Component } from "react";

import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div id="outer-contact">
                <div class="container padding-top-2">
                    <div class="row montserrat justify-content-center font-white">
                        General Inquiries
                    </div>
                    <div class="row montserrat justify-content-center italics font-white">
                        Please use the form below:
                    </div>
                    <form class="padding-top">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputFName" class="montserrat font-white">First Name</label>
                                <input type="text" class="form-control" id="inputFName" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputLName" class="montserrat font-white">Last Name</label>
                                <input type="text" class="form-control" id="inputLName" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail" class="montserrat font-white">Email</label>
                            <input type="email" class="form-control" id="inputEmail"/>
                        </div>
                        <div class="form-group">
                            <label for="inputSubject" class="montserrat font-white">Subject</label>
                            <input type="text" class="form-control" id="inputSubject"/>
                        </div>
                        <div class="form-row">
                            <label for="inputMessage" class="montserrat font-white">Message</label>
                            <textarea class="form-control" id="inputMessage"/>
                        </div>
                        <div class="row d-flex justify-content-center padding-top">
                            <button type="submit" class="btn btn-outline-light montserrat">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;