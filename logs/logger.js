var log4js = require('log4js')

log4js.configure({
    appenders:
    {
        console:{type:'console'},
        cheeseLogs:{ 
            type:'file',
            filename:'C:/Users/18019/Desktop/node.js/Yuan_Projet/Stage_bdd/stage/logs/cheese.log',
            category:'cheese'
        }
    },
    categories:{
        default: {appenders:['console', 'cheeseLogs'],level:'info'}
    }
});

var logger = log4js.getLogger('cheese');
module.exports = logger