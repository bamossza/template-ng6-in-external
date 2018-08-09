import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataRoute} from './iframe.interface';

@Component({
    selector: 'cpac-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit, OnDestroy {

    dataRoute: DataRoute = {} as DataRoute;
    pageUrlSubs: Subscription;

    constructor(private domSanitizer: DomSanitizer,
                private hostElement: ElementRef,
                private route: ActivatedRoute) {

        this.pageUrlSubs = route.data.subscribe(r => this.dataRoute = <DataRoute>r);
    }

    ngOnInit() {

    }

    pageURL() {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.dataRoute.url);
    }

    ngOnDestroy() {
        this.pageUrlSubs.unsubscribe();
    }

}
