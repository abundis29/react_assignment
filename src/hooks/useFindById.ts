export const useFindById = (options:[], id: number) => {
    return options.find((element: any) => element.id == id);
}