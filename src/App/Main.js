import { createApolloClient } from "../graphql/client";
import React, { useState } from 'react'
import { ApolloProvider, gql, useQuery, ApolloClient } from "@apollo/client";
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

export const Main = () => {
    const [client, setClient ] = useState(createApolloClient());
    const notifaction = async () => {
        const clientNot = createApolloClient();
        await clientNot.subscribe({
            query: gql`
                subscription subs{
                    Document(where: {  Fecha_Expiracion: {_lte: "now()"}, UserID: {_eq:1}} ){
                        Fecha_Expiracion 
                        ID
                        Nombre
                        Numer_Document
                        UserID
                    }
                }
            `
        })
        setClient(clientNot)
    }
    return (
        <ApolloProvider client = {client}>
            
        </ApolloProvider>
    )
}

