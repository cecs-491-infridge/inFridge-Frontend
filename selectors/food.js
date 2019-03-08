export const selectByName = (foodList, name) => {
    const selectedFood = foodList.filter(food => food.name.includes(name));
}

export const sort = (arr, sortBy) => {
    let copy = arr.slice();

    let sortMethod;
    switch(sortBy){
        case 'name':
            sortMethod = (a, b) => a.name <= b.name ? -1 : 1;
          break;

        case 'oldest':
            sortMethod = (a, b) => a.purchaseDate <= b.purchaseDate ? -1 : 1;
          break;

        case 'newest':
            sortMethod = (a, b) => a.purchaseDate <= b.purchaseDate ? 1 : -1;
            break;

        case 'expirationDate':
            sortMethod = (a, b) => a.expirationDate <= b.expirationDate ? -1 : 1;
          break;
        
        default:
            sortMethod = (a, b) => a.name <= b.name ? -1 : 1;
            break;
    }
  
    copy.sort(sortMethod);
    return copy;
}

export const filter = (arr, searchText) => {
    const filteredArr = arr.filter(a => a.includes(searchText));
    return filteredArr;
}