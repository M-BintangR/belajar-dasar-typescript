export interface Seller {
    id: number | string;
    name: string;
    address?: string;
    readonly nib: string;
    readonly npwp: string;
}
