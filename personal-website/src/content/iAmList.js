let getIAmList = () => {
  let iAmLists = [
    {text: 'Different', delay: 1000},
    {text: 'Nitish', delay: 1000},
    {text: 'Developer', delay: 1000},
    {text: 'Curious', delay: 1000},
    {text: 'Wanderer', delay: 1000},
  ]

  for (let i = 0; i < 6; ++i) {
    iAmLists = iAmLists.concat(iAmLists)
  }

  return iAmLists;
}


export default getIAmList;
