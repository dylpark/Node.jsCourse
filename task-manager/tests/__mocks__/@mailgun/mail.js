// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

module.exports = function(apiKey, domain) {
    const object2 = {
        send() {

        }
    }

    const object1 = {
        messages() {
            return object2
        }
    }

    return object1
}