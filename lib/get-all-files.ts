import fs from 'fs'; 

// Function to get all files in a folder
export function getAllFiles(folderPath:string) {
  try { 
    const items = fs.readdirSync(folderPath);
    // console.log({items})
    // const files = items
    // .map(item => path.normalize(path.join(folderPath, item)))
    // .filter(itemPath => fs.statSync(itemPath).isFile());

    console.log(items)    
    // const normalizedPath = path.normalize(files[0]);
    return "normalizedPath";
  } catch (err) {
    console.error('Error reading the folder:', err);
    return "";
  }
}

