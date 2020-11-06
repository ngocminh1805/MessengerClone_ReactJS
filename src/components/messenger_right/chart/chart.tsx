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