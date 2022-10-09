import React from 'react'
import ApiClient from './Apirequest'



 export const login  =  async(email,password) => {
try {
    const response = await ApiClient.post('/users/login',{email,password})
    console.log(ApiClient)
    const status = response.data.status
    const user = response.data.user
    const token = response.headers['set-cookie'][0].split(';')[0]
    console.log(response)
    return response


} catch {
    console.log('err')
}
}

export const Register = async(data) =>{
    try {
       console.log(data)
        const response = await ApiClient.post('/users/signup',{...data})
        return response
    }
    catch {
        console.log('err')
    }
}