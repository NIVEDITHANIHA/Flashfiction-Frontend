import baseurl from "./baseurl"
import commonApi from "./commonApi"

/* flash Fiction register  Api */
export const flashFictionRegister = async (reqbody) => {
    return await commonApi('POST', `${baseurl}/flashusers/fictionregister`, reqbody, "")

}

/* flash Fiction login  Api */
export const loginFlashFiction = async (reqbody) => {
    return await commonApi("POST", `${baseurl}/flashusers/fictionlogin`, reqbody, "")
}

/* flash Fition POSt Api */

export const flashStoriesApi = async (reqbody, header) => {
    return await commonApi("POST", `${baseurl}/flashusers/stories`, reqbody, header)
}

/* flash Fition GET Api */

export const getAllFlashFiction = async () => {
    return await commonApi("GET", `${baseurl}/flashusers/getstories`)

}

/*getSpecificFlashFiction user Specified Fictions  */
export const getSpecificFlashFiction = async (header) => {
    return await commonApi("GET", `${baseurl}/flashusers/getuserstories`, "", header)

}

/* to Update the flash fiction */
export const editFlashFictionAPI = async (flashId, reqbody, header) => {
    return await commonApi("PUT", `${baseurl}/flashusers/editstories/${flashId}`, reqbody, header)

}

/* to delete FlashFiction */

export const deleteFlashFiction = async (flashId, header) => {
    return await commonApi("DELETE", `${baseurl}/flashusers/deletestories/${flashId}`, {}, header)

}


/* to edit the  profile details */
export const editprofileFictionAPI = async ( reqbody, header) => {
    return await commonApi("PUT", `${baseurl}/flashusers/profile`, reqbody, header)

}