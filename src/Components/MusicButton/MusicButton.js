import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles, Card, CardActions, CardContent, Button, Typography, Icon} from "@material-ui/core";
import { PlayArrowRounded, PauseCircleOutlineRounded, StopRounded } from "@material-ui/icons";

const styles = ( theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));



class MusicButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            play: false
        };
        this.audio = new Audio(props.src);
    };

    togglePlay = () => {
        let stop = () =>{
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : stop();
        });
    };

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {this.props.title}
                    </Typography>

                </CardContent>
                <CardActions className='media-controller'>
                    <Button size="small" onClick={ () => this.togglePlay()}> {this.state.play ? <StopRounded /> : <PlayArrowRounded />} </Button>
                </CardActions>
            </Card>
        )
    }
};
MusicButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MusicButton);