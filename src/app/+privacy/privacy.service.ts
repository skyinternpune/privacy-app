import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PrivacyService {
    constructor(private _http: Http) { }

    getPrivacyData(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this._http.get(url).subscribe((response) => {
                resolve(response.json());
            }, (error) => { reject(error); })
        });
    }
}