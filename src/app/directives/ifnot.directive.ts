import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      //show elements
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // hide elements
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
