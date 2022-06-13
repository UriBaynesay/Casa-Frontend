// import { storageService } from "./async.storage.service";
// import { order_db } from "../data/db";
import { httpService } from "./http.service";

// import { stayService } from "./stay.service";

// const STORAGE_KEY = "ORDERS_STORAGE_KEY";
// _setupForLocalStorage();

const END_POINT="order"

export const orderService = {
  query,
  saveOrder,
  getById,
  remove 
};


// you can pass in filterBy {userId,hostId,stayId}
async function query(filterBy) {
  return await httpService.get(END_POINT,filterBy)

}

async function getById(orderId){
  return await httpService.get(`${END_POINT}/${orderId}`)
}

async function remove(orderId){
  return await httpService.delete(`${END_POINT}/${orderId}`)
}

// to add an order you have to give {stayId,hostId,startDate,endDate}
async function saveOrder(order) {
  if(!order._id) return await httpService.post(END_POINT,order)
  else return await httpService.put(END_POINT,order)
}




