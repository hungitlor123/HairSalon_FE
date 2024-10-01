export interface IService {
    id: number;
    name: string;
    descriptionMarkdown: string;
    descriptionHTML: string;
    image: {
        type: string;
        data: number[];
    };
    priceId: string;
    createdAt: string;
    updatedAt: string;
}