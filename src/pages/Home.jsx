import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import toast from 'react-simple-toasts';
import {Link} from "react-router-dom";
import user from "../images/user.jpeg";
import white_vote from "../images/white_vote.png";
import logo from "../images/site-logo.png";
import {Grid} from "@mui/material";
import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: [
            'san-serif',
            'Varela Round'
        ]
    },
});


export default function Home() {
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
            localStorage.setItem('votes_middle', `${votes_middle}`)
        } else if (which_side === "right") {
            if (votes_right) {
                setVotes_right((current) => {
                    return current + 1
                })
            } else {
                setVotes_right(1)
            }
            localStorage.setItem('votes_right', `${votes_right}`)
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

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                sx={{
                    width: "90%",
                    margin: "1em auto"
                }}>
                <Box sx={{
                    maxWidth: "150px"
                }}>
                    <img src={logo}
                         alt=""
                         width="100%"
                    />
                </Box>
            </Grid>

            <Grid
                container
                spacing={2}
                sx={{
                    backgroundColor: 'primary.light',
                    width: "90%",
                    margin: "1em auto",
                    padding: "1em 1em 5em 1em",
                    borderRadius: ".5em",
                }}>
                <Grid item xs={12}>
                    <Typography
                        component="h1"
                        variant="h5"
                        align="right"
                        color="text.primary"
                        gutterBottom>
                        בחירות למוסדות הנבחרים של ההסתדרות ונעמ"ת
                        <br/>
                        לתפקיד יושב ראש ההסתדרות
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        נא הקש בחירתך
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    item
                    xs={12}>
                    <Grid item xs={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                addVotes("right")
                            }}
                            children={
                                <Grid container justifyContent="center">
                                    <img src={user} alt='' width="100%"/>
                                    <Typography variant="h5">
                                        מועמד 1
                                    </Typography>
                                </Grid>
                            }/>
                    </Grid>

                    <Grid item xs={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                addVotes("middle")
                            }}
                            children={
                                <Grid container justifyContent="center">
                                    <img src={user} alt='' width="100%"/>
                                    <Typography variant="h5">
                                        מועמד 2
                                    </Typography>
                                </Grid>
                            }/>
                    </Grid>

                    <Grid item xs={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            disabled
                            children={
                                <Grid container justifyContent="center">
                                    <img src={white_vote} alt='' width="100%"/>
                                    <Typography variant="h5">
                                        פתק לבן
                                    </Typography>
                                </Grid>
                            }/>
                    </Grid>
                </Grid>
            </Grid>

            {/* Footer */}
            <Grid
                container
                justifyContent="flex-end"
            >
                <Grid item xs={2}>
                    <Link to="/results">
                        <KeyboardCapslockIcon/>
                    </Link>
                </Grid>
            </Grid>
        </ThemeProvider>);
}


