export interface IFormItem {
    name: string;
    component: any;
}

export interface ISection {
    header: string;
    items: IFormItem | any[];
}

export interface IPageOptions {
    sections: ISection[]
}

export interface IFormPage {
    pageName: string;
    page: any;
    pageOptions: IPageOptions[];
}