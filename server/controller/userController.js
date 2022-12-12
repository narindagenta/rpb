const express = require('express')
const db = require('../db.config/db.config.js')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const bcrypt = require('bcrypt');
SECRET = process.env.SECRET


const register = async(req, res, next) => {
    // * 7. silahkan ubah password yang telah diterima menjadi dalam bentuk hashing
    const {username, email, password} = req.body
    const salt           = await bcrypt.genSalt();
    const hashPassword   = await bcrypt.hash(password, 10)
   
    // 8. Silahkan coding agar pengguna bisa menyimpan semua data yang diinputkan ke dalam database
    try {
        await db.query(`INSERT INTO users VALUES (DEFAULT, $1, $2, $3)`, [username, email, hashPassword])
        res.send('sukses input!')
    } 
    catch (err) {
        console.log(err.message)
        return res.status(500).send(err)
    }
}

const login = async(req, res, next) => {
    
    const{email,password}= req.body;
    try {
        const user = await db.query(`SELECT * FROM users where email=$1;`,[email])
        //check if user is exist
        if(user.rowCount>0){
            // 9. komparasi antara password yang diinput oleh pengguna dan password yang ada didatabase
            const validPass = await bcrypt.compare(password,user.rows[0].password)
            //check if password is match
            if (validPass) {
                // 10. Generate token menggunakan jwt sign
                let jwtSecretKey = process.env.SECRET;
                let data = {
                    id: user.rows[0].id,
                    username: user.rows[0].username,
                    email:user.rows[0].email,
                    password:user.rows[0].password
                }
                const token = jwt.sign(data, jwtSecretKey);
                
                //11. kembalikan nilai id, email, dan username
                 res.cookie("JWT", token, {httpOnly: true,sameSite: "strict",}).status(200).json({
                    id: user.rows[0].id,
                    username: user.rows[0].username,
                    email:user.rows[0].email,
                    token: token
                    });
            } else {
                return res.status(400).send('wrong pass!')   
            }
        }else{
            return res.status(400).json({
                error: "user tidak teridentikasi, silahkan login",
            })
        }
    } catch (error) {
        return res.send('login susah')
        
    }
}


const logout = async(req, res, next) => {
                
    try {
        // 14. code untuk menghilangkan token dari cookies dan mengembalikan pesan "sudah keluar dari aplikasi" 
        res.clearCookie("JWT").send("sudah keluar");
        return res.sendStatus(200);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send(err)
    }
            
}

const verify = async(req, res, next) => {
    try {
        // 13. membuat verify
        const{email}= req.body;
        const user = await db.query(`SELECT * FROM users where email=$1;`,[email]);
        
        return res.status(200).json({
            user
         })
        const data = req.verified
        return res.status(200).json(data)
    } catch (err) {
        console.log(err.message);
        return res.status(500).send(err)    
    }
}

module.exports = {
    register,
    login,
    logout,
    verify
}