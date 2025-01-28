import express from "express";
import routes from "./src/routes/postsRoutes.js";


// Criação da aplicação Express
const app = express();
app.use(express.static("uploads"))
routes(app);

// Dados de exemplos para os posts
const posts = [
    {
        id: 1,
        descrição: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descrição: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descrição: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descrição: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descrição: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descrição: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
];

// inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 





// //Código comentado para buscar um post por ID (não utilizado no momento)
// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id) // Procura o post com o ID fornecido
//     })
// }

// // Rota para obter um post específico por ID (não está sendo usada, pois está comentada)
// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id) // Busca o post pelo ID
//     res.status(200).json(posts[index]); // Retorna o post encontradocom status 200
// });