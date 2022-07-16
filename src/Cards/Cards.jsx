import React,{Component} from "react";
import Card from "./CardUI";
import img1 from '../Assets/laptop.jpg'
import img2 from '../Assets/phone.jpg'
import img3 from '../Assets/desktop.jpg'
class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Phone"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc ={img2} title="Text"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Call"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;