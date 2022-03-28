import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function Results(props) {
    const [votes_right, setVotes_right] = useState(0)
    const [votes_middle, setVotes_middle] = useState(0)

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

    const resetLocalStorage = () => {
        localStorage.setItem('votes_right', 0)
        setVotes_right(0)
        localStorage.setItem('votes_middle', 0)
        setVotes_middle(0)
        console.log('reset')

    }

    return (
        <main>
            <Typography>תוצאות</Typography>
            <Typography>הצבעות על האמצע: {votes_middle}</Typography>
            <Typography>הצבעות על צד ימין: {votes_right}</Typography>

            <Button variant="outlined" color="error" onClick={() => {
                resetLocalStorage()
            }}>איפוס - זהירות</Button>
            <br/>
            <br/>
            <br/>
            <Button variant="outlined">
                <Link to="/">להצבעה</Link>
            </Button>
        </main>
    );
}

export default Results;
