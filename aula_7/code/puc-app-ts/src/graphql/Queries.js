import { gql } from "@apollo/client";

export const LOAD_ALUNOS = gql`
    query {
        getAllAlunos {
            id,
            nome,
            idade,
            telefone,
            email
        }
    }
`;