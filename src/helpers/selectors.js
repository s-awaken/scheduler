
import Appointment from "components/Appointment";



export function getAppointmentsForDay(state, day) {
  let array = [];
  state.days.forEach((everyDay) => {
    if (everyDay.name === day) {
      // console.log(everyDay.name);
      for (let num of everyDay.appointments) {
        array.push(state.appointments[num]);
      }
    }
  })
  return array;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  let obj = {};
  let interviewerId = interview.interviewer;


  let interviewer = state.interviewers[interviewerId];
  return obj = { ...interview, interviewer }



}
export function getInterviewersForDay(state, day) {
  //... returns an array of Interviewers for that day
  let array = [];
  state.days.forEach((everyDay) => {
    if (everyDay.name === day) {
      for (let num of everyDay.interviewers) {
        array.push(state.interviewers[num]);
      }
    }
  })
  return array;
}