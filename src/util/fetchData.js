const fetchData = async (API) => {
    let response = await fetch(API);
    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    else{
        return await response.json();
    }
}

export default fetchData
