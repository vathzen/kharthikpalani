import React, { Component } from 'react'
import AWS from 'aws-sdk';
import Gallery from 'react-photo-gallery';

import './bts.css'

AWS.config.region = 'ap-south-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-south-1:bc6ec6e1-95c9-4df1-953a-7bc9e83e9d5e',
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'kpweb'}
});


function constructUrl(arg){
    return 'https://kpweb.s3.ap-south-1.amazonaws.com/' + arg
}

class BTS extends Component{

    constructor(props){
        super(props);
        this.state = {
            photos : []
        }
    }

    handleData = (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            let newPhotos = [];
            for (let index = 0; index < data.Contents.length; index++) {
                newPhotos.push({'src':constructUrl(data.Contents[index].Key),'width':4,'height':3});
            }
            this.setState({photos:newPhotos});
        }
    }

    componentDidMount(){
        s3.listObjects({Delimiter:'/'}, this.handleData);
    }

    render(){
        return(
            <div id="bts-page">
                <div class="container-fluid padding-top" id="photo-grid">
                    <div class="row montserrat content-title d-flex justify-content-center margin-bottom">BEHIND THE SCENES</div>
                    <Gallery photos={this.state.photos}/>
                </div>
            </div>
        )
    }
}

export default BTS;