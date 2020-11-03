
import * as React from 'react'



class Chart extends React.Component {

    
    render() {
        return (
            <div ref='chart'>
                <canvas id="myChart" width="400" height="400"></canvas>
                    
            </div>
        )
    }


}
export default Chart