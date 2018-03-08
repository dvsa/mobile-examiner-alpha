import { Animation, PageTransition } from 'ionic-angular';

export class ModalEnterTransition extends PageTransition {

public init() {
    const ele = this.enteringView.pageRef().nativeElement;
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
    const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));

    wrapper.beforeStyles({ 'transform': 'scale(1.0)', 'opacity': 1.0 });
    wrapper.fromTo('transform', 'scale(0.9)', 'scale(1.0)');
    wrapper.fromTo('opacity', 0, 1.0);
    backdrop.fromTo('opacity', 0, 0.5);

    this
        .element(this.enteringView.pageRef())
        .duration(150)
        .easing('cubic-bezier(.1, .7, .1, 1)')
        .add(wrapper)
        .add(backdrop);
}
}