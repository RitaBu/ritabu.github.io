   
Blockly.Blocks['spalva'] = {
  init: function() {
    this.appendValueInput("spalva")
        .setCheck(null)
        .appendField("Burtu krāsa");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['spalva'] = function(block) {
  var value_spalva = Blockly.JavaScript.valueToCode(block, 'spalva', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
    var code = 'ctx.strokeStyle='+ value_spalva+';\n';
  return code;
};
 
 Blockly.Blocks['storis'] = {
  init: function() {
    this.appendValueInput("storis")
        .appendField("Līnijas biezums")
        .setCheck(null)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['storis'] = function(block) {
  var value_storis = Blockly.JavaScript.valueToCode(block, 'storis', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code = 'ctx.lineWidth='+value_storis+';\n';
  return code;
};

 Blockly.Blocks['kvadratas'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Rāmis")
         this.setInputsInline(false);
         this.setNextStatement(true, null);
         this.setColour(0);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['kvadratas'] = function(block) {
     var code = 'ctx.beginPath();\n ctx.strokeStyle="black";\n ctx.lineWidth=3;\n ctx.lineJoin = "round";\n ctx.lineCap = "round";\n ctx.rect(150,100,100,100);\n ctx.stroke();\n';

     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };


 Blockly.Blocks['raide_A'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts A")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_A'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(150, 200);\n ctx.moveTo(200, 100);\n ctx.lineTo(250, 200);\n ctx.stroke(); \n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
 

  Blockly.Blocks['raide_Ā'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ā")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ā'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(150, 200);\n ctx.moveTo(200, 100);\n ctx.lineTo(250, 200);\n ctx.moveTo(170, 90); ctx.lineTo(230, 90); ctx.stroke();\n';
    
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
   Blockly.Blocks['raide_B'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts B")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_B'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(230, 100);\n ctx.lineTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.lineTo(230, 200);\n ctx.moveTo(150, 150);\n ctx.lineTo(230, 150);\n ctx.lineTo(250, 125);\n ctx.lineTo(230, 100);\n ctx.moveTo(230, 150);\n ctx.lineTo(250, 175);\n ctx.lineTo(230, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_C'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts C")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_C'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.arc(' + 200 + ',' + 150 + ',50, 7, 1.7 * Math.PI);\n ctx.stroke();\n';

     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_CH'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts CH")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_CH'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.arc(' + 200 + ',' + 150 + ',50, 7, 1.7 * Math.PI);\n ctx.stroke();\n ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.moveTo(250, 100);\n ctx.lineTo(250, 200);\n ctx.moveTo(150, 150);\n ctx.lineTo(250, 150);\n ctx.stroke();\n';


     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

  Blockly.Blocks['raide_Č'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Č")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Č'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.arc(' + 200 + ',' + 150 + ',50, 7, 1.7 * Math.PI);\n ctx.moveTo(170, 90);\n ctx.lineTo(230, 90);\n ctx.stroke();\n';
     
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
  Blockly.Blocks['raide_D'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts D")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_D'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(220, 100);\n ctx.lineTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.lineTo(220, 200);\n ctx.lineTo(250,150);\n ctx.lineTo(220,100);\n ctx.stroke();\n';
     
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_E'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts E")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };

 Blockly.JavaScript['raide_E'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(250, 100);\n ctx.lineTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.lineTo(250, 200);\n ctx.moveTo(150, 150);\n ctx.lineTo(250, 150);\n ctx.stroke();\n';
// interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 //  Blockly.Blocks['raide_Ę'] = {
 //     // draw a line from current position to x,y
 //     init: function() {
 //         this.appendDummyInput()
 //             .appendField("Burts Ę")
 //         this.setInputsInline(false);
 //         this.setPreviousStatement(true, null);
 //         this.setNextStatement(true, null);
 //         this.setColour(260);
 //         this.setTooltip("");
 //         this.setHelpUrl("");
 //     }
 // };

 // Blockly.JavaScript['raide_Ę'] = function(block) {
 //     //.arc(x, y, radius, startAngle, endAngle)
 //     var x = block.getFieldValue('XPOS');
 //     var y = block.getFieldValue('YPOS');
 //     var code = 'ctx.beginPath();\n ctx.moveTo(250, 100);\n ctx.lineTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.lineTo(250, 200);\n ctx.moveTo(150, 150);\n ctx.lineTo(250, 150);\n ctx.moveTo(250, 200);\n ctx.lineTo(250, 210);\n ctx.lineTo(260, 210);\nctx.stroke();\n';
 //     // interval += 100;
 //     // code = setInterval(code, interval);
 //     return code;
 // };

 Blockly.Blocks['raide_Ē'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ē")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };

 Blockly.JavaScript['raide_Ē'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath(); ctx.moveTo(250, 100); ctx.lineTo(150, 100); ctx.lineTo(150, 200); ctx.lineTo(250, 200); ctx.moveTo(150, 150); ctx.lineTo(250, 150); ctx.moveTo(170, 90); ctx.lineTo(230, 90); ctx.stroke();\n';

     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

  Blockly.Blocks['raide_F'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts F")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };

 Blockly.JavaScript['raide_F'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(250, 100);\n ctx.lineTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.moveTo(150, 150);\n ctx.lineTo(250, 150);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

  Blockly.Blocks['raide_G'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts G")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };

 Blockly.JavaScript['raide_G'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code =  'ctx.beginPath();\n ctx.arc(' + 200 + ',' + 150 + ',50, 7, 1.7 * Math.PI);\n ctx.stroke();\n ctx.moveTo(240, 200);\n ctx.lineTo(240, 150);\n ctx.lineTo(200, 150);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
   Blockly.Blocks['raide_Ģ'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ģ")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };

 Blockly.JavaScript['raide_Ģ'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code =  'ctx.beginPath();\n ctx.arc(' + 200 + ',' + 150 + ',50, 7, 1.7 * Math.PI);\n ctx.stroke();\n ctx.moveTo(240, 200);\n ctx.lineTo(240, 150);\n ctx.lineTo(200, 150);\n ctx.moveTo(200, 200);\n  ctx.lineTo(200, 210);\n ctx.lineTo(210, 210);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_H'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts H")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_H'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(150, 200);\n ctx.moveTo(250, 100);\n ctx.lineTo(250, 200);\n ctx.moveTo(150, 150);\n ctx.lineTo(250, 150);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };


 Blockly.Blocks['raide_I'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts I")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_I'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(170, 100);\n ctx.lineTo(230, 100);\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.moveTo(170, 200);\n ctx.lineTo(230, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

  Blockly.Blocks['raide_Ī'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ī")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ī'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(170, 100);\n ctx.lineTo(230, 100);\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.moveTo(170, 200);\n ctx.lineTo(230, 200);\n ctx.lineTo(230, 210);\n ctx.lineTo(240, 210);\n ctx.moveTo(170, 90); ctx.lineTo(230, 90);ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_J'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts J")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_J'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath(); ctx.moveTo(150, 100); ctx.lineTo(250, 100); ctx.lineTo(200, 200); ctx.lineTo(151, 150); ctx.lineTo(225, 150); ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
  Blockly.Blocks['raide_K'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts K")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_K'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.moveTo(200, 150);\n ctx.lineTo(250, 100);\n ctx.moveTo(200, 150);\n ctx.lineTo(250, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
   Blockly.Blocks['raide_Ķ'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ķ")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ķ'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.moveTo(200, 150);\n ctx.lineTo(250, 100);\n ctx.moveTo(200, 150);\n ctx.lineTo(250, 200);\n ctx.moveTo(200, 200);\n  ctx.lineTo(200, 210);\n ctx.lineTo(210, 210);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
  Blockly.Blocks['raide_L'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts L")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_L'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.lineTo(250, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
   Blockly.Blocks['raide_Ļ'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ļ")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ļ'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.lineTo(250, 200);\n ctx.moveTo(200, 200);\n  ctx.lineTo(200, 210);\n ctx.lineTo(210, 210);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
   Blockly.Blocks['raide_M'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts M")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_M'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 200);\n ctx.lineTo(170, 100);\n ctx.lineTo(200, 200);\n ctx.lineTo(230, 100);\n ctx.lineTo(250, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

   Blockly.Blocks['raide_N'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts N")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_N'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 200);\n ctx.lineTo(150, 100);\n ctx.lineTo(250, 200);\n ctx.lineTo(250, 100);\nctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
    Blockly.Blocks['raide_Ņ'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ņ")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ņ'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 200);\n ctx.lineTo(150, 100);\n ctx.lineTo(250, 200);\n ctx.lineTo(250, 100);\n ctx.moveTo(200, 200);\n  ctx.lineTo(200, 210);\n ctx.lineTo(210, 210);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
 Blockly.Blocks['raide_O'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts O")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_O'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,2*Math.PI);ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
  Blockly.Blocks['raide_Ō'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ō")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ō'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,2*Math.PI);ctx.moveTo(170, 90); ctx.lineTo(230, 90);ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
    Blockly.Blocks['raide_P'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts P")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_P'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 200);\n ctx.lineTo(150, 100);\n ctx.lineTo(200, 100);\n ctx.lineTo(250, 125);\n ctx.lineTo(200, 150);\n ctx.lineTo(150, 150);\nctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

     Blockly.Blocks['raide_R'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts R")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_R'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 200);\n ctx.lineTo(150, 100);\n ctx.lineTo(200, 100);\n ctx.lineTo(250, 125);\n ctx.lineTo(200, 150);\n ctx.lineTo(150, 150);\nctx.lineTo(250, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
     Blockly.Blocks['raide_Ŗ'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ŗ")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ŗ'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 200);\n ctx.lineTo(150, 100);\n ctx.lineTo(200, 100);\n ctx.lineTo(250, 125);\n ctx.lineTo(200, 150);\n ctx.lineTo(150, 150);\nctx.lineTo(250, 200);\n ctx.moveTo(200, 200);\n  ctx.lineTo(200, 210);\n ctx.lineTo(210, 210);\nctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_S'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts S")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_S'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(250, 100);\n ctx.moveTo(150, 100);\n ctx.lineTo(150, 150);\n ctx.lineTo(250, 150)\n; ctx.lineTo(250, 200);\n  ctx.lineTo(150, 200); ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_Š'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Š")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Š'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(250, 100);\n ctx.moveTo(150, 100);\n ctx.lineTo(150, 150);\n ctx.lineTo(250, 150);\n ctx.lineTo(250, 200);\n ctx.lineTo(150, 200); ctx.moveTo(170, 90);\n ctx.lineTo(230, 90);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

 Blockly.Blocks['raide_T'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts T")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_T'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(250, 100);\n ctx.stroke();\n ctx.beginPath();\n ctx.moveTo(200, 100);\n ctx.lineTo(200, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
  Blockly.Blocks['raide_U'] = {
     // draw a line from current position to x,y
     init: function() {
         // this.appendDummyInput()
         // .appendField("Burts U")
         //     .appendField(new Blockly.FieldDropdown([
         //         ["x"],["20"],
         //     ]), "XPOS")
         //     .appendField(new Blockly.FieldDropdown([
         //         ["y"],["20"],
         //     ]), "YPOS");
         // this.setInputsInline(false);
         // this.setPreviousStatement(true, null);
         // this.setNextStatement(true, null);
         // this.setColour(260);
         // this.setTooltip("");
         // this.setHelpUrl("");
         this.appendDummyInput()
             .appendField("Burts U")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_U'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
    // var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,Math.PI);ctx.stroke();\n';
     var code ='ctx.beginPath();\n ctx.bezierCurveTo(150, 100, 200, 325, 250, 100);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };

  Blockly.Blocks['raide_Ū'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ū")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ū'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
    // var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,Math.PI);ctx.stroke();\n';
     var code ='ctx.beginPath();\n ctx.bezierCurveTo(150, 100, 200, 325, 250, 100);\n ctx.moveTo(170, 90);\n ctx.lineTo(230, 90);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };
 //  Blockly.Blocks['raide_Ų'] = {
 //     // draw a line from current position to x,y
 //     init: function() {
 //         this.appendDummyInput()
 //             .appendField("Burts Ų")
 //         this.setInputsInline(false);
 //         this.setPreviousStatement(true, null);
 //         this.setNextStatement(true, null);
 //         this.setColour(260);
 //         this.setTooltip("");
 //         this.setHelpUrl("");
 //     }
 // };
 // Blockly.JavaScript['raide_Ų'] = function(block) {
 //     //.arc(x, y, radius, startAngle, endAngle)
 //     var x = block.getFieldValue('XPOS');
 //     var y = block.getFieldValue('YPOS');
 //    // var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,Math.PI);ctx.stroke();\n';
 //     var code ='ctx.beginPath();\n ctx.bezierCurveTo(150, 100, 200, 325, 250, 100);\n ctx.moveTo(200, 200);\n  ctx.lineTo(200, 210);\n ctx.lineTo(210, 210);\n  ctx.stroke();\n';
 //     // interval += 100;
 //     // code = setInterval(code, interval);
 //     return code;
 // };
   Blockly.Blocks['raide_V'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts V")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_V'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code ='ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(200, 200);\n ctx.lineTo(250, 100);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 }; 
  Blockly.Blocks['raide_Z'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Z")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Z'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code ='ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(250, 100);\n ctx.lineTo(150, 200);\nctx.lineTo(250, 200);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 }; 
  Blockly.Blocks['raide_Ž'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Burts Ž")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ž'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code ='ctx.beginPath();\n ctx.moveTo(150, 100);\n ctx.lineTo(250, 100);\n ctx.lineTo(150, 200);\nctx.lineTo(250, 200);\n ctx.moveTo(170, 90);\n ctx.lineTo(230, 90);\n ctx.stroke();\n';
     // interval += 100;
     // code = setInterval(code, interval);
     return code;
 };