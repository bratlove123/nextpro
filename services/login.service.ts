import { axios } from '../common/base.api';

export const loginRequest = async () => {
  try {
    const todos = await axios.get('todos?_limit=5');

    return todos.data;
  } catch (err) {
    return console.error(err);
  }
};
