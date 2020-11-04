import * as React from 'react'

interface Props {

    type:string
    data:any
    id: string
    height?:number
    width?:number
    options?:any

}




class MyChart extends React.Component<Props> {
    [x: string]: any;
    chartInstance: any;
    constructor(props: Props) {
        super(props)
        this.chartInstance = undefined
    }


    ref = (element: any) => {
        this.element = element;
    }

    componentDidMount() {
        this.renderChart()
    }


    renderChart = () => {

        const {type,data,options,id} = this.props
       
        const element: any = document.getElementById(id)
        console.log('Window', window);


        this.chartInstance = new window.Chart(element, {
            type: type,
            data: data,
            options:options
            // data: 
            // {
            //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            //     datasets: [{
            //         label: '# of Votes',
            //         data: [12, 19, 3, 5, 2, 3],
            //         backgroundColor: [
            //             'rgba(255, 99, 132, 0.2)',
            //             'rgba(54, 162, 235, 0.2)',
            //             'rgba(255, 206, 86, 0.2)',
            //             'rgba(75, 192, 192, 0.2)',
            //             'rgba(153, 102, 255, 0.2)',
            //             'rgba(255, 159, 64, 0.2)'
            //         ],
            //         borderColor: [
            //             'rgba(255, 99, 132, 1)',
            //             'rgba(54, 162, 235, 1)',
            //             'rgba(255, 206, 86, 1)',
            //             'rgba(75, 192, 192, 1)',
            //             'rgba(153, 102, 255, 1)',
            //             'rgba(255, 159, 64, 1)'
            //         ],
            //         borderWidth: 1
            //     }]
            // },
            // options: {
            //     scales: {
            //         yAxes: [{
            //             ticks: {
            //                 beginAtZero: true
            //             }
            //         }]
            //     }
            // }
        })
    }


    render() {
        const {height,width,id} = this.props
        return (
            <div style = {{height:height, width: width}}>
                <canvas id= {id}/>
            </div>




        )
    }
}
export default MyChart