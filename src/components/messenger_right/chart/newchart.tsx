import * as React from 'react'

interface Props {

    type: string
    data: any
    id: string
    height?: number
    width?: number
    options?: any

}

class YourChart extends React.Component<Props>{
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

        const { type, data, options, id } = this.props
        const element: any = document.getElementById(id)
      //  const chart = require("https://cdn.jsdelivr.net/npm/chart.js@2.8.0")
        // console.log('Window', window);
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://cdn.jsdelivr.net/npm/chart.js@2.8.0";
     //   this.div.appendChild(script);
        document.body.appendChild(script)

        console.log('====================================');
        console.log('script',window);
        console.log('====================================');


        this.chartInstance = new window.Chart(element, {
            type: type,
            data: data,
            options: options
        })
    }


    render() {
        const { height, width, id } = this.props
        return (
            <div style={{ height: height, width: width }}>
                <canvas id={id} />
            </div>

        )
    }
}


export default YourChart