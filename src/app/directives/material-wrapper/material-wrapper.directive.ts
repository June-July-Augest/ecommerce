import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, ComponentFactoryResolver, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appMaterialWrapper]'
})
export class MaterialWrapperDirective implements OnInit {
  @Input('appMaterialWrapper') wrapperConfig!: { title: string, buttonLabel: string, useWrapper: boolean };

  constructor(
    private templateRef: TemplateRef<any>, 
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Clear previous views to avoid duplicates
    this.vcr.clear();

    // Check if Material Wrapper should be applied
    if (this.wrapperConfig?.useWrapper) {
      // Dynamically create Material Wrapper
      const wrapperElement = this.renderer.createElement('app-material-wrapper');
      this.renderer.setAttribute(wrapperElement, 'title', this.wrapperConfig.title);
      this.renderer.setAttribute(wrapperElement, 'buttonLabel', this.wrapperConfig.buttonLabel);

      // Append the template content inside the wrapper
      const embeddedView = this.templateRef.createEmbeddedView({});
      embeddedView.rootNodes.forEach(node => {
        this.renderer.appendChild(wrapperElement, node);
      });

      // Use ViewContainerRef to insert the wrapped content
      this.vcr.element.nativeElement.appendChild(wrapperElement);
    } else {
      // Directly render the template if no wrapper is needed
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
