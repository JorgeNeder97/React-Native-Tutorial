// track the searches made by a user

export const updateSearchCount = async (query: string, movie: Movie) => {

    // check if a record of that search has already been stored
    // if a document is found increment the searchCount field
    // if no document is found
        // create a new document in Appwrite database -> counted up to 1
}