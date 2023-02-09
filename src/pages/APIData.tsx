import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css'

interface Data {
    id: string;
    title: string;
    description: string;
    price: string;
    discountPercentage: string;
}

const APIData = () => {

    const [data, setData] = useState<Data>({
        id: '',
        title: '',
        description: '',
        price: '',
        discountPercentage: '',
    })

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => setData(res.data.products))
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'description', headerName: 'Description', width: 1050 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'discountPercentage', headerName: 'Discount Percentage', width: 150 },
    ];

    return (
        <div className='data'>
            <Box sx={{ marginTop: '20px', height: 680, width: '90%' }}>
                <h1><u>Products Data</u></h1>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    );
}

export default APIData