import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDatabase } from "../database";

const DynamicRoute = () => {
  const [redirect, setRedirect] = useState(null);
  const location = useLocation();

  useEffect(() => {
      console.log("redirect: ", redirect);
      if(redirect) {
        window.location.href = redirect;
      }
  }, [redirect]);

  useEffect(() => {
      getDatabase().then(db => {
        console.log(location.pathname, db.externalRedirects.findIndex(row => row.path === location.pathname));
        const externalRedirectsIndex = db.externalRedirects.findIndex(row => row.path === location.pathname);
        if(externalRedirectsIndex !== undefined) {
            setTimeout(() => {
                setRedirect(db.externalRedirects[externalRedirectsIndex].link)
            }, 2000)
        } else {
            setRedirect("/#/404")
        }
      })
  }, [])
  
  return <>
    <p>Redirecting...</p>
    <iframe src="https://giphy.com/embed/TLhCZQBWZS6orBNOyc" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </>;
};

export default DynamicRoute;
