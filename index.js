module.exports = class ExtendedMap extends Map {
    constructor(){
        super();
    }

    /**
     * 
     * @param {Function} filter 
     */
    filter(filter){
        if(!filter) new Error("A filter is required");
        let newMap = new ExtendedMap();
        for(const keys of this){
            if(filter({value: keys[1], key: keys[0]})) newMap.set(keys[0], keys[1]);
        }
        return newMap;
    }

}