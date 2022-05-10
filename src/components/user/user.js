import { Button } from '@material-ui/core'
import React from 'react'
import Box from "@material-ui/core/Box";

function User() {
  return (
    <div>
      <Box m={1} style={{
        display : 'flex' ,
      }}>
        <Button variant='contained' color='primary'>
            <a href='/user/vaccinationtable'>Vaccination Details</a>
        </Button>
        <Button variant='contained' color='primary'>
            <a href='/user/certificate'>Certificate</a>
        </Button>
        <Button variant='contained' color='primary'>
            <a href='/availability'>Availability</a>
        </Button>
      </Box>
    </div>
  )
}

export default User