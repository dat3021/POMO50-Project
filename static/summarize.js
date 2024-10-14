let summarize = document.getElementById("Summarize");
var span = document.getElementsByClassName("close")[1];
let drawBoard = document.getElementById("drawBoard");

let chartInstance = null;


function finish_chart(){
    fetch("/get_data")
    .then(response => response.json())
    .then(data => {
      draw(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error); // Xử lý lỗi (tùy chọn)
    });
}



function draw(data){    
  if (chartInstance) {
    chartInstance.destroy();
}
    const ctx = document.getElementById('chart');

    const maxDuration = Math.max(...data.map(row => row.duration));

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(row => row.date),
          datasets: [{
            label: 'Minutes',
            data: data.map(row => row.duration),
            borderWidth: 1,
          backgroundColor: 'rgba(15, 70, 219, 0.3)', 
          borderColor: 'rgba(18, 59, 222, 1)', 
          hoverBackgroundColor: 'rgba(40, 88, 247, 0.2)', 
          hoverBorderColor: 'rgba(54, 162, 235, 1)', 
          maxBarThickness: 40 
          }]
        },
        options: {
          responsive: true, 
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: maxDuration + 10,
              ticks: {
                stepSize: Math.ceil(maxDuration / 5) }
            }
          }
        }
      });
}

summarize.addEventListener("click", function(){
    drawBoard.style.display = "block";
    finish_chart();
})

span.onclick = function() {
  drawBoard.style.display = "none";
}

window.addEventListener("click", function(event) {
  if (event.target == drawBoard) {
      drawBoard.style.display = "none";
  }
});




