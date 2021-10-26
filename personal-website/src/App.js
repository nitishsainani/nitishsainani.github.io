import {AboutPage, HomePage, NotFound, RecommendationPage, ResumePage, TechStackPage, DynamicRoute} from "./pages";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {ThemeComponent} from "./components";
import {Card} from "ui-neumorphism";
import {useEffect, useState} from "react";


const theme = createMuiTheme({
  typography: {
    fontFamily: "'Titillium Web', sans-serif"
  },
});


function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    setDarkTheme(true);

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <ThemeComponent/>
      <Card dark={darkTheme} style={{
        width: '95vw',
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
      }}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/recommendations" exact component={RecommendationPage}/>
            <Route path="/resume" exact component={ResumePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/tech-stack" exact component={TechStackPage}/>
            <Route path={"/404"} component={NotFound}/>
            {/* <Route path={"/social/linkedin"} exact component={() => { 
                window.location.href = "https://www.linkedin.com/in/nitishsainani"; 
                return <p>Redirecting</p>;
              }}/> */}
            {/* {redirects.length > 0 ? redirects.map((redirect, idx) => {
              <Route key={idx} path={redirect.path} exact component={() => { 
                window.location.href = redirect.link; 
                return <p>Redirecting</p>;
              }}/>
            }) : null} */}
            <Route component={DynamicRoute}/>
          </Switch>
        </HashRouter>
      </Card>
    </ThemeProvider>
  )
}

export default App;
