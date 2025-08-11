import { Member } from "./member";

export interface PortfolioProject {
    id: string;
    images?: string[]; 
    title: string; 
    description: string; 
    collaborators?: Member[]; 
    status: 'not-started' | 'in-progress' | 'completed';
    stacks?: string[];  
    repository?: string; 
    homepage?: string;
    links?: [{
        name: string,
        url: string,
    }];
    visibility?: string
}   