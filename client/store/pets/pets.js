import axios from 'axios';

const GET_PETS = 'GET_PETS';

//action object
const _loadPets = (pets) => {
  return {
    type: pets,
    pets
  };
};

//thunks
export const loadPets = (pets) => {
  return async (dispatch) => {
    const pets = (await axios.get('/api/pets')).data;
    dispatch(_loadPets(pets));
  };
};

//reducer
export default function petsReducer (state=[], action) {
  switch(action.type) {
    case GET_PETS:
      return action.pets;
    default:
      return state;
  };
};