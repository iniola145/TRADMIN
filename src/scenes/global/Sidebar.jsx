import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// Import the image in the assests folder
import Image from "../../assets/tradmin1.png";
import Image2 from "../../assets/tradmin.png";
// import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    )
}

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`,
                    height: "100vh !important",
                },
                "& .icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .ps-menu-button": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .ps-menu-button:hover": {
                    color: "#868dfb !important",
                    backgroundColor: "transparent !important",
                },
                "& .ps-active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/*Logo and Menu Icon*/}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="22px"
                                mt="20px"
                            >
                                {theme.palette.mode !== "dark" ? 
                                <img
                                    alt="profile-user"
                                    width="150px" height="150px"
                                    src={Image2}
                                    style={{ cursor: "pointer", objectFit: "contain" }}
                                />
                                :
                                <img
                                    alt="profile-user"
                                    width="150px" height="150px"
                                    src={Image}
                                    style={{ cursor: "pointer", objectFit: "contain" }}
                                />
                                }
                                
                            </Box>
                        )}
                    </MenuItem>
                    {/* User */}

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {/* <img
                                    alt="profile-user"
                                    width="100px" height="100px"
                                    // src={Image}
                                    style={{ cursor: "pointer", borderRadius: "50%", objectFit: "cover" }}
                                /> */}
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Olamide
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>Admin</Typography>
                            </Box>
                        </Box>
                    )}
                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "5%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Maps"
                            to="/map"
                            icon={<FmdGoodOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Download"
                            to="/download"
                            icon={<CloudDownloadIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>

                </Menu>
            </Sidebar>
        </Box>
    );
}

export default SidebarComponent;
