import {Card} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Grid, Typography} from "@material-ui/core";
import notFoundImage1 from '../images/404/1.gif'
import notFoundImage2 from '../images/404/2.gif'
import notFoundImage3 from '../images/404/3.gif'
import notFoundImage4 from '../images/404/4.gif'
import notFoundImage5 from '../images/404/5.gif'

const getRandomImage = () => {
  const imageList = [
    notFoundImage1,
    notFoundImage2,
    notFoundImage3,
    notFoundImage4,
    notFoundImage5,
  ]

  return imageList[Math.floor(Math.random() * imageList.length)];
}


function NotFound(props) {
  return (<>
    <Typography variant="h6" align="center">404 Not Found</Typography>
    <Grid container justify="center">
      <Card dark style={{margin: 40}} elevation={4}>
        <Card dark inset style={{padding: 10}}>
          <img alt="a 404 random gif" src={getRandomImage()} height="100%" width="100%"
               style={{"mix-blend-mode": "exclusion", borderRadius: 5}}/>
        </Card>
      </Card>
    </Grid>
  </>);
}

export default NotFound;
