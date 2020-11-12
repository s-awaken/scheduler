import React from 'react'

import "components/InterviewerList.scss"

import InterviewerListItem from "../components/InterviewerListItem"

export default function InterviewerList(props) {
  
  // const [ interviewer, setInterviewer] = useState(props.interviewer)

  const interviewers = props.interviewers.map(value => {
    return (
      <InterviewerListItem
        key={value.id}
        name={value.name}
        avatar={value.avatar}
        selected={value.id === props.interviewer}
        onChange={event => props.setInterviewer(value.id)}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  )
}
