import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// stabelece a função com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona que busca todos os posts no banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes"); // Acessa o banco de dados "imersão instabytes"
    const colecao = db.collection ("posts"); // Acessa a coleção "posts"

    return colecao.find().toArray(); // Retorna os posts com um array
}

console.log('Função getTodosPosts exportada com sucesso');

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabytes"); // Acessa o banco de dados "imersão instabytes"
    const colecao = db.collection("posts"); // Acessa a coleção "posts"

    return colecao.insertOne(novoPost) // Retorna os posts como um array
}

console.log('Função criarPost exportada com sucesso');

export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersao-instabytes"); // Acessa o banco de dados "Imersão-instabytes"
    const colecao = db.collection("posts"); // Acessa a coleção "posts"
    const objID = ObjectId.createFromHexString(id);

    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});
}

console.log('Função atualizarPost exportada com sucesso');