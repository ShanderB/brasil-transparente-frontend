export interface CommomInterface {
    id: number;
    name: string;
    totalValueSpent: number;
    percentageOfTotal: number;
    level: number;
}

export interface CommomWithChildren extends CommomInterface {
    expanded: boolean;
    children: CommomWithChildren[] | null;
}