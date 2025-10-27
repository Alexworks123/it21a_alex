
class LineChart{
    constructor(canvasId,dataUrl){
        this.canvasId = canvasId;
        this.dataUrl = dataUrl;
        this.chart = null;
    }

    renderChart(data){
        const ctx = document.getElementById(this.canvasId).getContext("2d");

        this.chart = new Chart(ctx,{
            type:"line",
            data:{
                //Labels
                labels: data.labels,
                datasets:[{
                    label:"Monthly Data",
                    //Data
                    data:data.values,
                    borderwidth:1
                }]
            },
            options:{
                scales:{
                    y:{
                        beginAtZero:true
                    }
                }
            }
        });
    }

    async fetchData(){
        try{
            const response = await fetch(this.dataUrl);
            
            if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`);

            const data = await response.json();
            return data;

        } catch(error){
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async init(){
        const data = await this.fetchData();
        if(data){
            this.renderChart(data);
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const chart = new LineChart("linechart","linedata.json");
    chart.init();
})

class radarChart{
    constructor(canvasId,dataUrl){
        this.canvasId = canvasId;
        this.dataUrl = dataUrl;
        this.chart = null;
    }

    renderChart(data){
        const ctx = document.getElementById(this.canvasId).getContext("2d");

        this.chart = new Chart(ctx,{
            type:"radar",
            data:{
                //Labels
                labels:data.labels,
                //Datasets
                datasets: data.datasets
            },
            options:{
                responsive: true,
                plugins:{
                    legend:{
                        position:"top"
                    },
                    title:{
                        display:true,
                        text:"Radar Chart"
                    }
                },
                scales:{
                    r:{
                        angleLines:{display:true},
                        suggestedMin:0,
                        suggestedMax:100
                    }
                }
            }
        });
    }

    async fetchData(){
        try{
            const response = await fetch(this.dataUrl);
            if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`);

            const data = await response.json();
            return data;
        } catch(error){
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    async init(){
        const data = await this.fetchData();
        if(data) this.renderChart(data);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    const chart = new radarChart("radarChart","radarData.json");
    chart.init();
});