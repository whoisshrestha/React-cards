import React from "react";
import './card-style.css';

function Card(props) {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc}alt="" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <p className="card-text text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                </p>
                <a href="#" className="btn btn-outline-success">Go AnyWhere</a>
            </div>
        </div>
    );
}

export default Card;