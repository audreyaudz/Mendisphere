import React from "react"
import { useState, useEffect } from "react";
import Axios from "axios";
import "../../styles/catalogue.css"

export default function Catalogue() {

    const [npmhos, setNpmhos] = useState([]);

    useEffect(() => {
        fetchNpmhos()
    }, [])
    const fetchNpmhos = async () => {
        const {data} = await Axios.get("http://localhost:8000/npmhos/");
        const npmhos = data;
        setNpmhos(npmhos);
        console.log(npmhos);
    }


    return <div>
        <h1> Non Profit Metal Health Organisations </h1>
        <div>{npmhos.map((npmho) => (
            <OrgCard key={npmho.id} {...npmho}/>
        ))}</div>
    </div>;
}

const OrgCard = (props) => {
        return (
            <div className="card">
                <div>
                    <img src={props.logo}/>
                </div>
                <div >
                    <h3>{props.name}</h3>
                    <h4>{props.websiteURL}</h4>
                </div>
            </div>
        );
    };