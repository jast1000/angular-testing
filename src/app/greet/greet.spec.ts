import {greet} from './greet';
describe('greet',()=>{
    it('should include the name in the message or messages ',()=>{
        expect(greet('adsoft')).toContain('adsoft');
    })
})