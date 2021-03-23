import {Card, Divider, ProgressLinear} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Grid, Typography} from "@material-ui/core";
import {getTechStackList, Rating} from "../content";

let techStackList = getTechStackList();

const getTechValueFromRating = (rating) => {
  switch (rating) {
    case Rating.BEGINNER:
      return 40;
    case Rating.INTERMEDIATE:
      return 55;
    case Rating.EXPERIENCED:
      return 75;
    case Rating.PROFICIENT:
      return 95;
  }
}

function GridItemLinkFab({link, image, name, rating}) {

  return (
    <Grid container direction="row" justify="space-between" style={{padding: 40}} spacing={1}>
      <Grid item md={3}>
        <Card elevation={5} dark style={{padding: 2}}>
          <Card dark inset style={{padding: 20}}>
            <Grid container justify="center">
              <img src={image} height={100}/>
            </Grid>
          </Card>
        </Card>
      </Grid>
      <Grid item container direction="column" justify="center" md={8}>
        <Typography variant="h5">{name}</Typography>
        <Card elevation={3} dark style={{marginTop: 20, marginBottom: 20}}>
          <ProgressLinear striped value={getTechValueFromRating(rating)}/>
        </Card>
        <Typography align="right">{rating}</Typography>
      </Grid>
    </Grid>
  )
}


function TechStackPage(props) {
  return (
    <>
      <Divider dark dense elevated/>
      <Typography variant="h3" align="center" style={{marginTop: 20, marginBottom: 20}}>Tech Stack</Typography>

      <Divider dark dense elevated/>

      {techStackList.map((obj, idx) => <GridItemLinkFab key={idx} {...obj}/>)}

      <Divider dark dense elevated/>
    </>
  );
}

export default TechStackPage;
