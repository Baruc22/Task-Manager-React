
export const getAllUsers = async () => {
    
    let response = await fetch('http://reqres.in/api/users');
    console.log('Response: ',response);
    console.log('Status: ',response.status);
    console.log('Ok? ',response.ok);
    //We return the json
    return response.json();
}


export const getAllPageUsers = async (page) => {
    
    let response = await fetch(`http://reqres.in/api/users?page=${page}`);
    console.log('Response: ',response);
    console.log('Status: ',response.status);
    console.log('Ok? ',response.ok);
    //We return the json
    return response.json();
}

export const getUserDetail = async (id) => {
    let response = await fetch(`http://reqres.in/api/users/${id}`);
    console.log('Response: ',response);
    console.log('Status: ',response.status);
    console.log('Ok? ',response.ok);
    //We return the json
    return response.json();
} 