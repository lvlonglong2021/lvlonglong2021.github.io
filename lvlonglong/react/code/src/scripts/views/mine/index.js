import "./index.scss"
import React, {Component} from "react"
import Head from "~/components/head"
import {
    Button
} from "antd-mobile"
import {axios} from "&"
import UploadImg from "~/components/uploadImg"

import demo from "~/mobx/demo"
import {observer} from "mobx-react"


@observer   //订阅组件  当里面的数组发生改变就跟着改变   
class Mine extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin:!!sessionStorage.token,
            mobile:null
        }
    }

    componentDidMount(){
        axios.post("/react/getMobile")
        .then(res=>{
            this.setState({
                mobile:res.data.result
            })
        })
    }

    handleGotoLogin=()=>{
        this.props.history.push("/login");
    }

    render(){
        const {
            isLogin,
            mobile
        } = this.state;
        const{
            city,
            msg,
            countAdd,
            newCount,
            countDesc,
            changeMsg
        }=demo
        return (
            <div>
                <Head title="个人中心"></Head>
                {
                    isLogin&&<div>
                        <h2>Mine- mine - 个人中心....</h2>
                    <UploadImg></UploadImg>
                       
                    </div>
                }
                {
                    !isLogin&&<div>
                        <h2>你还没登录,请马上登录</h2>
                        <Button type="warning" inline onClick={this.handleGotoLogin}>我要登录</Button>
                    </div>
                }
                
                <div>mobx-----demo---count{demo.count}------计算属性--{newCount}</div>
                <div>city==={city}</div>
                <div>input==={msg}</div>
                <hr/>
                <Button type="warning" inline onClick={countAdd}>count add</Button>
                <Button type="warning" inline onClick={()=>countDesc(50)}>减</Button>
                 <p>
                     <input type="text" value={msg} onChange={(e)=>changeMsg(e.target.value)}></input>
                 </p>
            </div>
        )
    }
}

export default Mine;