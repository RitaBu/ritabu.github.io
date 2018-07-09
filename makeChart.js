var defaultTheme = 'light';

var chart;

var data;

var chartConfig = {
  type: "serial",
  dataProvider: data,
  categoryField: "kortelesTipas",
  categoryAxis: {
    gridPosition: "start"
  },
  valueAxes: [{
    title: "Sekundes"
  }],
  graphs: [{
    type: "column",
    title: "Pirmas bandymas",
    valueField: "pirmasBandymas",
    lineAlpha: 0,
    fillAlphas: 0.8,
    balloonText: "Atlikta per:<b>[[value]]</b>s"
  },
  {
    type: "column",
    title: "Antras bandymas",
    valueField: "antrasBandymas",
    lineAlpha: 0,
    fillAlphas: 0.8,
    balloonText: "Atlikta per:<b>[[value]]</b>s"
  },
  {
    type: "column",
    title: "Trečias bandymas",
    valueField: "treciasBandymas",
    lineAlpha: 0,
    fillAlphas: 0.8,
    balloonText: "Atlikta per:<b>[[value]]</b>s"
  }],
  legend: {
    useGraphSettings: true
  }
};

function makeChart(theme = defaultTheme) { 

  if (chart && chart.clear) {
    chart.clear();
    chart = null;
  }

  chartConfig.dataProvider = data;
  var config = JSON.parse(JSON.stringify(chartConfig)); //clone the config before reusing it
  config.theme = theme;
  document.body.style.color =  "#000";

  if (theme === "dark") {
    document.body.style.backgroundColor = "#282828";
    document.body.style.color = "#ffffff";
  }
  else if (theme === "black") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
  }
  else if(theme === "chalk"){
    document.body.style.backgroundColor = "#3f3e3b";
    document.body.style.color = "#ffffff";
  }
  else {
    document.body.style.backgroundColor = "#ffffff";
    
  }
  
  chart = AmCharts.makeChart("chartdiv", config);
}
