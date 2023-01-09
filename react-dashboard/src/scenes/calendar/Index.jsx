import { useState } from "react";
import FullCalender, { formatDate } from "@FullCalender/react"
import dayGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import {
    Box, 
    List, 
    ListItem, 
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"

import Header from "../../components/Header";
import { tokens } from "../../theme"

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = promt("please enter tittle of new event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselected();

        if (title) {
            calendarApi.addEvent({
                id: '${selected.dateStr}-${title}',
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }


        
        
    };

    const handleEventClick = (selected) => {
        if (windows.confirm(`Are you sure you want to delete the event '${selected.event.title}'` )) {
            selected.event.remove();

        }
    };

    return <box margin m="20px">
        <Header title = "Calendar" subtitle="Calender page" />

        <box display="flex" justifyContent="space-between">
            {/* CALENDER SIDEBAR */}
            <box flex="1 1 20%"
             background = {colors.primary[400]}
              p="15px" 
              borderRadius="4px">

                <Typography variant="h5">Events</Typography>
                <list>
                    {currentEvents.map((event) => (
                        <ListItem
                        key={event.id}
                        sx={{ 
                            backgroundColor: colors.greenAccent[500], 
                            margin: "10px 0", 
                            borderRadius: "2px",
                    }}
                    >
                        <ListItemText
                        primary={event.title}
                        secondary= {
                            <Typography>
                                {formatDate(event.start, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </Typography>
                        }
                        />
                    </ListItem>
                    ))}
                
                </list>

            </box>

            {/* CALANDAR */}
            <Box flex="1 1 100%"ml="15px">
                <FullCalender
                height="75vh"
                plugins= {[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                ]}
                HeaderToolBar={{
                    left: "prev,next,today", 
                    centre: "title",
                    right: "dayGridMonth,timeGrisWeek,timeGridDay,listMonth" 
                }}
                intialView= "dayOridMonth"
                editable={true}
                selectable={true}
                selectmiror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                    { id: "2345", title: "Go Squared Event", date: "2023-01-08" },
                    { id: "7654", title: "next meeting", date: "2023-01-04"}

                ]}
                />


            </Box>



        </box>

    </box>

};

export default Calendar;
