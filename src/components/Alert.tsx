import React from 'react'
import { Alert, AlertTitle, Stack } from '@mui/material'

interface Alert {
    msg: string;
    severity: string;
}

const SubmitAlert: React.FC<Alert> = (props) => {
    return (
        <Stack sx={{ marginTop: '10%' }}>
            <Alert severity={props.severity}>
                <AlertTitle>{props.msg}</AlertTitle>
            </Alert>
        </Stack>
    )
}

export default SubmitAlert