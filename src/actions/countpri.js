export const countPri = (pri, index, s)=>{
    if(s=="+"){pri++;
        (async () => {
            await fetch('/changecount/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pri: pri,
                index: index
            })
            });
            })() 
    return {
        type: "COUNT_PRI",
        payload: {pri, index}
    }}
    if(s=="-"){pri--;
        (async () => {
            await fetch('/changecount/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pri: pri,
                index: index
            })
            });
            })() 
    return {
        type: "COUNT_PRI",
        payload: {pri, index}
    }}
};