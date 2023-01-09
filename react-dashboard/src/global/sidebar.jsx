import { useState } from "react";
import { proSidebar, Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  PeopleOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  ContactsOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  CalenderTodayOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  HelpOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  BarChartOutlinedIcon  from "@mui/icons-material/BarChartOutlined";
import  PieChartOutlinedOutlinedIcon  from "@mui/icons-material/PieChartOutlinedOutlined";
import  TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import  MapOutlinedIcon  from "@mui/icons-material/MapOutlined";
import { typography } from "@mui/system";

const Item = (tittle, to, icon, selected, setSelected) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return 
    <menuitem active={selected === tittle} style={{ color: colors.grey[100]}} 
    onClick={() =>setSelected(tittle)} 
    icon={icon}>

    <typography>{tittle}</typography>
    <link to={to} />
    </menuitem>

}


const sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.colors.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('dashboard')
    return (
        <box>
            sx={{
                "& .pro-sidebar-inner": {
                    background: '${colors.primary[400]} !important',
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-innner-item": {
                    padding: "5px 35px 5px 20px !import",
                },
                "& .pro-inner-item:hover": {
                color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
              }},
              {!isCollapsed && (
                <box
                display="flex"
                justifyContent="space-between"
                alignItems="centre"
                ml="15px"
                >
                    <typography variant="h13" color={colors.grey[100]}>
                        ADMIN
                    </typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <menuOutlinedIcon />
                    </IconButton>
                    </box>
              )}
              <menuItem>
              { /* USER */}
              {!isCollapsed && (
                <box mb="25px">
                    <box display="flex" justifyContent ="centre" alignItems="centre">
                        <img
                         
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        style={{ cursor: "pointer", borderRadius:"50%"}}

                        />
                    </box>
                    <box textAlign="centre">
                        <Typography varaint="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Dee </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            Admin</Typography>
                    </box>

                </box>
              )}

              {/* MENU ITEMS */}
              <box paddingLeft={isCollapsed ? undefined : "100%"}>
                <item 
                tittle="dashboard"
                to="/"
                icon= {<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx= {{ m: "15px 0 5px 20px" }}

                >Data</Typography>



                <item 
                tittle="total number of visitors"
                to="/visitors"
                icon= {<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <item 
                tittle="next person to make tea"
                to="/maketea"
                icon= {<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <item 
                tittle="Plants need watering"
                to="/water plants"
                icon= {<HelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <item 
                tittle="Drinks left"
                to="/drinks left"
                icon= {<PieChartOutlinedOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx= {{ m: "15px 0 5px 20px" }}

                >Tempreture</Typography>
                
                <item 
                tittle="Office tempreture"
                to="/office tempreture"
                icon= {<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                
                <item 
                tittle="outside tempreture"
                to="/outside tempreture"
                icon= {<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                 <Typography
                variant="h6"
                color={colors.grey[300]}
                sx= {{ m: "15px 0 5px 20px" }}

                >Today's Info</Typography>
                
                 <item 
                tittle="Calender Today"
                to="/calender"
                icon= {<CalenderTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <item 
                tittle="Hometime"
                to="/home time"
                icon= {<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                
                 <item 
                tittle="FAQ"
                to="/FAQ"
                icon= {<HelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                 <item 
                tittle="geography"
                to="/location"
                icon= {<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected} 
                />


              </box>
              </menuItem>
        </box>
    );
};

export default sidebar;
