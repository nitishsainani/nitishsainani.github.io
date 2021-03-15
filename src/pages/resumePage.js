import {Divider, Card, Fab} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Grid, Typography} from "@material-ui/core";
import {Icon} from "../components";


function ResumeCard({name, onClick, buttonIcon, disabled}) {
  return (
    <Card dark style={{padding: 20, marginLeft: '3vw', marginRight: '3vw', marginTop: 40, marginBottom: 40}} elevation={3}>
      <Grid container justify="space-between">
        <Typography align="left" variant="h5" style={{marginTop: 20, marginBottom: 20}}>{name}</Typography>
        <Card dark style={{height: 80, width: 80, borderRadius: '50%', padding: 11.7}}>
          <Fab dark size="large" disabled={disabled} onClick={onClick}>
            <Typography variant="h5">
              <Icon name={buttonIcon}/>
            </Typography>
          </Fab>
        </Card>
      </Grid>
    </Card>
  )
}


function ResumePage(props) {
  return (<>
    <Typography align="center" variant="h4" style={{marginTop: 20, marginBottom: 20}}>Nitish's Resumes</Typography>
    <Divider dark dense elevated />
    <ResumeCard name={"PDF Document Resume"} buttonIcon="fas fa-arrow-circle-down" onClick={() => window.open("https://docs.google.com/document/u/0/export?format=pdf&id=1uxSu7TjFBTtRt0XIc12fp8cO5T01JKfN9CZrkVc8EP4&token=AC4w5VjDra0ExvyX1Pgume-GvnRldZA0rQ%3A1590599317863&includes_info_params=true&inspectorResult=%7B%22pc%22%3A2%2C%22lplc%22%3A82%7D", "_self")} />
    <Divider dark dense elevated />
    <ResumeCard name={"Audio Resume"} buttonIcon="fas fa-arrow-circle-down" onClick={() => {}} disabled/>
    <Divider dark dense elevated />
    <ResumeCard name={"Video Resume"} buttonIcon="fas fa-arrow-circle-down" onClick={() => {}} disabled/>
    <Divider dark dense elevated />
  </>);
}

export default ResumePage;
