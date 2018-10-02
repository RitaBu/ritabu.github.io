Blockly.Blocks['spausdinti'] = {
    init: function() {
        this.appendValueInput("last_list_name")
            .setCheck("Array")
            .appendField("parādīt sarakstu: ");
        this.setPreviousStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['spausdinti'] = function(block) {
    var value_last_list_name = Blockly.JavaScript.valueToCode(block, 'last_list_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ctx.clearRect(0, 0, canvas.width, canvas.height);\n spausdinti(' + value_last_list_name + ');';
    return code;
};

Blockly.Blocks['v_dokumentai'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["darbi", "dokumentai"],
                ["sarindot pēc datuma", "sorted_list"]
            ]), "kintamieji");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['v_dokumentai'] = function(block) {
    var dropdown_kintamieji = block.getFieldValue('kintamieji');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_kintamieji;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['set_v'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldDropdown([
                ["darbi", "dokumentai"],
                ["sarindot pēc datuma", "sorted_list"]
            ]), "kintamieji_set")
            .appendField("=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['set_v'] = function(block) {
    var dropdown_kintamieji_set = block.getFieldValue('kintamieji_set');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_kintamieji_set + '=' + value_name + ';\n';
    return code;
};


function contains(a, obj, place) {

    var list_x = [];
    if (place == "all") {
        for (var i = 0; i < a.length; i++) {
            if (a[i].includes(obj)) {
                list_x.push(a[i]);
            }
        }
        return list_x;

    } else {
        for (var i = 0; i < a.length; i++) {
            if (a[i].includes(obj)) {
                list_x.push(i);
            }
        }

        if (place == "first") { return list_x[0] + 1; } else { return list_x[list_x.length - 1] + 1; }
    }
}



function spausdinti(list) {
    // var inventors = ["People's Council of Latvia", "Inventor Valters Caps", "Scientist Aina Muceniece", "Computer scientist Juris Hartmanis", "Mathematician Daina Taimina", "Architect Austris Mailītis"];

    document.getElementById('doclist').innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        document.getElementById('doclist').innerHTML += "<div class=text" + i + "> " + list[i] + "<br></div>";
    }

}