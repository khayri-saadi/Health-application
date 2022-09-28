import React from 'react'
import ApiClient from './Apirequest'



 export const login  =  async(email,password) => {
try {
    const response = await ApiClient.post('/users/login',{email,password})
    //console.log(response.headers['set-cookie'][0].split(';')[0])
    const status = response.data.status
    const user = response.data.user
    const token = response.headers['set-cookie'][0].split(';')[0]
    //console.log(status)
    //console.log(user)
   // console.log(token)
    return response


} catch {
    console.log('err')
}
}

export const Register = async(email,Password,name,confirmPassword) =>{
    console.log('hello')
    console.log('signup')
    try {
        const response = await ApiClient.post('/users/signup',{email,Password,name,confirmPassword})
        return response
    }
    catch {
        console.log('err')
    }
}