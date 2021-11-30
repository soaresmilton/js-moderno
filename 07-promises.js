const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ res: 'Success' });
  }, 2000);
});

apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  })

  console.log('Depois da promise...');


// async function run() {
//   try {
//     const resposta = await apiCall;
//     console.log(resposta);
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();