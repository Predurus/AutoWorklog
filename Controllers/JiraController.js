/**
 * Execute a login using Jira API
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
function jiraLogin(req,res){
    res.status(200);
}

module.exports = {
    jiraLogin:jiraLogin
}