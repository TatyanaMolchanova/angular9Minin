import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue';
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};
    // @Input() fontWeight = 'normal';
    constructor(private el: ElementRef, private r: Renderer2) {
        // this.r.setStyle(this.el.nativeElement, 'color', 'blue'); // good practice more abstractional
        // el.nativeElement.style.color = 'red'; //bad practice
        // console.log(el);
    }
    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event);
    }
    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', this.color);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
        this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
        this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
        // console.log('this.r', this.r);
        // console.log('this.fontWeight', this.fontWeight);
    }
    // @HostListener('mouseenter') onEnter() {
    //     this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    // }
    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
        this.r.setStyle(this.el.nativeElement, 'border', null);
        this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    }

    // @HostListener('click', ['$event']) onClick(event: Event) {
    //     console.log(event);
    // }
}
