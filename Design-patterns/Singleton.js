const Singleton = (function() {
    function DBManager (name) {
        this.name = name;
    }
    let dbManager;
    function createDBManager () {
        dbManager = new DBManager();
        return dbManager;
    }

    return {
        getDBManager () {
            if (!dbManager) 
                return createDBManager()
            return dbManager;
        }
    }
})();

const dbManagerObject1 = Singleton.getDBManager();
const dbManagerObject2 = Singleton.getDBManager();

console.log(dbManagerObject1 == dbManagerObject2)

