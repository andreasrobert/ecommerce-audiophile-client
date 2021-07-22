import { gql, useQuery } from "@apollo/client"

export const LOAD_PRODUCT = gql`
    query Query {
        products {
            name
            category
        }
    }

`;

export const LOAD_FOR_CATEGORY = gql`
    query Query($Category: String) {
        productsbyCategory(category: $Category) {
            name
            new
            description
        }
    }

`;