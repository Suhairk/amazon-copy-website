import React from 'react'
import '../components/styles/SignOption.css'
import {Button} from 'react-bootstrap'
function SignOption() {
  return (
    <div className='signOptionMainConatiner'>
        <div className='signOption'>
            <p>See personalized recommendations</p>
            <a href='#'><Button variant="warning" className='btn'>Sign In</Button></a>
            <div className='signinButton' >        
            <p>New Customer?</p><a href='#'>   click here</a>
        </div>

        </div>
    </div>
  )
}

export default SignOption