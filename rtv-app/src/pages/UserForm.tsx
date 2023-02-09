import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import SubmitAlert from '../components/Alert';
import Timer from '../components/Timer';

interface Props {
    onSubmit: (values: UserFormValues) => void;
}

interface UserFormValues {
    name: string;
    email: string;
    phone: string;
}

interface AlertValues {
    msg: string;
    severity: string;
}

const UserForm: React.FC<Props> = () => {

    const [formValues, setFormValues] = useState<UserFormValues>({
        name: '',
        email: '',
        phone: ''
    });

    const [alert, setAlert] = useState<AlertValues>({
        msg: '',
        severity: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formValues.name !== '' && formValues.email !== '' && formValues.phone !== '') {
            localStorage.setItem('name', formValues.name)
            localStorage.setItem('email', formValues.email)
            localStorage.setItem('phone', formValues.phone)
            setAlert({ msg: 'Data Saved Successfully', severity: 'success' })
        }
        else {
            setAlert({ msg: 'All Fields are Required', severity: 'error' })
        }

        setFormValues({ email: '', name: '', phone: '' })
    };

    return (
        <>
            <Box component="form" sx={{ gap: '10px', color: '#fff', width: '40%', display: 'grid', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} noValidate autoComplete="off">
                <TextField type='text' sx={{ color: '#fff' }} onChange={handleChange} value={formValues.name} id="name" name='name' label="Name" variant="standard" />
                <TextField type='text' onChange={handleChange} value={formValues.email} id="email" name='email' label="Email" variant="standard" />
                <TextField type='text' onChange={handleChange} value={formValues.phone} id="phone" name='phone' label="Phone" variant="standard" />
                <Button sx={{ top: '30%' }} type='reset' variant="contained" onClick={handleSubmit}>Submit</Button>
                <SubmitAlert msg={alert.msg} severity={alert.severity} />
                {/* <Timer /> */}
            </Box>
        </>
    );
};

export default UserForm;
