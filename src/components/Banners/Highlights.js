import React from 'react'
import { Box , Text } from '@chakra-ui/react'
import EventCard from '../Cards/EventCard'
import "./Highlights.css"

export default function Highlights() {

    const events = [
        {
            title: "Spectrum",
            type: "Type : LGBTQ+", 
            description: "Spectrum is a non-profit organization that works towards the empowerment of the LGBTQ+ community. We aim to create a safe space for the LGBTQ+ community and provide them with the resources they need to live their lives to the fullest.",
            status: "Urgent" ,
            goal : "Rs. 25,000"
        },

        {
            title: "Spectrum",
            type: "Type : LGBTQ+", 
            description: "Spectrum is a non-profit organization that works towards the empowerment of the LGBTQ+ community. We aim to create a safe space for the LGBTQ+ community and provide them with the resources they need to live their lives to the fullest.",
            status: "Urgent" ,
            goal : "Rs. 50,000"
        },

        {
            title: "Spectrum",
            type: "Type : LGBTQ+", 
            description: "Spectrum is a non-profit organization that works towards the empowerment of the LGBTQ+ community. We aim to create a safe space for the LGBTQ+ community and provide them with the resources they need to live their lives to the fullest.",
            status: "Urgent" ,
            goal : "Rs. 25,000"
        },

        

    ]
  return (
    <>
        <Box bg="blue.100" p={4} w="100%" h="100%" color="black" className='highlights'>
            <Box bg="pink.100" p={4} w="100%" h="100%" color="black" style={{
                borderRadius: "10px",
                marginTop : "20px"
            }}>
                <Text style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textAlign: "center"
                }}>Top Fund Raisers</Text>
            </Box>
            <Box className='card'>
                {events.map((event) => (
                    <EventCard
                    title = {event.title}
                    type = {event.type}
                    description = {event.description}
                    status = {event.status}
                    goal = {event.goal}
                />
                ))}

            </Box>
        </Box>
    
    </>
  )
}
