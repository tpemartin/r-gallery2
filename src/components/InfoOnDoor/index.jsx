import * as react from 'react';
import { Stack } from "@mui/material";
import InfoPanel_variableContent from './InfoPanel';



export default function InfoOnDoor_variableContent({officeHours, email, phone, office}) {
    return (
        <Stack direction="column" spacing={2}>
            <InfoPanel_variableContent title="Office Hours" content={officeHours} />
            <InfoPanel_variableContent title="Email" content={email} />
            <InfoPanel_variableContent title="Phone" content={phone} />
            <InfoPanel_variableContent title="Office" content={office} />
        </Stack>
    )
}

export function InfoOnDoor_fixedContent(){
    return (
        <Stack direction="column" spacing={2}>
            <InfoPanel_variableContent title="Office Hours" content="Thu. 12:00 - 14:00" />
            <InfoPanel_variableContent title="Email" content="guowc@gm.ntpu.edu.tw" />
            <InfoPanel_variableContent title="Phone" content="886-2-86741111#66100" />  
            <InfoPanel_variableContent title="Office" content="社科院 3F16" />
        </Stack>
    )
}


