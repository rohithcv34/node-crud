const path= require("node:path");
//   console.log(__filename);
//   console.log(__dirname);

//   //basename method//
//   console.log(path.basename(__filename));
//   console.log(path.basename(__dirname));

//   //extname method(to get extension)
//   console.log(path.extname(__filename));
//   console.log(path.extname(__dirname));

//   //parse method//(return an object whose properties represent significant elements of the path)
  
//   console.log(path.parse(__filename));
//   console.log(path.parse(__dirname));


//format method//
console.log(path.format(path.parse(__filename)));

// //isabsolute//(check if path is same or not)
//   console.log(path.isAbsolute(__dirname));

  //joinmethod(joins given path segments together using platform specific seperator as a delimiter and normalises the resulting path)

//  console.log(path.join("folder1","folder2","index.html"));

 //resolve method(results a sequence of path into an absolute  path)

//  console.log(path.resolve("folder1","folder2","index.html"));
//  console.log(path.resolve("/folder1","folder2","index.html"));
//  console.log(path.resolve("folder1","//folder2","index.html"));
 