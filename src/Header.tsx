import { Button, makeStyles, Theme } from "@material-ui/core"
import { useSubmit } from "./hooks"

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        // justifyContent: "flex-end",
        gap: theme.spacing(1)
    }
}))

export const Header = () => {
    const classes = useStyles()

    const { submit } = useSubmit()
    const handleSubmit = () => {
        submit()
    }

    return (
        <div className={classes.container}>
            <Button
                color="primary"
                variant="contained"
                onClick={() => handleSubmit()}
            >
                Submit
            </Button>
        </div>
    )
}