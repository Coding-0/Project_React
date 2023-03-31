
const express = require ('express')
const router = express.Router()
const signUpCopy = require('../models/SignUpModels')

router.post('/signup' , (request , response)=>
{
   const signedUpUser = new signUpCopy({

    FirstName:request.body.fullName,
    LastName:request.body.username,
    email:request.body.email,
    password:request.body.password
   })

   signedUpUser.save ()
    .then (data =>
        {
            response.json(data)
        })
    .catch(error =>
        {
            response.json(error)
        })
   
})
router.get('/signin')
module.exports = router 