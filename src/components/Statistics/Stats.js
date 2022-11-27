import { Box , Text} from '@chakra-ui/react'
import React from 'react'
import Statscard from '../Cards/Statscard'
import './Stats.css'
import {FaRupeeSign} from 'react-icons/fa'
import {FaPeopleCarry} from 'react-icons/fa'
import {BsCalendar2EventFill} from 'react-icons/bs'
import {CgOrganisation} from 'react-icons/cg'

export default function Stats() {

    const data = [
        {
            amt: '50,00,000 +',
            desc: 'Total Amount Raised',
            icon: <FaRupeeSign size={40}/>,
            scheme: 'teal'
        },

        {
            amt: '4,000 +',
            desc: 'Total Volunteers Joined',
            icon: <FaPeopleCarry size={40}/>,
            scheme: 'green'
        },

        {
            amt: '1300 +',
            desc: 'Events Organised',
            icon: <BsCalendar2EventFill size={30}/>,
            scheme: 'pink'
        },

        {
            amt: '20,000 +',
            desc: 'Companies Partnered',
            icon: <CgOrganisation size={40}/>,
            scheme: 'purple'
        },
    ]
    
  return (
   <>
        <Box className='statistics'>
            <Box className='title'>
                <Text>Statistics</Text>
            </Box>

            <Box className='stat_cards'>
                {data.map((item) => {
                    return(

                        <Statscard 
                            amt = {item.amt} 
                            desc = {item.desc}
                            scheme = {item.scheme}
                            icon = {item.icon}
                         />
                    )
                })}
            </Box>
            
        </Box>
   
   </>
  )
}
