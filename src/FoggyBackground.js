import React from 'react';

export default class FoggyBackground extends React.Component {
    componentDidMount() {
        const back = this.background;
        this.effect = window.VANTA.FOG({
            el: back,
            highlightColor: 0xffffff,
            midtoneColor: 0x555555,
            lowlightColor: 0xbbbbbb,
            baseColor: 0xffffff,
            blurFactor: 0.42,
            speed: 0.42,
            zoom: 1
        })
    }
    componentWillUnmount() {
        if (this.effect) this.effect.destroy()
    }
    render() {
        return <div
                    ref={background => {
                        this.background = background;
                    }}>
                </div>
    }
}