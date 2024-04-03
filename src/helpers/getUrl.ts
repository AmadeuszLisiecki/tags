export const generateUrl = (sortType: string) => 
`https://api.stackexchange.com/2.3/tags?order=${sortType}&sort=popular&site=stackoverflow`;