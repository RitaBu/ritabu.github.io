var chart;
//var data = JSON.parse
var chartConfig = {
  type: "serial",
  dataLoader: {
    url: "duomenys.json",
    format: "json",
    "showErrors": true,
  },
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
