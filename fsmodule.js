const fs=require('fs');

//fs.readFile('file.txt','utf8',(err, data)=>{
  //  console.log(err, data)
//})
//const a=fs.readFileSync('file.txt')
//console.log(a.toString())
//console.log("Finished file reading")

//fs.writeFile('file2.txt',"Hello, welcome to write file",()=>{
//console.log("written to the file")

//});

b= fs.writeFileSync('file2.txt', "The data is changed now")
console.log(b)
console.log("Finished file reading")


