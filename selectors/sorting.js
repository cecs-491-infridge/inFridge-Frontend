export const sortArray = (arr, sortMethod) => {
    let copy = arr.slice();

    copy.sort(sortMethod);
    return copy;
}