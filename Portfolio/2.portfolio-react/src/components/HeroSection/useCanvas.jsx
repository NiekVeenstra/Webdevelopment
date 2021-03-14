import { useRef, useEffect } from "react";

const useCanvas = (draw) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    function resizeCanvasToDisplaySize(canvas) {
      const { width, height } = canvas.getBoundingClientRect();

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true; // here you can return some usefull information like delta width and delta height instead of just true
        // this information can be used in the next redraw...
      }

      return false;
    }

    function resizeCanvas(canvas) {
      const { width, height } = canvas.getBoundingClientRect();

      if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window;
        const context = canvas.getContext("2d");
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        context.scale(ratio, ratio);
        return true;
      }

      return false;
    }

    const render = () => {
      console.log("oh noo");
      frameCount++;
      draw(context, frameCount, canvas);
      animationFrameId = window.requestAnimationFrame(render);

      resizeCanvasToDisplaySize(canvas);
      resizeCanvas(canvas);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
