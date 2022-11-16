import { gql } from '@apollo/client';

export const TODOS = gql`
    query ListTodos {
        listTodos {
            id
            todo
            completed
            time
        }
  }
`;