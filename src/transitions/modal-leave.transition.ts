import { Animation, PageTransition } from 'ionic-angular';

export class ModalLeaveTransition extends PageTransition {

public init() {
    const ele = this.leavingView.pageRef().nativeElement;
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
    const contentWrapper = new Animation(this.plt, ele.querySelector('.wrapper'));
    const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));

    wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 1 });
    wrapper.fromTo('transform', 'scale(1)', 'scale(1.0)');
    wrapper.fromTo('opacity', 1, 0);
    contentWrapper.fromTo('opacity', 1, 0);
    backdrop.fromTo('opacity', 0.5, 0);

    this
        .element(this.leavingView.pageRef())
        .duration(150)
        .easing('cubic-bezier(.1, .7, .1, 1)')
        .add(contentWrapper)
        .add(wrapper)
        .add(backdrop);
}
}