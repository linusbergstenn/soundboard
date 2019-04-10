import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles, Card, CardActions, CardContent, Button, Typography, Icon} from "@material-ui/core";
import { PlayArrowRounded, PauseCircleOutlineRounded, StopRounded } from "@material-ui/icons";

const styles = ( theme => ({
    card: {
        minWidth: 275,
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column'
    },
    bgGreen: {
      backgroundColor: 'green'
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

        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.stopPlay();
        });
    };

    stopPlay = () => {
        this.audio.pause();
        this.audio.currentTime = 0;
    };

    render() {
        const { classes } = this.props;
        let title = this.props.title.slice(0, -4);

        this.audio.onended = () =>{
            this.togglePlay();
        };
        return(
           <Button onClick={ () => this.togglePlay() }>
               <Card className={classes.card}>
                   <CardContent className={classes.cardContent}>
                       <Typography className={classes.title} color="textSecondary" gutterBottom>
                           {title}
                       </Typography>
                       <Typography color={"textSecondary"}>
                           {this.state.play ? 'Playing' : null}
                       </Typography>
                   </CardContent>
               </Card>
           </Button>
        )
    }
};
MusicButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


/*
*
*                 <CardActions className='media-controller'>
                    <Button size="small" onClick={ () => this.togglePlay()}> {this.state.play ? <PauseCircleOutlineRounded /> : <PlayArrowRounded />} </Button>
                    <Button size="small" onClick={ () => this.stopPlay()}> <StopRounded /></Button>
                </CardActions>
                */
export default withStyles(styles)(MusicButton);