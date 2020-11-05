import * as React from 'react';
import './datePicker.scss';
// import $ from 'jquery';
//import 'jquery-ui/ui/widgets/datepicker';

// import 'jquery-ui/ui/widget';

import { Helmet } from 'react-helmet';


class DatePicker extends React.Component {

    a: any

    componentDidMount() {
        console.log('window', window);
        console.log('this', this);
        console.log('$',$);
        
        // this.datepicker()s
       
    }

    datepicker = () => {
        

    }

    render() {
        return (
            <div className='datepicker_container'>
                <input type="text" id="datepicker" />
                
                <Helmet>
                <script>
                    $("#datepicker").datepicker();
               </script>
             </Helmet>
               
            </div>
        )
    }



}
export default DatePicker