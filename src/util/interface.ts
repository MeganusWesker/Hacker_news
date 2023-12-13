
export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export interface ICardProps{

    objectId:string;
    author:string;
    points:number;
    storyId:number;
    title:string;
    index:number;
    numComments:number;
    createdAt:string;
    updatedAt:string;
}

export interface IData{

    objectID:string;
    author:string;
    points:number;
    story_id:number;
    title:string;
    index:number;
    num_comments:number;
    created_at:string;
    updated_at:string;
}

export interface IContextType{
    loading:boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
    pageNo:number;
    setPageNo:React.Dispatch<React.SetStateAction<number>>;
    total:number;
    setTotal:React.Dispatch<React.SetStateAction<number>>;
    keyword:string;
    setKeyword:React.Dispatch<React.SetStateAction<string>>;
    theme:Theme;
    setTheme:React.Dispatch<React.SetStateAction<Theme>>;
    data:IData[];
}