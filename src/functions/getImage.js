async function getImage(label){
    const url = label.toLowerCase();
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=13ISJCKcgB6MlZCsXMc4eWjGAq8J667h&tag=${url}`);
    const info = await response.json();
    if(info.meta.status !== 200){
        throw new Error(`Произошла http-ошибка ${info.meta.status}`)
    }
    if(info.data.length === 0){
        throw new Error('По тегу ничего не найдено');
    } else {
        return ({
            id: info.data.import_datetime,
            url: info.data.embed_url
        });
    }
}

export default getImage;
