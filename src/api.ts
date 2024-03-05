import { useState } from "react";


export const api = {

    

    CarregarUsuarios: async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
        let Json = await response.json();

        console.log(Json)
        return Json
        
    },

    AdicionarUsuarios: async (title: string, body:string, userID:number) => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
                {
                    method: 'POST',
                    body: JSON.stringify
                    ({
                        title: title,
                        body: body,
                        userID: userID
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }                                        
                }); 

            let json = await response.json();

            console.log(json)
            return json
        },
    
        AdicionarcomArquivo: async (formData: FormData) => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: "Post",
                body: formData
            }
            );
            let json = await response.json();

            console.log(json)
            return json
        }
    
}