import "./index.scss"
import React, {Component} from "react";
import {
    PullToRefresh,
    WhiteSpace,
    WingBlank
} from "antd-mobile"
import{
    Link
} from 'react-router-dom'   
 
export default class Item extends Component{
    render(){
        const {
            item
        }=this.props;
        return(
        <div className="move-in" style={{borderBottom:"2px solid red"}}>
            <Link to={"/detail/"+item._id+"?name="+item.name}>

                <WingBlank>
                    <WhiteSpace />
                    <img style={{width:"100%",height:200}} src={item.img} alt=""/>
                        <h2 style={{fontSize:25,color:"pink"}}>
                            {item.name}===RMB=={item.price}===type=={item.type.text}
                        </h2>
                </WingBlank>
            </Link>
        </div>
        )
    }
}