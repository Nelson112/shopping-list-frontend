export const getData = (url) => {

    const options = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }

    return fetch(url, options)
    .then(res => res.json())
    .then(response => response)
    .catch(error =>  error);
}

export const postData = (url, data) => {
    
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }

    return fetch(url, options)
    .then(res => res.json())
    .then(response => response)
    .catch(error =>  error);

    
}

export const deleteData = (item, url) => {
    fetch(url + '/' + item.id, {
    method: 'DELETE'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }