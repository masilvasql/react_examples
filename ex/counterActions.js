export function inc(){
    return {type:'INC'}
}

export function dec(){
    return {type: 'DEC'}
}

export function setpChanged (e){
    return {
        type:'STEP_CHANGED',
        payload:e.target.value
    }
}