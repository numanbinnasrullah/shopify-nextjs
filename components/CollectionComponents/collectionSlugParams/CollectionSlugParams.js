import { fetchCollection } from "@/graphql/collection";

const CollectionSlugParams = async({collectionTitle}) => {
    const fetchedCollectionQuery = await fetchCollection(collectionTitle)
    console.log("fetchedCollectionQuery", fetchedCollectionQuery)
    return <h1>{collectionTitle}</h1>
}

export default CollectionSlugParams;