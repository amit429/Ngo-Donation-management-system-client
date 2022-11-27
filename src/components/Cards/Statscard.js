import {
     Box ,
     Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup, 
    Text,
    Button,
} from '@chakra-ui/react'
import React from 'react'
import '../Statistics/Stats.css'
import { HiCurrencyRupee } from 'react-icons/hi'
import {FaRupeeSign} from 'react-icons/fa'

export default function Statscard(props) {
  return (
    <>
        <Box className='stat_card'>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 1rem',

            }}>
                <Button padding={5} leftIcon={props.icon} colorScheme={props.scheme} variant='ghost'>
                    <Text fontSize="4xl" fontWeight="600">{props.amt}</Text>
                </Button>

                <Text marginTop="4%" fontSize="lg" fontWeight="400">{props.desc}</Text>
            </Box>
        </Box>
    
    </>
  )
}
