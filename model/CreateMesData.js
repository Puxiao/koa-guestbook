const OneMesData = require('./OneMesData');
const ValueCheck = require('input-value');

class CreateMesData{

    constructor(){
        
    }

    static create(obj){
        if(this.checkAll(obj)){
            let data = new OneMesData();
            data.state = obj.state;
            data.user = obj.user;
            data.tel = obj.tel || null;//选填项(可不填)
            data.title = obj.title;
            data.detail = obj.detail;
            data.time = Date.now();
            data.ip = obj.ip;
            return data;
        }else{
            return null;
        }
    }

    static checkAll(obj){
        return this.checkState(obj.state)  && this.checkUser(obj.user) && this.checkTel(obj.tel) && this.checkTitle(obj.title) && this.checkDetail(obj.detail) && this.checkIP(obj.ip);
    }

    static checkState(num){
        //state校验规则：取值范围1-3
        return ValueCheck.checkIntRange(num,1,3);
    }

    static checkUser(str){
        //user校验规则：不含空格的前提下，字符长度范围1-20
        return ValueCheck.lengthRange(str,1,20);
    }

    static checkTel(str){
        //tel校验规则：如果有值则不能以10/11/12开头的11位纯数字，若没有值则返回true(因为tel为选填项)
        return ValueCheck.isTel(str) || !Boolean(str);
    }

    static checkTitle(str){
        //title校验规则：字符长度范围1-50，可以有空格但不可以是纯空格(至少有1个有效字符)
        return ValueCheck.lengthRange(str,1,50) && ValueCheck.clearSpaces(str).length>=1;
    }

    static checkDetail(str){
        //detail校验规则：字符长度范围1-300
        return ValueCheck.lengthRange(str,1,300);
    }

    static checkIP(str){
        //ip校验规则：符合xxx.xxx.xxx.xxx格式，其中xxx取值范围为0~255
        return ValueCheck.isIP(str);
    }
}

module.exports = CreateMesData;