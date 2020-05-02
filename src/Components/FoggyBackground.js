import React from 'react';

export default class FoggyBackground extends React.Component {
    componentDidMount() {
        const back = this.background;
        // this.effect = window.VANTA.FOG({
        //     el: back,
        //     highlightColor: 0x3884E9,
        //     midtoneColor: 0x004280,
        //     lowlightColor: 0xeeeeee,
        //     baseColor: 0xffffff,
        //     blurFactor: 0.25,
        //     speed: 1,
        //     zoom: 3
        // })
        this.effect = window.VANTA.FOG({
            el: back,
            highlightColor: 0xffffff,
            midtoneColor: 0xeeeeee,
            lowlightColor: 0xCBE0F8,
            baseColor: 0x3884E9,
            blurFactor: 0.26,
            speed: 0.2,
            zoom: 1.8
        })
        // this.effect = window.VANTA.FOG({
        //     el: back,
        //     highlightColor: 0x93C4D7,
        //     midtoneColor: 0xD8E2EA,
        //     lowlightColor: 0xffffff,
        //     baseColor: 0x004280,
        //     blurFactor: 0.2,
        //     speed: 1,
        //     zoom: 1.5
        // })
        // this.effect = window.VANTA.FOG({
        //     el: back,
        //     highlightColor: 0xCBE0F8,
        //     midtoneColor: 0xdddddd,
        //     lowlightColor: 0xffffff,
        //     baseColor: 0x7199EF,
        //     blurFactor: 0.2,
        //     speed: 1,
        //     zoom: 1.5
        // })
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
