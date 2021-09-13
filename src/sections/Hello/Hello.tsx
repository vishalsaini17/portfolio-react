import React from 'react'
import { Box, } from '@material-ui/core'

type props = {}

const Hello: React.FC<props> = () => {
  return (
    <>
      <Box component="section" id="hello" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi.
      </Box>
    </>
  )
}
export default Hello