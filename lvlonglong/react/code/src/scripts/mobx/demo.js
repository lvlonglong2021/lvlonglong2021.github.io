import {observable,action,computed,autorun} from  "mobx"

class Demo{
    @observable count =2020;  //state
    @observable city ="武汉";  //state
    @observable msg ="";  //state
    

    @action countAdd=()=>{
        this.count++;
        console.log(this.count)
    }
    //计算属性
    @computed get newCount(){
        return this.count*2;
    }
    @action countDesc=payload=>{
        this.count-=payload
    } 
    @action changeMsg=payload=>{
        this.msg=payload
    } 
         
}

export default new Demo();