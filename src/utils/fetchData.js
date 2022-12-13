export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '0caa999be3msh30262c42f163451p11bc61jsnf338898c8ca3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) => {

    const response = await fetch(url, options);
    const data = await reponse.json();

    return data;
}