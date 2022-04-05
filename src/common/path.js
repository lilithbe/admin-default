export const mainsite=process.env.REACT_APP_MAIN_SITE_DOMAIN
export const apiUrl=process.env.REACT_APP_API_URL

const post=`${apiUrl}/post`
const auth=`${apiUrl}/auth`
const category=`${apiUrl}/category`
// --------------------------------------------------------------------
export const POST_CREATE=`${post}/create`
export const POST_UPDATE=`${post}/update`
export const POST_DELETE=`${post}/delete`
export const POST_GET_LIST_ALL=`${post}/get-all`
export const POST_GET_LIST_CATEGORY=`${post}/get-category`
export const POST_GET_LIST_SEARCH=`${post}/get-search`
export const POST_GET_ONE=`${post}/get-one`
export const POST_GET_MY_POST=`${post}/get-my-post`

// --------------------------------------------------------------------
export const AUTH_SIGNUP=`${auth}/signup`
export const AUTH_SIGNIN=`${auth}/signin`
export const AUTH_SET_PROFILE=`${auth}/set-profile`
export const AUTH_GET_PROFILE=`${auth}/get-profile`
export const AUTH_ID_CHECK=`${auth}/id-check`
export const AUTH_TOKEN_CHECK = `${auth}/token-check`

// --------------------------------------------------------------------
export const CATEGORY_CREATE=`${category}/create`
export const CATEGORY_DELETE=`${category}/delete`
export const CATEGORY_UPDATE=`${category}/update`