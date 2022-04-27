import { Button } from '@mui/material'
import React from 'react'

function SingnIn() {
    function signInWithGoogle() {
        
    }
  return (
    <div>
        <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </div>
  );
}

export default SingnIn;