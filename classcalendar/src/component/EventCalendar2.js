import React from 'react';
import '../App.css'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Calendar } from '@fullcalendar/core'
import * as data from "./dummyData.json"

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');

  let calendar = new Calendar(calendarEl, {
    plugins: [ timeGridPlugin ],
    initialView: 'timeGridWeek',
    slotMinTime: "08:00:00",
    slotMaxTime: "22:00:00",
    hiddenDays: [ 0, 6 ],
    allDaySlot: false,
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'today prev,next'
    },


    dayHeaderFormat: { weekday: 'long' },
    expandRows: true
    });

  calendar.addEventSource(data.courses)
  calendar.render();
});

