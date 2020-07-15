import React, { Component } from "react";

import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div id="outer-contact">
                <div class="container padding-top-2">
                    <div class="row montserrat justify-content-center ">
                        General Inquiries
                    </div>
                    <div class="row montserrat justify-content-center italics ">
                        Please use the form below:
                    </div>
                    <form class="padding-top">
                        <label for="inputFName" class="montserrat content">Name *</label>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="inputFName" />
                                <label for="inputFName" class="montserrat content">First Name</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="inputLName" />
                                <label for="inputLName" class="montserrat content">Last Name</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail" class="montserrat content">Email *</label>
                            <input type="email" class="form-control" id="inputEmail"/>
                        </div>
                        <div class="form-group">
                            <label for="inputSubject" class="montserrat content">Subject *</label>
                            <input type="text" class="form-control" id="inputSubject"/>
                        </div>
                        <div class="form-group">
                            <label for="inputMessage" class="montserrat content">Message *</label>
                            <textarea class="form-control" id="inputMessage"/>
                        </div>
                        <div class="row d-flex justify-content-center padding-top padding-bottom">
                            <button type="submit" class="btn btn-light montserrat">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;