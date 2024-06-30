// src/App.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    To-Do List
                </Typography>
                <TaskInput />
                <TaskList />
            </Box>
        </Container>
    );
};

export default App;
