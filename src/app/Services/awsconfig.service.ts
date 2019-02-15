import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';



const env = require('../config/aws.env.js');
var AWS = require('aws-sdk');
var IAM =require('aws-sdk/clients/iam');

var S3 =require('aws-sdk/clients/s3');
 
//AWS.config.update({"accessKeyId": env.AWS_ACCESS_KEY, "secretAccessKey": env.AWS_SECRET_ACCESS_KEY, "region": env.REGION});

@Injectable({
  providedIn: 'root'
})


export class AwsconfigService {
	
AccessKey="";
SecretAccessKey="";
Region="";

awsconfig: BehaviorSubject<boolean>;

  constructor() { 
  this.awsconfig = new BehaviorSubject<boolean>(false);
  }

 //config = false;






public getconfig(): Observable<boolean> {
	
    return this.awsconfig.asObservable();
	
}

public setconfig(newValue: boolean): void {
    this.awsconfig.next(newValue);
}

changeconfig(){
	
	AWS.config.update({"accessKeyId": this.AccessKey, "secretAccessKey": this.SecretAccessKey, "region": this.Region});
	
	console.log(this.AccessKey+this.SecretAccessKey+this.Region);
	
}



getiamusers(){
	
	
	var iam = new IAM();
	
 var params = {
 };
 iam.listUsers(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   
 });
}


createiamuser(){
	var iam = new IAM();
var params = {
  UserName: "Bob"
 };
 iam.createUser(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    User: {
     Arn: "arn:aws:iam::123456789012:user/Bob", 
     CreateDate: <Date Representation>, 
     Path: "/", 
     UserId: "AKIAIOSFODNN7EXAMPLE", 
     UserName: "Bob"
    }
   }
   */
 });
}

gets3buckets(){
var s3 = new S3();

var params = {};
 s3.listBuckets(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 }
}


getec2securitygroups(){
	var EC2 =require('aws-sdk/clients/ec2');
var ec2 = new AWS.EC2();
var params = {
  MaxResults: 10
 };
 ec2.describeSecurityGroups(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
   }
   */
 });
}

}
