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
            _id
            slug
            name
            new
            description
            image {
                desktop
                mobile
                tabletCat
            }
        }
    }

`;

export const LOAD_PRODUCT_DETAIL = gql`
    query Query($Slug: String) {
        productsbyId(slug: $Slug) {
            includes {
                item
                quantity
            }
            slug
            name
            image {
                mobile
                tablet
                desktop
            }
            new
            price
            description
            features
            gallery {
                first {
                    mobile
                    tablet
                    desktop
                }
                second {
                    mobile
                    tablet
                    desktop
                }
                third {
                    mobile
                    tablet
                    desktop
                }
            }
        }
    }

`;