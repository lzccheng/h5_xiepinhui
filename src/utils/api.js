import * as user from './api_modules/user'
import * as center from './api_modules/center'
export const api = {
  ...user,
  ...center
}

// // GET
// export const getList = (projectId) => { 
//   const url = `${domain}/v1/projects/${projectId}`
//   return GET(url)
// }
// // POST
// export const postList = (projectId) => { 
//   const url = `${domain}/v1/projects/${projectId}`
//   return POST(url)
// } 
// // DELETE
// export const deleteList = (projectId) => { 
//   const url = `${domain}/v1/projects/${projectId}`
//   return DELETE(url)
// }
// // PUT
// export const putList = (projectId, data) => { 
//   const url = `${domain}/v1/projects/${projectId}`
//   return PUT(url,data)
// }
