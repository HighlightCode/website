import React from 'react';
import "./ExperienceCard.scss";

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <div class="card card-gap">
            <div class="card-content">
                <div class="card-media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src={data.companylogo} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="card-title is-4">{data.company_name}</p>
                        <p class="subtitle is-6">{data.date}</p>
                    </div>
                </div>
                <div class="content">
                    <p><b>{data.mainwork}</b></p>
                    <ul>
                        <li>{data.content.one}</li>
                        <li>{data.content.two}</li>
                        <li>{data.content.three}</li>
                    </ul>
                    <div class="tags">
                    <span class="tag">{data.tag.one}</span>
                    <span class="tag">{data.tag.two}</span>
                    <span class="tag">{data.tag.three}</span>
                    <span class="tag">{data.tag.four}</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ExperienceCard;