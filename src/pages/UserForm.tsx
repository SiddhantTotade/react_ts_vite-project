import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import SubmitAlert from '../components/Alert';
import { useNavigate } from 'react-router-dom';
import { AlertColor } from '@mui/material';

interface UserFormValues {
    name: string;
    email: string;
    phone: string;
}

interface AlertValues {
    msg: string;
    severity: AlertColor;
    display: string;
}

type Severity = { severity: AlertColor; msg: string; }

const UserForm = () => {

    const navigate = useNavigate()

    const [formValues, setFormValues] = useState<UserFormValues>({
        name: '',
        email: '',
        phone: ''
    });

    const [alert, setAlert] = useState<AlertValues>({
        msg: '',
        severity: 'success',
        display: 'none'
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (formValues.name !== '' && formValues.email !== '' && formValues.phone !== '') {
            localStorage.setItem('name', formValues.name)
            localStorage.setItem('email', formValues.email)
            localStorage.setItem('phone', formValues.phone)
            setAlert({ msg: 'Data Saved Successfully', severity: 'success', display: 'block' })
            setTimeout(() => { navigate('/data') }, 5000)
        }
        else {
            setAlert({ msg: 'All Fields are Required', severity: 'error', display: 'block' })
        }

        setFormValues({ email: '', name: '', phone: '' })
    };

    return (
        <>
            <Box component="form" sx={{ gap: '10px', color: '#fff', width: '40%', display: 'grid', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} noValidate autoComplete="off">
                <TextField type='text' sx={{ color: '#fff' }} onChange={handleChange} value={formValues.name} id="name" name='name' label="Name" variant="standard" />
                <TextField type='text' onChange={handleChange} value={formValues.email} id="email" name='email' label="Email" variant="standard" />
                <TextField type='text' onChange={handleChange} value={formValues.phone} id="phone" name='phone' label="Phone" variant="standard" />
                <Button sx={{ top: '30%' }} variant="contained" onClick={handleSubmit}>Submit</Button>
                <SubmitAlert msg={alert.msg} severity={alert.severity} display={alert.display} />
            </Box>
        </>
    );
};

export default UserForm;
