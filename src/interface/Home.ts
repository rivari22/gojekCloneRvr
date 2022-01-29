interface IProductList {
  id: number;
  image: string;
  title: string;
  category?: string;
  rate?: string;
}

export interface IProductContent {
  detail: {
    title: 'gojek' | 'gomart';
    subtitle: string;
    desc?: string;
    button?: {
      label: string;
      onClick: () => undefined;
    };
  };
  productContentList: Array<IProductList>;
}

export type ProductListType = {
  gomart: IProductContent;
  gojek1: IProductContent;
  gojek2: IProductContent;
};

export interface IPromotionHome {
  id: number;
  image: string;
}
