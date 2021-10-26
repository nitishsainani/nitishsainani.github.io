const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "This is a bright morning!";
  } else if (hour >= 12 && hour < 17) {
    return "A very great afternoon!";
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return "What a lovely Evening it is!!";
  }
}


const getIAmList = (db, callback) => {
  let iAmList = db.iAmList;
  
  for (let i = 0; i < 6; ++i) {
    iAmList = iAmList.concat(iAmList)
  }

  iAmList = [{text: getGreeting(new Date()), delay: 1000}].concat(iAmList);

  callback(iAmList);
}


export default getIAmList;
