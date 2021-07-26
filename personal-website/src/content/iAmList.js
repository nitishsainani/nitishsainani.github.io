let getIAmList = () => {
  let iAmLists = [
    {text: 'Howdy!! I am Nitish', delay: 1000},
    {text: 'I build things', delay: 1500},
    {text: 'Interested in reading? Try this Newsletter Below', delay: 10000},
  ]

  for (let i = 0; i < 6; ++i) {
    iAmLists = iAmLists.concat(iAmLists)
  }

  return iAmLists;
}


export default getIAmList;
