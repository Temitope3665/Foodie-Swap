export interface IContextType {
    handleGetUserSearch: (arg0: any) => void;
    userSearch: string;
    handleCurrentSort: (arg0: string) => void;
    currentSort: string;
    handleUserFilter: (arg0: string) => void;
}