
class customNotFoundError extends Error {
    constructor(message){
    super(message);
    this.statusCode = 400;
    this.name = 'Not seen Error'

}
};

module.exports = customNotFoundError;