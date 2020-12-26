import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import './Timeline.css'
import { Typography } from "@material-ui/core";


                    //destructuring: get title from props: const title = props 
const CustomTimeline = ({title, icon, children}) => {
    return (
         <div>
      {/* Header  */}
    <Timeline className={'timeline'}>
      <TimelineItem className={'timeline_firstItem'}>
        <TimelineSeparator>
          <TimelineDot className={'timeline_dot_header'}>
             {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
           <Typography variant="h6" className={'timeline_header'}>
             {title}
           </Typography>
        </TimelineContent>
      </TimelineItem>

    
    {children}


      {/* Body */}
      <TimelineItem>
        <CustomTimelineSeperator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>

 
    </Timeline>
 
        </div>
    )
}

export const CustomTimelineSeperator = () => (
                                    //mispelling as "seperator_padding"
                                    // caused wierd TL dot issues
    <TimelineSeparator className={'separator_padding'}>
          <TimelineDot variant={'outlined'} className={'timeline_dot'} />
          <TimelineConnector />
    </TimelineSeparator>
)

export default CustomTimeline
