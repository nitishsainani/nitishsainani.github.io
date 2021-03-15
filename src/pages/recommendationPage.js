import {Divider, Card} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Typography} from "@material-ui/core";
import {getRecommendations} from "../content";
import ShowMoreText from 'react-show-more-text';
import ReactHtmlParser from 'react-html-parser';


const recommendations = getRecommendations();

function Recommendation({from, designation, company, text, expanded}) {
  return (<div style={{marginLeft: '3vw', marginRight: '3vw', marginTop: 40, marginBottom: 40}}>
    <Card dark style={{padding: 20}} elevation={5}>
      <div>
        <Typography variant="h6" align="center">
          <ShowMoreText expanded={expanded ? expanded : null}>
            {ReactHtmlParser(text)}
          </ShowMoreText>
        </Typography>
      </div>
      <Card inset style={{ marginTop: 10, padding: 5}}>
        <Typography variant="h6" align="left">
          <b>
            {"- "}{from}<br/>
            {designation}{", "}{company}
          </b>
        </Typography>
      </Card>
    </Card>
  </div>)
}

function RecommendationPage(props) {
  return (<>
    <Typography align="center" variant="h4" style={{marginTop: 20, marginBottom: 20}}>Recommendations</Typography>
    <Divider dark dense elevated />
    <Divider dark dense elevated />
    {recommendations.map((recommendation, idx) => {
      return <Recommendation key={idx} {...recommendation} />
    })}

    <Divider dark dense elevated />
  </>);
}

export default RecommendationPage;
