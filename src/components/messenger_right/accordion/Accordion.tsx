import * as React from "react";
import { Helmet } from "react-helmet";
import "./Accordion.scss";

interface Props {

}

class Accordion extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

        this.accordion_container = React.createRef()

    }
    classList: any;
    nextElementSibling: any;
    accordion_container: any
    componentDidMount() {

        var acc = document.getElementsByClassName("accordion");
        var i;
        console.log('====================================');
        console.log('window accordion', this.accordion_container.current.classList, '__', acc.length);
        console.log('====================================');

        for (i = 0; i < acc.length; i++) {
            console.log('test_acc ', acc[i])
            const item = acc[i]
            item.addEventListener("click", () => {
                item.classList.toggle("active");
                const panel:any = item.nextElementSibling;
                console.log('item child_first', panel.style);
                console.log('item child_last', panel.style);

                if (panel.style.display == 'block') {
                    panel.style.display = 'none'}
                   
                else{
                    panel.style.display = 'block'
                }
                
            });
        }
    }

    render() {
        return (
            <div ref={this.accordion_container} className='accordion_container'>
                <h2>Accordion</h2>

                <button className="accordion">Section 1</button>
                <div className="panel" id= 'section1'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
          </p>
                </div>

                <button className="accordion">Section 2</button>
                <div className="panel" id='section2'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
          </p>
                </div>

                <button className="accordion">Section 3</button>
                <div className="panel" id= 'section3'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
          </p>
                </div>
            </div>
        );
    }
}

export default Accordion;
