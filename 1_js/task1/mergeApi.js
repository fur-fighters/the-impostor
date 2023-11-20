// dummy imitation of some 3rd party library
const Lib = {
    async getUsers() {
        return [
            { id: '1', name: 'Alex', roleId: '111' },
            { id: '2', name: 'Bob', roleId: '222' },
            { id: '3', name: 'Clive', roleId: '111' },
            { id: '4', name: 'Denis', roleId: '333' },
            { id: '5', name: 'Ernest', roleId: '222' },
            // ...
        ]
    },
    async getRoles() {
        return [
            { id: '111', privileges: ['read', 'write', 'delete'] },
            { id: '222', privileges: ['read'] },
            { id: '333', privileges: ['read', 'write'] },
            // ...
        ]
    }
}

// write your code here



/**
 * There are two methods available in an imaginary 3rd party library called `Lib`:
 *  - getUsers()
 *  - getRoles()
 * Both of them are asynchronous and retrun a Promise.
 * 
 * Your task is to:
 *  - get the data from both methods
 *  - combine the data, based on the relation in presented objects
 *  - display the merged data in the console
 * 
 * The final result should look like this:
 * 
 * [
 *      { id: '1', name: 'Alex', privileges: ['read', 'write', 'delete'] },
 *      { id: '2', name: 'Bob', privileges: ['read', 'write'] },
 *      { id: '3', name: 'Clive', privileges: ['read', 'write', 'delete'] },
 *      { id: '4', name: 'Denis', privileges: ['read'] },
 *      { id: '5', name: 'Ernest', privileges: ['read', 'write'] }
 *      // ...
 * ]
 * 
 * Note: there's no `roleId` property in the output!
 */