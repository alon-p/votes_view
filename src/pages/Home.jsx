import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import toast from 'react-simple-toasts';
import {Link} from "react-router-dom";

const theme = createTheme({
    direction: 'rtl',
});


export default function Home(props) {
    const [votes_right, setVotes_right] = useState(0)
    const [votes_middle, setVotes_middle] = useState(0)

    const addVotes = (which_side) => {
        if (which_side === "middle") {
            console.log("middle:", votes_middle)
            if (votes_middle) {
                setVotes_middle((current) => {
                    return current + 1
                })
            } else {
                setVotes_middle(1)
            }
            localStorage.setItem('votes_middle', votes_middle)
        } else if (which_side === "right") {
            if (votes_right) {
                setVotes_right((current) => {
                    return current + 1
                })
            } else {
                setVotes_right(1)
            }
            localStorage.setItem('votes_right', votes_right)
            console.log("right:", votes_right)
        }
        toast('הצבעתך נרשמה, תודה')
    }

    React.useEffect(() => {
        const string_right_start = localStorage.getItem('votes_right')
        setVotes_right(() => {
            const right_start = parseInt(string_right_start, 10)
            if (right_start) {
                return right_start
            } else {
                return 0
            }
        })

        const string_middle_start = localStorage.getItem('votes_middle')
        setVotes_middle(() => {
            const middle_start = parseInt(string_middle_start, 10)
            if (middle_start) {
                return middle_start
            } else {
                return 0
            }
        })
    }, [])

    return (<ThemeProvider theme={theme}>
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{mr: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    כותרת
                </Typography>
            </Toolbar>
        </AppBar>

        <main>
            {/* Hero unit */}
            <Box sx={{
                bgcolor: 'background.paper', pt: 8, pb: 6,
            }}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom>
                        בחירות ...
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        עליכם לבצע בחירה ..
                    </Typography>

                    <Stack
                        sx={{pt: 4}}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button onClick={() => {
                            addVotes("right")
                        }} variant="outlined"
                                sx={{ml: 2, p: "5em", height: "100%"}}> סיעה 1 </Button>
                        <Button onClick={() => {
                            addVotes("middle")
                        }} variant="outlined" sx={{m: "4em", p: "5em"}}>סיעה
                            2</Button>
                        <Button variant="outlined" sx={{m: "4em", p: "5em"}} disabled>סיעה 3</Button>
                    </Stack>

                </Container>
            </Box>
        </main>

        {/* Footer */}
        <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                משהו לכתוב למטה
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                עוד דברים לכתוב
            </Typography>
            <Link to="/results">לתוצאות</Link>
        </Box>
        {/* End footer */}
    </ThemeProvider>);
}


