import axios from 'axios'

export interface ISearchResponse {
    id: string;
    key: string;
    name: string;
    email: string;
    phone: string;
    amount: number;
    photo_url: string;
    status: number;
}

export interface ISearchResponseDefault {
    id: string;
    key: string;
    name: string;
    email: string;
    phone: string;
    amount: string;
    photo_url: string;
    status: string;
}

export interface IUserResponse {
    total: number;
    limit: number;
    offset: number;
    row: number;
    search: ISearchResponse[];
}

export const api = axios.create({
    baseURL: 'https://desafio.eadplataforma.com/api/1/'
    
})

export const getUsers = async (): Promise<IUserResponse> =>{
    try{
        const { data } = await api.get('users',{
            params:{
                token:'123456789',
            }
        })

        return {...data, search: data.users.map((item:ISearchResponseDefault)=>{
            return {
                ...item,
                key: item.id,
                status: parseInt(item.status),
                amount: parseFloat(item.amount),
            }
        })}
  
    }catch (err){   
        console.error(err)
        return {
            total: 0,
            limit: 0,
            offset: 0,
            row: 0,
            search: [{
                id: '',
                key: '',
                name: '',
                email: '',
                phone: '',
                amount: 0,
                photo_url: '',
                status: 0,
            },]
        }
    }
}

export const getUsersQuery = async (q:string): Promise<IUserResponse> =>{
    try{
        const { data } = await api.get('search',{
            params:{
                token:'123456789',
                q,
            }
        })
        
        return {...data, search:data.search.map((item:ISearchResponseDefault)=>{
            return {
                ...item,
                key: item.id,
                status: parseInt(item.status),
                amount: parseFloat(item.amount),
            }
        })}
  
    }catch (err){   
        console.error(err)
        return {
            total: 0,
            limit: 0,
            offset: 0,
            row: 0,
            search: [{
                id: '',
                key: '',
                name: '',
                email: '',
                phone: '',
                amount: 0,
                photo_url: '',
                status: 0,
            },]
        }
    }
}

