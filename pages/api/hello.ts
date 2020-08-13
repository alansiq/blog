// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let array = []; 

export default (request, response) => {
  if (request.method === 'POST') {
    const pastArray = array.length;
    array.push("1")
    return response.send(`Era ${pastArray} mas agora é ${array.length}`);
  }
  response.statusCode = 200; 
  response.send(array.length);
}
