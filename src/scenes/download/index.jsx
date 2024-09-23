import React from 'react'
import styled from 'styled-components'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'

const Download = () => {
  return (
    <Box m="20px">
        <Header title="DOWNLOAD" subtitle="Download the app" />

        <Button>Download</Button>
    </Box>
  )
}

export default Download

const Button = styled.button`
    background-color: #517BF4;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: .3s all ;

    &:hover {
        background-color: #45a049;
    }
    `
