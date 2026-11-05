const data = {
    name: "Sachin",
    user: {
    address: {
      city: "Pune",
      state: "MH"
    }
  },
    age: 30
};

const flattenObject = (obj, prefix = "", result = {}) => {
    for (let key in obj) {
        let newKey = prefix ? prefix + "." + key : key;

        if (typeof obj[key] == "object") {
            flattenObject(obj[key], newKey, result)
        } else {
            result[newKey] = obj[key]
        }
    }
    return result;
}

console.log(flattenObject(data))