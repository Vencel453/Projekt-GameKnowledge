//Szükséges importok és angular direktíva
import { Directive, Input, HostListener, ElementRef } from "@angular/core";

//egyéni direktíva definiálása
@Directive({
    selector: 'img[apppicturenotfound]',    //Azokat az img tag-eket célozza amelyekre bevan állítva az apppicturenotfound attríbútum
    standalone: true       //Standalone direktíva definiálása
})

export class PictureNotFoundDirective {
    //Lehetővé tesszük hogy kívülről értéket kaphasson a direktíva
    @Input() apppicturenotfound?: string;

    //Injektáljuk az ElementRef-et a DOM elem hozzáféréséhez amelyhez a direktíva hozzá van rendelve
    constructor(private el: ElementRef) {

    }

    //Esemény figyelő mely nézi az error eseményt
    @HostListener('error')
    loadPicturenotfound() {
        //Ha error van akkor elérjük a képet ahol baj van, és helyettesítjük egy egyedi képpel
        const img = this.el.nativeElement as HTMLImageElement;
        img.src = './picturenotfound.png';
        img.onerror = null;
    }
}