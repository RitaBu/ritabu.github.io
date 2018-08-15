Blockly.Blocks['game'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Žaidimo nustatymai:");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['game'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "  function jump(index){ \n var explodeIfColision = setInterval(function() {\nif (isStarllColision()){ clearInterval(explodeIfColision);\n    if (treasureCollection[index] == 'not1' || treasureCollection[index] == 'not2' || treasureCollection[index] == 'not3' || treasureCollection[index] == 'not4') {alert('Laimėjimas neteisingas. Pakeisk ir pabandyk dar kartą.')}else{ \ncountStars += 1; document.getElementById('rating').innerHTML = 'Surinkta: ' +countStars;}\nanimTreasure('.star');\n} setTimeout(function() {clearInterval(explodeIfColision);}, 500);\n";
    code += statements_name;
    code += " }, 50); };";
    return code;
};
Blockly.Blocks['count'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("surinkti taškai = ")
            .appendField(new Blockly.FieldNumber(0), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['end_game'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("baigti žaidimą");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['button_clicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("paspaustas")
            .appendField(new Blockly.FieldDropdown([
                ["rodyklė į viršų", "38"],
                ["ekranas", "screen"]
            ]), "button");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Blockly.Blocks['jump'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField("pašokti");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['jump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("palēkties, kad uzklikšķina")
        .appendField(new Blockly.FieldDropdown([
            ["ekrāns","screen"],
          ["bultiņa norāda uz augšu",38]]), "buttons");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['walk'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("iet");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['treasure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sasniegums")
        .appendField(new Blockly.FieldDropdown([["rodyti","visible"], ["slėpti","hidden"]]), "visibility");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['treasure_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sasniegumu pārvietošanās ātrums")
        .appendField(new Blockly.FieldNumber(0, 0, 19), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['valdymas'] = {
    init: function() {
        this.appendStatementInput("control")
            .setCheck()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Veikėjų nustatymai:");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['valdymas'] = function(block) {
    var statements_control = Blockly.JavaScript.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = statements_control;
    return code;
};

Blockly.JavaScript['treasure'] = function(block) {
  var dropdown_visibility = block.getFieldValue('visibility');
  // TODO: Assemble JavaScript into code variable.
  var code = 'treasureOn("'+dropdown_visibility+'");\n';
  return code;
};
Blockly.JavaScript['treasure_speed'] = function(block) {
  var number_speed = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  if (number_speed==0) {  var code = 'treasureSpeed(0);\n';} else{
  var code = 'treasureSpeed(20-'+number_speed+');\n';}
  return code;
};

Blockly.JavaScript['count'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'countStars == ' + number_name + '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['end_game'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clearInterval(explodeIfColision);endGame(countStars);\n';
    return code;
};

Blockly.JavaScript['button_clicked'] = function(block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble JavaScript into code variable.
    var code = 'var button = '+dropdown_button;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// Blockly.JavaScript['jump'] = function(block) {
//     // TODO: Assemble JavaScript into code variable.
//     var code = "clickJump(button);";
//     //code += " function clickJump(action) {$('#up').on(action, function(e) { if (e.type == action) { jump(); }});}";
//     return code;
// };
Blockly.JavaScript['jump'] = function(block) {
  var dropdown_buttons = block.getFieldValue('buttons');
  // TODO: Assemble JavaScript into code variable.
   var code = "clickJump('"+dropdown_buttons+"');";
  return code;
};
Blockly.JavaScript['walk'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'walk();\n';
    return code;
};



/********treasures****************/
Blockly.Blocks['select_treasure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sasniegums:")
        .appendField(new Blockly.FieldDropdown([
            ["Latvijas prezidente (1999–2003)","1"], ["Latvijas prezidente (2003–2007)","2"], 
            ["NATO dalībvalstu sarunas par Latvijas dalību","3"], ["Latviešu dziedātāja","not1"], 
            ["ES dalībvalstu sarunas par Latvijas dalību","4"], ["Jūgendstila arhitekte","not2"], 
            ["Doktora grāds eksperimentālajā psiholoģijā (1965), 1965","5"], ["Latvijas tautasdziesmu pētniece","6"], 
            ["Olimpiskā čempione skriešanā","not3"], ["Brīvi pārvalda piecas valodas","7"], 
            ["Zinātniece un profesore Monreālas universitātē Kanādā","8"], ["Latvijas astronaute","not4"]
            ]), "treasure_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['select_treasure'] = function(block) {
  var dropdown_treasure_name = block.getFieldValue('treasure_name');
  // TODO: Assemble JavaScript into code variable.
  var code = 'treasureCollect("'+dropdown_treasure_name+'");\n';
  return code;
};