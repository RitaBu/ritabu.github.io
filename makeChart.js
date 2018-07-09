var chart;
//var data = JSON.parse
var chartConfig = {
  type: "serial",
  dataProvider: [{
    "kortelesTipas": 'Spalvos',
    "laikasSekundemis": 11.5
  }, {
    "kortelesTipas": 'Spalvoti zodziai',
    "laikasSekundemis": 23.2
  }, {
    "kortelesTipas": 'Spalvotos spalvos',
    "laikasSekundemis": 30.1
  }],
  categoryField: "kortelesTipas",
  categoryAxis: {
    gridPosition: "start"
  },
  valueAxes: [{
    title: "Sekundes"
  }],
  graphs: [{
    type: "column",
    title: "Laikas (s) kiekvienai ",
    valueField: "laikasSekundemis",
    lineAlpha: 0,
    fillAlphas: 0.8,
    balloonText: "Atlikta per:<b>[[value]]</b>s"
  }],
  legend: {
    useGraphSettings: true
  }
};

function makeChart(theme) {      
  if (chart && chart.clear) {
    chart.clear();
    chart = null;
  }
  var config = JSON.parse(JSON.stringify(chartConfig)); //clone the config before reusing it
  config.theme = theme;
  
  if (theme === "dark") {
    document.body.style.backgroundColor = "#282828";
  }
  else if (theme === "black") {
    document.body.style.backgroundColor = "#000";
  }
  else if(theme === "chalk"){
    document.body.style.backgroundColor = "#3f3e3b";
  }
  else {
    document.body.style.backgroundColor = "#ffffff";
  }
  
  chart = AmCharts.makeChart("chartdiv", config);
}
