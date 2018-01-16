interface User {
    id: number;
    phone: string;
    email: string;
    email_verified: number;
    name: string;
    photo: string;
    photo_large: string;
    twofactor: number;
    admin: number;
}

interface System {
    id: number;
    name: string;
    domain: string;
    owner: number;
    packet: number;
    create_date: number;
    paidtill: number;
    server: number;
    ready: number;
    promo: number;
    b2b: boolean;
    managers: boolean;
}

interface State {
    desktop: { count: number };
    hot: { count: number };
    messages: { count: number };
    leads: { count: number };
    products: { count: number };
    planner: { count: number };
}

interface Rights {
    leads: number;
    sales: number;
    funtr: number;
    dashboard: number;
    products: number;
    tasks: number;
    stats: number;
    sources: number;
    systems: number;
    managers: number;
    access: number;
}

interface Content {
    authorized: boolean;
    allowed: boolean;
    ready: boolean;
    rights?: Rights;
    state?: State;
    system?: System;
    user: User;
}

export interface SystemState {
    state: string;
    content: Content;
}

/*
export class State {
}
*/
