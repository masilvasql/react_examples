export function changeValue(e){
    console.log('deu certo') 
    return {
        type:'VALUE_CHANGED', // obrigatório
        payload: e.target.value //payload é nome genérico, pode ser qualquer um
    }   
}