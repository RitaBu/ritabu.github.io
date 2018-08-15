var move = 0;

Blockly.Blocks['go_left'] = {
    init: function() {
        this.appendValueInput("fly")
            .setCheck(null)
            .appendField("Dodies augšup");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['go_left'] = function(block) {
    var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'move = ' + value_fly * 40 + ';\n';
    code += 'updateMilda(0,-move);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
    return code;
};

Blockly.Blocks['go_right'] = {
    init: function() {
        this.appendValueInput("fly")
            .setCheck(null)
            .appendField("Dodies lejup");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['go_right'] = function(block) {
    var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'move = ' + value_fly * 40 + ';\n';
    code += 'updateMilda(0,move);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
    return code;
};

Blockly.Blocks['go_straight'] = {
    init: function() {
        this.appendValueInput("fly")
            .setCheck(null)
            .appendField("Dodies taisni");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['go_straight'] = function(block) {
    var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'move = ' + value_fly * 40 + ';\n';
    code += 'updateMilda(move, 0);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
    return code;
};

Blockly.Blocks['go_back'] = {
    init: function() {
        this.appendValueInput("fly")
            .setCheck(null)
            .appendField("Dodies atpakaļ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['go_back'] = function(block) {
    var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'move = ' + value_fly * 40 + ';\n';
    code += 'updateMilda(-move, 0);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
    return code;
};

Blockly.Blocks['blocks'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0, 0, 7), "block")
            .appendField("laukumi ");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['blocks'] = function(block) {
    var number_block = block.getFieldValue('block');
    // TODO: Assemble JavaScript into code variable.
    var code = number_block;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['wait_seconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("laukti")
            .appendField(new Blockly.FieldTextInput("1"), "SECONDS")
            .appendField("s.");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/**
 * Generator for wait block creates call to new method
 * <code>waitForSeconds()</code>.
 */
Blockly.JavaScript['wait_seconds'] = function(block) {
    var seconds = Number(block.getFieldValue('SECONDS'));
    var code = 'waitForSeconds(' + seconds + ');\n';
    return code;
};


function changePoints(x, y) {
    //console.log(x)
    if (x != 0 || y != 0) {

        globalID = requestAnimationFrame(function() { changePoints(x, y); });

    } else {
        cancelAnimationFrame(globalID);
    }
    if (x < 0) {
        document.getElementById("milda").style.transform = "translate(" + plain_x + "px, " + plain_y + "px) scaleX(-1)";
    } else {
        document.getElementById("milda").style.transform = "translate(" + plain_x + "px, " + plain_y + "px) scaleX(1)";
    }
    document.getElementById("milda").style.animationDuration = "0.5s"
    checkPoint(plain_x, plain_y);
    if (x > 0) {
        plain_x += 1;
        x -= 1;
    } else if (x < 0) {
        plain_x -= 1;
        x += 1;
    }
    if (y > 0) {
        plain_y += 1;
        y -= 1;
    } else if (y < 0) {
        plain_y -= 1;
        y += 1;
    }


}
function checkEnd(){
	   if (points[0] == 1 && points[1] == 1 && points[2] == 1 && points[3] == 1) {
        setTimeout(function() {
            document.getElementById("milda").style.visibility = 'hidden';
            background.clearRect(0, 0, canvas.width, canvas.height);
            background.drawImage(map2, 0, 0);
            background.drawImage(m_done, 0, 50);
        }, 1000);
        setTimeout(function() { $('#nextModal').modal('show'); }, 2000);
    }
}

function checkPoint(x, y) {

if (48 >= x && x >= 18 && 82 >= y && y >= 72) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        points[0] = 1;
        background.drawImage(map, 0, 0);
        drawGrid();
       // background.strokeStyle = 'black';
        //background.font = "12px Arial";
        //background.strokeText("Jūrkalne", 25, 125);
    } else if (150 >= x && x >= 140 && 125 >= y && y >= 115) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        points[1] = 1;
        background.drawImage(map, 0, 0);
        drawGrid();
        //background.strokeStyle = 'black';
        //background.font = "12px Arial";
        //background.strokeText("Tervete nature park", 120, 190);
    } else if (270 >= x && x >= 260 && 45 >= y && y >= 35) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        points[2] = 1;
        background.drawImage(map, 0, 0);
        drawGrid();
        //background.strokeStyle = 'black';
        //background.font = "12px Arial";
        //background.strokeText("Gauja", 265, 80);
    } else if (350 >= x && x >= 340 && 205 >= y && y >= 195) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        points[3] = 1;
        background.drawImage(map, 0, 0);
        drawGrid();
        //background.strokeStyle = 'black';
        //background.font = "12px Arial";
        //background.strokeText("Daugavas loki", 340, 255);
    }
    checkEnd();
}