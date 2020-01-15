import {observable, action, computed, autorun} from  "mobx"
import {axios} from "&"

class Collect {
    @observable list = [] ;  // 购物车数据 
    
    
    @action postCollect = async (url,goodId)  => {
        const res = await axios.post(url,goodId);
    }

    @action getCollect = async (url)  => {
        const res = await axios.get(url);
        this.list=res.data.result
    }

}
export default new Collect()