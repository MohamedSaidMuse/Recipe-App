// we  will contain couple of funbrictins that we use over and over again 
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js'; 

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };




export const getJSON =async function(url) {
    try {
    const fetchPro = fetch(url);
    // the below cod creates a   race between the fetPro and timout fucntions ... it means that  whcih  evr comes first will be excuted ... this is like a time limit for the page....


    // the number 10 below is  perfect candidta efor the config
    const res = await Promise.race([fetchPro, timeout (10)]);
    //const res =  await fetch(url);
   // const data =await res.json();
    
    const data = await res.json();
    if(!res.ok) throw new Error (`${data.message} (${res.status})`);
return data;


}catch(err) {
 throw err;
        }
};