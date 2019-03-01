export const selectByName = (foodList, name) => {
    const selectedFood = foodList.filter(food => food.name.includes(name));
}