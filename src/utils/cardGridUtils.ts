import { Card } from "../lib/types/Card";

type KeywordFilter = {
	reveal: boolean;
	discard: boolean;
	ongoing: boolean;
	destroy: boolean;
	move: boolean;
};
type PoolFilter = {};
type CardSort = {};

export const filterCardsByKeyword = (
	keywordFilterParams: KeywordFilter,
	cardList: Card[]
): Card[] => {
    let filteredCards: Card[] = cardList.filter((card) => {
        


    })

	return filteredCards;
};
export const filterCardsByPool = (params: KeywordFilter) => {};
export const sortCards = (params: CardSort) => {};
