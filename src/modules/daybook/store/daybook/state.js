export default () => ({
  isLoading: true,
  entries: [
    {
      id:  new Date().getTime(),
      date: new Date().toDateString(),
      text:'is simply dummy text of the printing and typesetting industry.',
      picture: null
    },
    {
      id:  new Date().getTime()*1000,
      date: new Date().toDateString(),
      text:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
      picture: null
    },
    {
      id:  new Date().getTime()*2000,
      date: new Date().toDateString(),
      text:'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      picture: null
    },
  ]
})