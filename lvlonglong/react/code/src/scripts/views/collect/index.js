import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {
    Button
} from "antd-mobile"
import {axios} from "&"
import UploadImg from "~/components/uploadImg"

import collect from  "~/mobx/collect"
import {observer} from "mobx-react"

@observer   //订阅组件  当里面的数组发生改变就跟着改变   
class Mine extends Component{
    constructor(props){
        super(props);
        this.state = {
             
        }
    }
    
    componentDidMount(){
        collect.postCollect("/react/postCollect",{goodId:sessionStorage.goodId,name:sessionStorage.name,img:sessionStorage.img})
        collect.getCollect("/react/getCollect")
    }

    render(){
        const {
            isLogin,
            mobile
        } = this.state;
        const{
            list
        }=collect;
        console.log(list)
        return (
            <div>
                <Head title="收藏夹" show={true}></Head>
                    {
                        list.map((item,index)=>{
                            return(
                                <div key={index} className="k-cc">
                                <img src={item.img} alt=""/>
                                <p>{item.name}</p> 
                                </div>  
                            )
                        })
                    }
                         
            </div>
        )
    }
}

export default Mine;