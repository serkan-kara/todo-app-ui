import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password:$password)
    }
`;

export const SIGNUP = gql`
    mutation SignupMutation($name: String!, $email: String!, $password: String!) {
        signUp(name: $name, email: $email, password: $password)
    }
`;

export const NEWTODO = gql`
    mutation CreateTodo($title: String!) {
        createTodo(title: $title)
    }
`;

export const DELETETODO = gql`
    mutation DeleteTodo($id: Int!) {
        deleteTodo(id: $id)
    }
`;

export const MARKTODOCOMPLETED = gql`
    mutation MarkTodoCompleted($id: Int!) {
        markTodoCompleted(id: $id)
    }
`;

export const MARKTODOUNCOMPLETED = gql`
    mutation MarkTodoUncompleted($id: Int!) {
        markTodoUncompleted(id: $id)
    }
`;