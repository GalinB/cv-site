import React, { useState } from 'react'

function WorkHistory(props) {
  return (
    <div className={props.className}>
      <img src={props.source} className="workImg" />
      <div className="workdivInner">
        <div className="workTitle">{props.title}</div>
        <div className="workPlace">{props.companyName}</div>
        <div className="workDetails">
          <div>{props.startDate}</div>
          <div>-</div>
          <div>{props.endDate}</div>
          <div>({props.totalTimeWorked})</div>
        </div>
      </div>
    </div>
  )
}

export default WorkHistory
