import "./index.scss";
import React, {Component} from "react";
import {MySwipe} from "~/components/swipe";
import {Button} from "antd-mobile";
const SwipeItem=MySwipe.Item;


export default class Guide extends Component{
    constructor(){
        super();
        this.state={
            imgs:[
                require("@/assets/images/1.jpg"),
                require("@/assets/images/44.jpg"),
                require("@/assets/images/45.jpg"),
                require("@/assets/images/46.jpg"),
            ]
        }
    }
    componentDidMount(){
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>3){
                this.props.history.push("/main/home");
            }
        }else{
            localStorage.visitCount=1
        }
    }



    handleGotoMain=(index)=>{
        console.log(index)
        console.log(this.state.imgs.length)
        if(index==this.state.imgs.length-1){
            this.props.history.push("/main/home")
        }
    }
    render(){
        return (
            <div className="g-box">
                <MySwipe
                    id="guide"
                    options={{loop:false,autoplay:{delay:1500},speed:1200}}
                
                
                >
                        {
                            this.state.imgs.map((item,idx)=>{
                                return(
                                    <SwipeItem key={idx}>
                                        <img src={item} onClick={()=>this.handleGotoMain(idx)} className="g-img" alt=""/>
                                        {idx==this.state.imgs.length-1&&<Button type="warning">
                                            
                                        </Button>}
                                    </SwipeItem>
                                )
                            })
                        }
                </MySwipe>  
            </div>
        )
    }
}