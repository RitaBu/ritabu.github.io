var my_canvas = document.getElementById("canvas");
var ctx = my_canvas.getContext("2d");
my_canvas.addEventListener('click', clickReporterPirkti, false);
var eiroKainuoja = 3.45;
var lati;
var eiro;
var pressed;
var callAgain;
var background = new Image();
background.src = "../img_lessons/valiutos/level1-bg.jpg";
var win = new Image();
win.src = "../img_lessons/valiutos/win.jpg";

Blockly.Blocks['pressed'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("uzklikšķināt")
            .appendField(new Blockly.FieldDropdown([
                ["eiro", "EIRO"],
                ["lati", "LATI"]
            ]), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['pressed'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "";

    if (dropdown_name == "EIRO") {
        //var a =  my_canvas.addEventListener('click', clickReporterEuras, false);
        // my_canvas.addEventListener('click', clickReporterEuras, false);
        code = "pressed == 'eiro'";

    } else if (dropdown_name == "LATI") {
        //var b = my_canvas.addEventListener('click', clickReporterLitas, false);
        // my_canvas.addEventListener('click', clickReporterLitas, false);
        //alert(pressed);
        code = "pressed == 'lati'";
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};
//*****************************************************************************
Blockly.Blocks['change'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("pievienot")
            .appendField(new Blockly.FieldNumber(0), "NUMBER")
            .appendField("")
            .appendField(new Blockly.FieldDropdown([
                ["eiro", "eiro"]
            ]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['change'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var number_name = block.getFieldValue('NUMBER');
    // TODO: Assemble JavaScript into code variable.
    var code = '' + dropdown_name + ' += ' + number_name + ';\n';
    return code;
};
Blockly.Blocks['set'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["eiro", "eiro"]
            ]), "NAME")
            .appendField("=")
            .appendField(new Blockly.FieldNumber(0, 0), "NUMBER");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['set'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var number_name = block.getFieldValue('NUMBER');
    // TODO: Assemble JavaScript into code variable.
    var code = '' + dropdown_name + ' = ' + number_name + ';\n';
    return code;
};



Blockly.Blocks['ifas'] = {
    init: function() {
        this.appendValueInput("if_reiksme")
            .setCheck(Boolean)
            .appendField("Ja");
        this.appendStatementInput("do_reiksme")
            .setCheck(null)
            .appendField("darīt");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['ifas'] = function(block) {
    var value_if_reiksme = Blockly.JavaScript.valueToCode(block, 'if_reiksme', Blockly.JavaScript.ATOMIC);
    var statements_do_reiksme = Blockly.JavaScript.statementToCode(block, 'do_reiksme');
    // TODO: Assemble JavaScript into code variable.
    var code = 'callAgain(function(){if(' + value_if_reiksme + '){\n' + statements_do_reiksme + '}});\n';
    // var code2 = 'if('+value_if_reiksme+'){\n'+statements_do_reiksme+'}\n;'
    return code;
};

Blockly.Blocks['convert'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("konvertēt");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['convert'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'lati = eiro * 0.702804;\n';
    code += 'eiro = 0; \n';
    return code;
};
//*****************************************************************************

function callAgain(if_body) {

    // clicked = function (e) { clickReporter(e, if_body) };
    // my_canvas.addEventListener('click', clicked);
   $('canvas').on( "click", function clicked(e) { clickReporter(e, if_body)});

};

background.onload = function() {
    draw(background, 0, 0);
};

function draw(pic_name, x, y) {
    ctx.drawImage(pic_name, x, y);
}

function draw_elements() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(background, 0, 0);
    ctx.font = "16px Verdana";
    ctx.strokeText(eiro, 410, 72);
    ctx.strokeText((Math.round(lati * 100) / 100), 220, 72);

}

function clickReporter(e, if_body) { /// assign event to some variable

    /// adjust mouse click position to be relative to canvas:
    var rect = canvas.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    eiro_width = 90;
    eiro_height = 90;
    lati_width = 170;
    lati_height = 90;

    /// check x/y coordinate against the image position and dimension
    //button lati
    if (x >= 30 && x <= (30 + lati_width) &&
        y >= 30 && y <= (30 + lati_height)) {

        //exchangeLitai();
        pressed = "lati";
        if_body();
        draw_elements();

    }
    //button_eiro
    if (x >= 300 && x <= (300 + eiro_width) &&
        y >= 30 && y <= (30 + eiro_height)) {

        // exchangeLitai();
        pressed = "eiro";
        if_body();
        draw_elements();
    }
    //buy
    // if (x >= 250 && x <= (250 + buy.width) &&
    //     y >= 200 && y <= (200 + buy.height)) {


    //     if (lati > 30) {
    //         ctx.clearRect(0, 0, 200, 100);
    //         ctx.strokeText("NUSIPIRKAI", 200, 100);
    //          setTimeout(function(){$('#nextModal').modal('show');},1000);
    //     } else {

    //         lati = 0;
    //         eiro = 0;
    //         draw_elements();
    //         ctx.strokeText("TRUKSTA", 200, 100);
    //     }
    // }
}

function clickReporterPirkti(e) { /// assign event to some variable

    /// adjust mouse click position to be relative to canvas:
    var rect = this.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    buy_width = 150;
    buy_height = 65;
    if (x >= 320 && x <= (320 + buy_width) &&
        y >= 244 && y <= (244 + buy_height)) {


        if (lati >= 10) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(win, 0, 0);
            // ctx.strokeText("NUSIPIRKAI", 200, 100);
            setTimeout(function() { $('#nextModal').modal('show'); }, 2000);
        } else {

            lati = 0;
            eiro = 0;
            draw_elements();
            ctx.strokeText("NEPIETIEK", 200, 300);
        }
    }
}