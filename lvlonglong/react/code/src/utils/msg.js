export const msg="are you ok !"




//构造函数 (构造器+原型对象+静态对象)
export class People{
    constructor(names,age){
        this.names=names;
        this.age=age;
    }

    //原型对象
    say(){

    }
    todo(){

    }

}

People.hobby=["eat","sleep"]

export class Student extends People{
    constructor(names,age,score){
        super(names,age);
        this.score=score;
    }
    goto(){

    }
    say(){
        return super.say();
    }
}

Student.hobby=["read","music"];

export class component{
    constructor(){
        
    }

    render() {
    
    }

    componentWillMount(){

    }
}

// class App extends React.Component{
    
// }
