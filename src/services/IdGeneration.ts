import {v4} from 'uuid'

export class IdGeneration {
    
    public generate(): string {
        return v4()
    }
}