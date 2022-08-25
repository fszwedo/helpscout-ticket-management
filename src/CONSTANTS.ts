export type TicketLevels = 'L1' | 'L2' | 'other' | 'any';
export const L1: string[] = ['access', 'ftp', 'sds', 'pds', 'password', 'login', 'log in', 'scalyr', 'logging', 'vpn', 'boarding', 'invoice', 'assign', 'unsubscribe'];
export const L2: string[] = ['success', 'sql', 'css', 'js', 'configurator', 'tracking', 'bundle'];


export enum TICKET_CUSTOM_FIELDS {
    LEVEL = 360016765154,
    CATEGORY = 360013680280,
    PLATFORM = 360016765134,
    TYPE = 360012337374,    
    SOURCE = 360007108679
}