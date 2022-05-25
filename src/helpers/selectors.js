
export function getAppointmentsForDay(state, day) {
  let output = [];
  if (state.days.length === 0) return [];
  const filteredDay = state.days.find(e => e.name === day);
  if (!filteredDay) return [];
  filteredDay.appointments.forEach(id => {
    output.push(state.appointments[id]);
  }); 
  return output;
}
