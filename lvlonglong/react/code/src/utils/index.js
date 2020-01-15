import url from "url";
import {createHashHistory} from "history";



export {msg} from "./msg"

export {config} from "./config"


export const commonCss={
    all:{
        margin:0,
        padding:0
    },
    three:{
         backgroundColor:"pink",
         boxShadow:"0 0 0 10px blue" 
    }
}

export {axios,baseURL} from "./axios"
export const commonJS={
    move(){
        console.log("这是 鼠标滑动事件");
    },
    touch(){
        console.log("this is touch event 触摸事件")
    }
}

//history=this.props.history
export const history=new  createHashHistory();