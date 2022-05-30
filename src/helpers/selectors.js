
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

export function getInterviewersForDay(state, day) {
  let output = [];
  if (state.days.length === 0) return [];
  const filteredDay = state.days.find(e => e.name === day);
  if (!filteredDay) return [];
  filteredDay.interviewers.forEach(id => {
    output.push(state.interviewers[id]);
  }); 
  return output;
}


export function getInterview(state, interview) {
  let output = {};
  if (!interview) return null;
  const fixedInterviewer = state.interviewers[interview.interviewer];
  output.student = interview.student;
  output.interviewer = fixedInterviewer;
 return output;

  
}