import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_GET_BLOG");
  }
}
const getItems = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_GET_BLOGS");
  }
}
const updateItem = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_UPDATE_BLOG");
  }
}
const postItem = ({ body }: Request, response: Response) => {
  try {
    response.send(body);
  } catch (e) {
    handleHttp(response, "ERROR_POST_BLOG");
  }
}
const deleteItem = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_DELETE_BLOG");
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }