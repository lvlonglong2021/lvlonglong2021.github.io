import "./index.scss";
import React,{Component} from "react";
import {foots} from "../foot"

import {
    TabBar
} from "antd-mobile";

import PropTypes from "prop-types";
import {history} from "&";
import shopcar from  "~/mobx/shopcar"
import {observer} from "mobx-react"

@observer
class Afoot extends Component{
    state = {
        selectedTab:"home"
    }

    componentDidMount(){  //刷新高亮
        var hash = window.location.hash;
        console.log(hash)
        var tab = hash.split("#/main/")[1];
        this.setState({
            selectedTab:tab
        })
    }

    render(){
        console.log(this);
        const{
            carTotal
        }=shopcar;
        return (
            <div className="foot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    
                >
            {
               foots.map((foot,i)=>{
                return (
                        <TabBar.Item
                        title={foot.txt}
                        key={i}
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                
                            }}
                            className={"iconfont "+foot.icon}
                          />
                          }
                          selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
        
                            }}
                            className={"iconfont "+foot.icon}
                          />
                          }
        
                          selected={this.state.selectedTab==foot.name}
                          badge={i==foots.length-2&&carTotal}
                          onPress={() => {
                            this.setState({
                              selectedTab: foot.name,
                            });
                            //this.props.history.push(foot.path);
                            //this.context.history.push(foot.path);
                            history.push(foot.path)
                        }}
                          data-seed="logId"
                          
                        ></TabBar.Item>
                 
                    
                )
               })     
            }
           </TabBar>
           
        </div>

    )
}
}

Afoot.contextTypes={
    history:PropTypes.object,
    location:PropTypes.object
}

export {Afoot}