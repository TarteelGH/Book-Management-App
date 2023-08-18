import express from 'express';
namespace Books {
    export interface Item {
        readonly id: number,
        title: string,
        author: string,
        publicationYear: number
    }

    export interface Request extends express.Request {
        body: {
            title: string,
            author: string,
            publicationYear: number
        }
        query: {
            page: string,
            pageSize: string,
            title: string,
            publicationYear: string
        }
        params: {
            id: string
        }
    }

    export interface Response extends express.Response {

    }
}

export default Books