import React from 'react'
import WorkHistory from './molecules/WorkHistory.js'

export default function Middle4({ darkMode }) {
  return (
    <div className={darkMode ? 'middle2' : 'darkMiddle2'}>
      <h1 className={darkMode ? 'middle2h1' : 'darkMiddle2h1'}>Work History</h1>
      <WorkHistory
        source="../../pics/servebolt.jfif"
        title="Territory Manager"
        companyName="Servebolt"
        startDate="August 2022"
        endDate="February 2023"
        totalTimeWorked="7 months"
        className="workdiv"
        childrenName="workdivInner"
      />
      <WorkHistory
        source="../../pics/hostpapa.jfif"
        title="Senior Account Manager"
        companyName="HostPapa"
        startDate="July 2020"
        endDate="July 2022"
        totalTimeWorked="2 years"
        className="workdiv"
        childrenName="workdivInner"
      />
      <WorkHistory
        source="../../pics/godaddy.jfif"
        title="Aftermarket Sales Specialist"
        companyName="GoDaddy"
        startDate="Jun 2019"
        endDate="Jun 2020"
        totalTimeWorked="1 year"
        className="workdiv"
        childrenName="workdivInner"
      />
      <WorkHistory
        source="../../pics/uber.jfif"
        title="Sales Specialist"
        companyName="Uber"
        startDate="October 2016"
        endDate="June 2019"
        totalTimeWorked="2 years 9 months"
        className="workdiv"
        childrenName="workdivInner"
      />
      <WorkHistory
        source="../../pics/marketing.jfif"
        title="Marketing Intern"
        companyName="Ellison Marketing"
        startDate="September 2018"
        endDate="April 2019"
        totalTimeWorked="8 months"
        className="workdiv"
        childrenName="workdivInner"
      />
    </div>
  )
}
