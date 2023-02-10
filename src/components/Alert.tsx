import { Alert, AlertColor, AlertTitle, Stack } from '@mui/material'

interface Alert {
    msg: string;
    severity: AlertColor;
    display: string;
}

const SubmitAlert = (props: Alert) => {

    const { msg, severity, display } = props

    return (
        <Stack sx={{ marginTop: '10%', display:{display} }}>
            <Alert severity={severity}>
                <AlertTitle>{msg}</AlertTitle>
            </Alert>
        </Stack>
    )
}

export default SubmitAlert