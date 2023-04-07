import styled from "styled-components"
import Calendar from 'react-calendar';
import './MainCalendar.css'

const Section = styled.section`
margin-top: 20px;
`

export default function MainCalendar() {
    return(
        <Section>
            <Calendar />
        </Section>
    )
}