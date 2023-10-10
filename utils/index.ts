export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5a7b518514msh283ed423ef3df24p1751a1jsn32e28c552a3e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const res = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const results = await res.json();

  return results;
}