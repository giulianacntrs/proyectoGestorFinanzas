var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
  labels: [
    "Saudi Arabia",
    "Russia",
    "Iraq",
    "United Arab Emirates",
    "Canada"
  ],
  datasets: [
    {
      data: [133.3, 86.2, 52.2, 51.2, 50.2],
      backgroundColor: [
        "#FF6384",
        "#63FF84",
        "#84FF63",
        "#8463FF",
        "#6384FF"
      ]
    }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});


/**************************  Grafico presupuesto ************************** */

Vue.component('pie-chart', {
  extends: VueChartJs.Pie,
 mounted () {
    this.renderChart({
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }, {
      responsive: true, 
      maintainAspectRatio: false,
      pieceLabel: {
        mode: 'percentage',
        precision: 1
      }
    })
 }
  
})

var vm = new Vue({
  el: '.app',
  data: {
    show: false,
    message: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }
  },
  
  mounted () {
  setInterval(() => {
      //this.fillData()
   },  5000)
  }
});