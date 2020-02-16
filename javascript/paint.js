window.onload = function () {
  (() => {
    
    $('#canvas').before("<button id='pencil' type='button'>Pencil</button>");
    $('#canvas').before('<select id="size"><option value="3">small</option><option value="5">medium</option><option value="12">large</option></select>');
    $('#canvas').before("<button id='eraser' type='button'>Eraser</button>");
    $('#canvas').before("<button id='line' type='button'>Line</button>");
    $('#canvas').before("<button id='rectangle' type='button'>Rectangle</button>");
    $('#canvas').before("<button id='circle' type='button'>Circle</button>");
    $('#canvas').before("<button id='clear' type='button'>Clear</button>");
    $('#canvas').before("<label>Background: </label><input  id='inputbackground' type='color' value='#faf7f7'>");
    $('#canvas').before("<label>Color: </label><input  id='inputcolor' type='color'>");
    $('#canvas').after("<button id='save' type='button'>Save</button>");
    

      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {

          var ctx = canvas.getContext('2d');
          var painting = document.getElementById('content'); 
          var paintStyle = getComputedStyle(painting);
          canvas.width = parseInt(paintStyle.getPropertyValue('width'));
          canvas.height = parseInt(paintStyle.getPropertyValue('height'));
          
          var mouse = { x : 0, y : 0};
          
          $('#pencil').click(function() {

            canvas.onmousemove = function paintmove(e) {
              mouse.x = e.pageX - this.offsetLeft;
              mouse.y = e.pageY - this.offsetTop;
            }, false;
  
            // define properties for the painting zone
  
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = "#000000";
  
            canvas.onmousedown = function paintdown(e) {
  
            //drawing the current path on the canvas

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            canvas.addEventListener('mousemove', onPaint, false);
            }, false;
  
            canvas.onmouseleave = function paintup() {

              canvas.removeEventListener('mousemove', onPaint, false);
            }, false;
  
            var onPaint = function() {

              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();

            }
            
          })

          // Change the color

          $('#inputcolor').change(function() {

            color = document.getElementById("inputcolor").value;
            ctx.strokeStyle = color;

          });

          // Change the background

          $('#inputbackground').change(function() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            background = document.getElementById("inputbackground").value;
            canvas.style.backgroundColor = background;

          });

          // Clear canvas

          $('#clear').click(function() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

          });


          //eraser

          $('#eraser').click(function() {

            background = document.getElementById("inputbackground").value;
            ctx.strokeStyle = background;

          });

          //Fontsize

          $('#size').click(function () {

            size = document.getElementById("size").value;
            ctx.lineWidth = size;
            
        });

        //Save

        $("#save").click(function()  {

          var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
          window.location.href=image;

        });

        //Circle

        $("#circle").click(function()  {

          alert('tool under construction')
        });


        //Line

        $("#line").click(function()  {

          alert('tool under construction')
        });

        //Rectangle

        $("#rectangle").click(function()  {

          alert('tool under construction')
        });


      }

	})();
}