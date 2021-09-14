import {Card, Divider, Fab} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Grid, Typography} from "@material-ui/core";
import {Icon} from "../components";


function ResumeCard({name, onClick, buttonIcon, disabled}) {
  return (
    <Card dark style={{padding: 20, marginLeft: '3vw', marginRight: '3vw', marginTop: 40, marginBottom: 40}}
          elevation={3}>
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
    <Divider dark dense elevated/>
    <ResumeCard name={"PDF Document Resume"} buttonIcon="fas fa-arrow-circle-down"
                onClick={() => window.open("https://drive.google.com/uc?export=download&id=1DrIwu-yl-4KTLUpt9f8ZLf_-hdLz7biQ", "_self")}/>
    <Divider dark dense elevated/>
    <ResumeCard name={"Audio Resume"} buttonIcon="fas fa-arrow-circle-down" onClick={() => {
    }} disabled/>
    <Divider dark dense elevated/>
    <ResumeCard name={"Video Resume"} buttonIcon="fas fa-arrow-circle-down" onClick={() => {
    }} disabled/>
    <Divider dark dense elevated/>
  </>);
}

export default ResumePage;
