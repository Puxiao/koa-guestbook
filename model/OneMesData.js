let [_state,_user,_tel,_title,_detail,_time,_ip] = [null,null,null,null,null,null,null];

class OneMesData{
    constructor(obj){
        if(obj){
            _state = obj.state || null;
            _user = obj.user || null;
            _tel = obj.tel || null;
            _title = obj.title || null;
            _detail = obj.detail || null;
            _time = obj.detail || null;
            _ip = obj.ip || null;
        }
    }

    get state(){
        return _state;
    }

    set state(value){
        _state = value;
    }

    get user(){
        return _user;
    }

    set user(value){
        _user = value;
    }

    get tel(){
        return _tel;
    }

    set tel(value){
        _tel = value;
    }

    get title(){
        return _title;
    }

    set title(value){
        _title = value;
    }

    get detail(){
        return _detail;
    }

    set detail(value){
        _detail = value;
    }

    get time(){
        return _time;
    }

    set time(value){
        _time = value;
    }

    get ip(){
        return _ip;
    }

    set ip(value){
        _ip = value;
    }
}

module.exports = OneMesData;