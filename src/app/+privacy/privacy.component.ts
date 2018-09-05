import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import { PrivacyService } from './privacy.service';
declare var $: any;

@Component({
    selector: 'privacy',
    templateUrl: 'privacy.component.html',
    styleUrls: ['./privacy.component.css']
})

export class PrivacyComponent implements OnInit, OnDestroy{
private dataUrl: string = '/assets/privacy-data.json';
private privacyHeader: any;
private privacyData: any;
private options: any = {
    animation: true,
    html: true,
    placement: 'right',
    trigger: 'focus'
}
private privacyList = [];

constructor(private _elementRef: ElementRef, private _privacyService: PrivacyService){}

ngOnInit(): void{
    this._privacyService.getPrivacyData(this.dataUrl).then((response) =>{
       // console.log('priv data=', response);
        this.privacyHeader = response[0];
        this.privacyData = response;
    }, (error) => { console.error('Privacy Error:', error);});
}

ngOnDestroy(): void{
 $(this._elementRef['nativeElement']).popover('destroy');
}

getPopoverContent(key): void {
    $('#'+this.removeSpaces(key)).popover(this.options).popover('toggle');
}

removeSpaces(key){
    if(!key){ return true;}
    return key.split(' ').join('');
}

formatHeader(key){
    if(!key){ return true;}
    return key.split('_').join(' ').toLowerCase();
}

sortList(value){
    if(this.privacyList.length === 0){ this.privacyList.push(value); } else {
        if(this.privacyList.indexOf(value)=== -1){ this.privacyList.push(value); } 
        else{ this.privacyList.splice(this.privacyList.indexOf(value), 1); }
    }
}

sortItem(key){
    for(let element of this.privacyList){ if(key.indexOf(element)!==-1){ return true; } }
}

}