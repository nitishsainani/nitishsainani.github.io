import {Divider, Card} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Typography} from "@material-ui/core";
import {getRecommendations} from "../content";
import ShowMoreText from 'react-show-more-text';
import ReactHtmlParser from 'react-html-parser';



function AboutPage(props) {
  return (<>
    <Typography align="center" variant="h4" style={{marginTop: 20, marginBottom: 20}}>About Nitish</Typography>
    <Divider dark dense elevated />
    <Divider dark dense elevated />
    <Card dark style={{margin: 40}} elevation={4}>
      <Card dark inset>
        <Typography>
          {"My vast curiosity makes it hard to say something specific about me. Some people call me a renaissance soul. My passion is to build cool things that can help serve a purpose."}
        </Typography>
      </Card>
    </Card>
    <Divider dark dense elevated />
  </>);
}

export default AboutPage;
