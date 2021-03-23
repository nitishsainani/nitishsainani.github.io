import {Card, Divider} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import {Typography} from "@material-ui/core";


function AboutPage(props) {
  return (<>
    <Divider dark dense elevated/>
    <Typography align="center" variant="h3" style={{marginTop: 20, marginBottom: 20}}>About Nitish</Typography>
    <Divider dark dense elevated/>
    <Card dark style={{margin: 40}} elevation={4}>
      <Card dark inset style={{padding: 20}}>
        <Typography variant="h5" align="center">
          {"My vast curiosity makes it hard to say something specific about me. Some people call me a renaissance soul. My passion is to build cool things that can help serve a purpose."}
        </Typography>
      </Card>
    </Card>
    <Divider dark dense elevated/>
  </>);
}

export default AboutPage;
