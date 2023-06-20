document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('#canvasCursor canvas');
    const context = canvas.getContext('2d');
    const colorPicker = document.getElementById('color-picker');
    const brushSize = document.getElementById('brush-size');
    const captureBtn = document.getElementById('capture-btn');
    const clearBtn = document.getElementById('clear-btn');
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  
    captureBtn.addEventListener('click', captureCanvas);
    clearBtn.addEventListener('click', clearCanvas);
  
    function startDrawing(e) {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      const size = parseInt(brushSize.value);
      const color = colorPicker.value;
      context.lineWidth = size;
      context.strokeStyle = color;
      context.lineCap = 'round';
  
      const x = e.offsetX;
      const y = e.offsetY;
  
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
  
      [lastX, lastY] = [x, y];
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
  
    function captureCanvas() {
      const image = canvas.toDataURL();
      const link = document.createElement('a');
      link.href = image;
      link.download = 'captura.png';
      link.click();
    }
  
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
  