import {useState, useEffect} from 'react'
import axios from "axios";


export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, [])

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id], 
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments, 
      [id]: appointment
    };
    const days = updateSpots(state, appointments, id);
    

    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => {setState({...state, appointments, days})});
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id], 
      interview: null
    };
    const appointments = {
      ...state.appointments, 
      [id]: appointment
    };
    const days = updateSpots(state, appointments, id);
    console.log(days);

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {setState({...state, appointments, days})});
    
  }

  const getSpotsForDay = function (day, appointments) {
    let spots = 0;

    for (let id of day.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    } return spots;
  }

  const updateSpots = function (state, appointments, id) {

    const dayObj = state.days.find (day => day.name === state.day); //finding and object with assigned day
    const spots = getSpotsForDay(dayObj, appointments);

    const newDays = state.days.map (day => day.name === state.day ? {...dayObj, spots} : day )
    
    return newDays;
  }
  
  const setDay = day => setState({ ...state, day});


  return {state, setDay, bookInterview, cancelInterview}
  
}
