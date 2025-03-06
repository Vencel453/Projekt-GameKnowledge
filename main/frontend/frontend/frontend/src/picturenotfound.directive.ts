import { Directive, Input, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: 'img[apppicturenotfound]',
    standalone: true
})

export class PictureNotFoundDirective {
    @Input() apppicturenotfound?: string;

    constructor(private el: ElementRef) {

    }

    @HostListener('error')
    loadPicturenotfound() {
        const img = this.el.nativeElement as HTMLImageElement;
        img.src = './picturenotfound.png';
        img.onerror = null;
    }
}