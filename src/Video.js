import { forwardRef, useImperativeHandle, useRef } from 'react';

import video1 from './videos/2023-06-14_@doublechou.dc_7244533516510170373.mp4';

function Video(prop, ref) {

    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play();
        },
        pause(){
            videoRef.current.pause();
        }
    }));

    return (
        <video
            ref={videoRef}
            width={280}
            src={video1}
            loop
        />
    )
}

export default forwardRef(Video);