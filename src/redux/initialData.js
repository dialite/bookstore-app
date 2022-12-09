import { v4 as uuidv4 } from 'uuid';

export default {
  books: [
    {
      id: uuidv4(),
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ],
};
