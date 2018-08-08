import {Component, ElementRef, OnDestroy, Renderer2} from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'cpac-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

    externalLink = false;
    subs: Subscription;

    constructor(private renderer: Renderer2, private el: ElementRef, private route: ActivatedRoute) {
        this.subs = route.queryParams.subscribe(r => {
            const $container = $('div.main-container-fluid');
            if (r['el'] === 'y') {
                this.externalLink = true;
                $container.removeClass('container-fluid');
                $container.addClass('container-fluid-custom');
            } else {
                this.externalLink = false;
                $container.removeClass('container-fluid-custom');
                $container.addClass('container-fluid');
            }
        });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
