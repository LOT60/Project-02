// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add percent sign to all numbers
chart.numberFormatter.numberFormat = "#.#'%'";

// Add data
chart.data = [{
    "year": "2010",
    "Open Rate": 3.5,
    "Close Rate": 3.0
}, {
    "year": "2011",
    "Open Rate": 6.7,
    "Close Rate": 7.8
}, {
    "year": "2012",
    "Open Rate": 7.8,
    "Close Rate": 7.7
}, {
    "year": "2013",
    "Open Rate": 26.3,
    "Close Rate": 26.4
}, {
    "year": "2014",
    "Open Rate": 56.3,
    "Close Rate": 56.2
}, {
    "year": "2015",
    "Open Rate": 57.5,
    "Close Rate": 57.9
}, {
    "year": "2016",
    "Open Rate": 52.9,
    "Close Rate": 52.8
}, {
    "year": "2017",
    "Open Rate": 78.5,
    "Close Rate": 78.8
}, {
    "year": "2018",
    "Open Rate": 19.6,
    "Close Rate": 19.2
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Open Rate";
valueAxis.title.fontWeight = 900;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Open Rate";
series.dataFields.categoryX = "year";
series.clustered = false;
series.columns.template.width = am4core.percent(40);
series.tooltipText = "Open Rate in {categoryX}: [bold]{valueY}[/]";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "Close Rate";
series2.dataFields.categoryX = "year";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Close Rate in {categoryX}: [bold]{valueY}[/]";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;








