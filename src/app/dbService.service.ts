import { Injectable } from '@angular/core';

@Injectable()
export class DBServiceService {


constructor() { }


getAll() 
{
    return ['java', 'c', 'Node'];
}
}
