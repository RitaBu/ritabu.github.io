var chart;
//var data = JSON.parse
var chartConfig = {
  type: "serial",
  dataProvider: [{
    "year": 2005,
    "income": 23.5,
    "expenses": 18.1
  }, {
    "year": 2006,
    "income": 26.2,
    "expenses": 22.8
  }, {
    "year": 2007,
    "income": 30.1,
    "expenses": 23.9
  }, {
    "year": 2008,
    "income": 29.5,
    "expenses": 25.1
  }, {
    "year": 2009,
    "income": 24.6,
    "expenses": 25
  }],
  categoryField: "year",
  categoryAxis: {
    gridPosition: "start"
  },
  valueAxes: [{
    title: "Million USD"
  }],
  graphs: [{
    type: "column",
    title: "Income",
    valueField: "income",
    lineAlpha: 0,
    fillAlphas: 0.8,
    balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
  }, {
    type: "line",
    title: "Expenses",
    valueField: "expenses",
    lineThickness: 2,
    bullet: "round",
    balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
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
