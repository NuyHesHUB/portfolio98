import {useRef} from 'react';

export function useFullscreen(callback){
    const element = useRef();
    const runCb = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    };
    const exitFull = () => {
      const checkFullScreen = document.fullscreenElement;
      if (checkFullScreen !== null) {
        document.exitFullscreen();
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        runCb(false);
      }
    };
    return { element, triggerFull, exitFull };
  };


/* const onChange = (isFull) =>
console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen"); */
/* const { element, triggerFull, exitFull } = useFullscreen(onChange); */