import { box, Typography, useTheme } from "@mui/material";
import { dataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { dummydata} from "../../gsdata/dummyData";
import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const officeteam = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "i.d", HeaderName: "I.D"},
         {field: "name", 
         HeaderName: "Name",
          flex: 1, 
          cellClassName: "name--column--cell",
        },
        {field: "visits_online", 
         HeaderName: "Visits Online",
          type: "number",
          headerAlign: "left", 
          align: "left", 
        },
        {field: "drinkstaken", 
        HeaderName: "Drinks taken",
         type: "number",
         headerAlign: "left", 
         align: "left", 
       },
       {field: "entrytemp", 
       HeaderName: "Entry temp",
        type: "number",
        headerAlign: "left", 
        align: "left", 
      },
      {field: "wateredplants", 
      HeaderName: "Watered plants",
       type: "number",
       headerAlign: "left", 
       align: "left", 
     },
     {field: "entrytime", 
     HeaderName: "Entry time",
      type: "number",
      headerAlign: "left", 
      align: "left", 
    },
    {field: "access", 
    HeaderName: "Access Authorisation",
    flex: 1, 
    renderCell: ({ row: { access }}) => {
        return (
        <box
            width="60%"
            m= "0 auto"
            p="5px"
            display="flex"
            justifyContent="centre"
            backgroundColor = {
                access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
            >
            { access === "admin" && <AdminPanelSettingsOutlinedIcon />} 
            { access === "user" && <LockOpenOutlinedIcon />} 
            <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                {access}
            </Typography>
            

        </box>
        )

    }
   },
        

    ];

    return (
        <box m="20px">
            <Header title="officeteam" subtitle="managing office team" />
            <box m="40px 0 0 0" height="75vh" sx={{
                "& .muiDataGrid-root": {
                    border: "none",
                },
                "& .muiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .muiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none", 
                    backgroundColor: colors.blueAccent[700],
                },
                

            }}>
                <dataGrid 
                rows = {dummydata}
                columns = {columns}
                />
            </box>
        </box>
    )

}

export default officeteam;
