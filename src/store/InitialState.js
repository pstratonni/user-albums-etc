const InitialState = {
  persons: {
    list: [],
    activePerson: null,
    isEdit: false,
    personDelete: false,
    personById: {},
  },
  posts:{
    list:[],
    addPost:false
  },
  albums:{
    list:[],
    addAlbum:false,
    albumById:{}
  }
};
export default InitialState