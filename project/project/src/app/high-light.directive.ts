import { Directive, OnChanges, ElementRef, SimpleChange,SimpleChanges, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnChanges {
    myelement:ElementRef;
    ngOnChanges(changes:SimpleChanges):void{
      if(changes.colortopaint)
      console.log(changes.previousValue);
      console.log(changes);
      this.myelement.nativeElement.style.backgroundColor=this.colortopaint;
    }
  @Input()
  colortopaint:string;

  constructor(x:ElementRef) {
    console.log(this.colortopaint);
    this.myelement=x;
   }
   @HostListener("mouseenter")
   onmooseenter(){this.myelement.nativeElement.style.border="solid green 10px"}

   @HostListener("mouseleave")
   leav(){this.myelement.nativeElement.style.border="solid green 0px"}
}
