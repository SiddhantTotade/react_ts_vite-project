import { Alert, AlertColor, AlertTitle, Stack } from '@mui/material'

interface Alert {
    msg: string;
    severity: AlertColor;
}

// type Severity = 'error' | 'success' | 'info' | 'warning' | undefined

const SubmitAlert = (props: Alert) => {

    const { msg, severity } = props

    return (
        <Stack sx={{ marginTop: '10%' }}>
            <Alert severity={severity}>
                <AlertTitle>{msg}</AlertTitle>
            </Alert>
        </Stack>
    )
}

export default SubmitAlert