/* import Axios  */
import axios from "axios"
const commonApi = async (httpmethod, url, body, header) => {

    const requestConfig = {
        method: httpmethod,
        url: url,
        data: body,
        headers: header ? header : { "Content-Type": "application/json" }

    }
    return await axios(requestConfig).then((result) => {
        console.log(result);
        return result
    }).catch((err) => {
        console.log(err);
        return err
    })


}

export default commonApi;