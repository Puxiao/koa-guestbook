const mysql = require('mysql');
const mysqlConfig = require('../config/config').mysqlConfig;

const pool = mysql.createPool(mysqlConfig);
const add_mes_sql = 'INSERT INTO mes(`state`,`user`,`tel`,`title`,`detail`,`time`,`ip`) values(?,?,?,?,?,?,?)';
const get_all_mes_sql = 'SELECT * from mes where `state`!=3 order by id desc';

function addMes(mes){
    return new Promise((resolve,reject) => {
        pool.query(add_mes_sql,[mes.state,mes.user,mes.tel,mes.title,mes.detail,mes.time,mes.ip],(err,results,fields) =>{
            if(err){
                reject(err);
            }else{
                if(results){
                    resolve(results);
                }else{
                    reject(fields);
                }
            }
        });
    });
}

function getAllMes(){
    return new Promise((resolve,reject) => {
        pool.query(get_all_mes_sql,(err,results,fields) =>{
            if(err){
                reject(err);
            }else{
                if(results){
                    resolve(results);
                }else{
                    reject(fields);
                }
            }
        });
    });
}

module.exports = {
    addMes,
    getAllMes
}