import {Box, Typography, useTheme} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  return (
    <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />


    </Box>
  )
}

export default Form