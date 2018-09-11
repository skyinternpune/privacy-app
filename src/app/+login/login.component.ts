import { Component, OnInit } from '@angular/core';
declare const FB: any;

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private fbData = [];
    constructor() {
        FB.init({
            appId: '494423364407487', //firbase-494423364407487 //local- 2185254965024376
            cookie: false,
            xfbml: true,
            version: 'v3.1'
        });
    }

    ngOnInit(): void { }

    logIn(fieldValue) {
        FB.login((response: any) => {
            if (response.status === 'connected') {
                this.getProfileDetails(response.authResponse.userID, response.authResponse.accessToken, fieldValue);
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
            }

        }, { scope: 'public_profile,user_friends,email' });
    }

    getProfileDetails(userId, accessToken, fieldValue) {
        if (fieldValue === 'mock') {
            FB.api(
                "/" + userId + '?metadata=1',
                (result) => {
                    this.fbData = Object.entries(result);
                });
        } else {
            FB.api(
                "/" + userId + '?fields=id,name,first_name,email,gender,picture.width(150).height(150),age_range,friends',
                (result) => {
                    this.fbData = Object.entries(result);
                });
        }
    }

}