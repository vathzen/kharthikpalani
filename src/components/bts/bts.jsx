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

var photos = [];

function constructUrl(arg){
    return 'https://kpweb.s3.ap-south-1.amazonaws.com/' + arg
}

class BTS extends Component{

    componentDidMount(){
        s3.listObjects({Delimiter:'/'}, function(err,data){
            if(err){
                console.log(err)
            }
            else{
                for (let index = 0; index < data.Contents.length; index++) {
                    photos.push({'src':constructUrl(data.Contents[index].Key),'width':2,'height':2});
                }
            }
        });
    }

    render(){
        return(
            <div id="bts-page">
                <div class="container padding-top">
                    <div class="row montserrat content-title font-white d-flex justify-content-center margin-bottom">BEHIND THE SCENES</div>
                    <Gallery photos={photos} />
                </div>
            </div>
        )
    }
}

export default BTS;