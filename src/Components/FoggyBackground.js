import React from 'react';

export default class FoggyBackground extends React.Component {
    componentDidMount() {
        const back = this.background;
        this.effect = window.VANTA.FOG({
            el: back,
            highlightColor: 0xffffff,
            midtoneColor: 0x3884E9,
            lowlightColor: 0xaaaaaa,
            baseColor: 0xffffff,
            blurFactor: 0.5,
            speed: 0.25,
            zoom: 1.25
        })
    }
    componentWillUnmount() {
        if (this.effect) this.effect.destroy()
    }
    render() {
        return (
            <div className='background'
                ref={background => {
                    this.background = background;
                }}>
            </div>
        );
    }
}
