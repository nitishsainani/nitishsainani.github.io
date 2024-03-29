import { Divider, Fab } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { Icon } from "../components";
import { Grid, Typography } from "@material-ui/core";
import Typist from "react-typist";
import {
  getIAmList,
  getMainPageLowerLinks,
  getMainPageTopSocialLinks,
} from "../content";
import { useState, useEffect } from "react";
import { getDatabase } from "../database";

function GridItemLinkFab({
  link,
  icon,
  color,
  name,
  newTab,
  displayName,
  disabled,
  gridItemProps,
}) {
  return (
    <Grid
      item
      style={{ margin: 10, display: "flex", justifyContent: "center" }}
      {...gridItemProps}
    >
      <a
        href={disabled ? null : link}
        style={{ textDecoration: "none" }}
        {...{
          target: newTab ? "_blank" : undefined,
          rel: newTab ? "noreferrer" : undefined,
        }}
      >
        <Fab dark size="large" disabled={disabled}>
          <Typography variant="h5">
            <Icon
              name={icon}
              style={{ color, marginLeft: displayName ? 10 : 0 }}
            />
            {displayName ? " " + name : ""}
          </Typography>
        </Fab>
      </a>
    </Grid>
  );
}

function HomePage(props) {
  const [iAmLists, setIAmLists] = useState([]);
  const [topSocialLinks, setTopSocialLinks] = useState([]);
  const [mainPageLowerLinks, setMainPageLowerLinks] = useState([]);

  useEffect(() => {
    getDatabase().then(db => {
      console.log(db);
      getIAmList(db, setIAmLists);
      getMainPageTopSocialLinks(db, setTopSocialLinks);
      getMainPageLowerLinks(db, setMainPageLowerLinks);
    })

    return () => {
      // destructor here
    };
  }, []);

  return (
    <>
      <Divider dark dense elevated />

      <Grid style={{ marginTop: 30 }}>
        <Typography
          variant="h3"
          style={{ height: 150, width: "100%", textAlign: "center" }}
        >
          {iAmLists.length > 0 ? (
            <Typist avgTypingDelay={200}>
              {""}
              <Typist.Delay ms={1000} />
              {iAmLists.map((object, index) => {
                return (
                  <span key={index}>
                    {object.text}
                    <Typist.Delay ms={object.delay} />
                    <Typist.Backspace count={object.text.length} delay={1} />
                  </span>
                );
              })}
            </Typist>
          ) : null}
        </Typography>
      </Grid>

      <Divider dark dense elevated />

      <Grid
        xs={12}
        container
        direction="row"
        justify="center"
        spacing={2}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        {topSocialLinks.map((obj, idx) => (
          <GridItemLinkFab key={idx} {...obj} />
        ))}
      </Grid>

      <Divider dark dense elevated />

      <Grid
        xs={12}
        container
        direction="row"
        justify="center"
        spacing={2}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        {mainPageLowerLinks.map((obj, idx) => (
          <GridItemLinkFab key={idx} gridItemProps={{ md: 3 }} {...obj} />
        ))}
      </Grid>

      <Divider dark dense elevated />
    </>
  );
}

export default HomePage;
