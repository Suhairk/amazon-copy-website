import React from 'react'
import '../components/styles/SignOption.css'

function SignOption() {
  return (
    <div className='signOptionMainConatiner'>
        <div className='signOption'>
            <p>See personalized recommendations</p>
            <a href='#'><button type='submit' ><b>Sign in</b></button></a>
            <div className='signinButton' >        
            <p>New Customer?</p><a href='#'>   click here</a>
        </div>

        </div>
    </div>
  )
}

export default SignOption