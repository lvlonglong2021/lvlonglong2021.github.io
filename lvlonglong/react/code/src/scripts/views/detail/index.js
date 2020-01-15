import "./index.scss"
import React, {Component} from "react";
import Head from "~/components/head"
import {axios} from "&"
import {
    WingBlank,
    WhiteSpace,
    Card,
    Stepper,
    Button,
    Modal,
    Toast
} from "antd-mobile"
import {connect} from "react-redux"
import {history} from "&"
const alert = Modal.alert;

const showAlert = () => {
    const alertInstance = alert('提示', '你即将去购物车页面结算', [
      { text: '取消', onPress: () => console.log('取消操作'), style: 'default' },
      { text: '同意', onPress: () => history.push("/main/cart") },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
};


export default class Detail extends Component{
    constructor(){
        super();
        this.state={
            good:{},
            count:1
        }
    }

  
    componentDidMount(){
        const goodId  = this.props.match.params.goodId;
        axios.post("/react/getGoodById",{
      
                goodId
          
        }).then(res=>{
            console.log(res)
            this.setState({
                good:res.data.result
            })
        })
    }
    changeCount=(val)=>{
        console.log(val)
        this.setState({
            count:val
        })
    }

    //加入购物车
    addToCar=()=>{
        axios.post("/react/addToShopcar",{
            count:this.state.count,
            good:this.state.good,
            goodId:this.props.match.params.goodId
        }).then(res=>{
                console.log(res)
        })
    }

    //加入收藏
    handleCollect=()=>{
        this.props.history.push("/collect")
        sessionStorage.goodId=this.props.match.params.goodId;
        sessionStorage.img=this.state.good.img;
        sessionStorage.name=this.state.good.name;
    }

    render(){
        const {
            item,
            location,
            match
        }=this.props;
        const{
            good
        }=this.state
        console.log(this.props)
        return(
            <div>
                <Head title={new URLSearchParams(location.search).get("name").slice(0,12)} show={true}></Head>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                    <Card.Header
                        title={good.type&&good.type.text}
                        //thumb={pic}
                        extra={<span>RMB: ¥  {good.price}</span>}
                    />
                    <Card.Body> 
                        <p>{good.name}</p>
                        <div><img style={{width:"100%",height:"4rem"}} src={good.img} alt=""/></div>
                    </Card.Body>
                    <Card.Footer content="点赞" extra={<div onClick={this.handleCollect}>收藏</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                    <div>
                    购买数量:
                    <Stepper
                        style={{ width: '50%', minWidth: '100px' }}
                        showNumber
                        min={1}
                        value={this.state.count}
                        onChange={this.changeCount}
                        />
                    </div>
                    <WhiteSpace size="lg" />
                    <Button type="warning"  onClick={showAlert} > 立即购买 </Button>
                    <WhiteSpace size="lg" />
                    <Button type="primary" onClick={this.addToCar}>加入购物车</Button>
                </WingBlank>
            </div>
        )
    }
}