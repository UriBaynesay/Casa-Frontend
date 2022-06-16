// import { storageService } from "./async.storage.service";
// import { order_db } from "../data/db";
import { httpService } from "./http.service"

// import { stayService } from "./stay.service";

// const STORAGE_KEY = "ORDERS_STORAGE_KEY";
// _setupForLocalStorage();

const END_POINT = "order"

export const orderService = {
  query,
  saveOrder,
  getById,
  remove,
  getUserOrdersStats,
}

// you can pass in filterBy {userId,hostId,stayId}
async function query(filterBy) {
  return await httpService.get(END_POINT, filterBy)
}

async function getById(orderId) {
  return await httpService.get(`${END_POINT}/${orderId}`)
}

async function remove(orderId) {
  return await httpService.delete(`${END_POINT}/${orderId}`)
}

// to add an order you have to give {stayId,hostId,startDate,endDate}
async function saveOrder(order) {
  if (!order._id) return await httpService.post(END_POINT, order)
  else return await httpService.put(`${END_POINT}/${order._id}`, order)
}

function getUserOrdersStats(orders) {
  const stats = {}
  if (!orders)
    return {
      avgRating: 0,
      totalRevenue: 0,
      ordersStatus: {
        total: 0,
        pending: 0,
        accepted: 0,
        declined: 0,
      },
    }
  stats.avgRating = _getAvgRating(orders)
  stats.totalRevenue = _getTotalRevenue(orders)
  stats.ordersStatus = _getOrdersStatus(orders)
  return stats
}

function _getAvgRating(orders) {
  const sum = orders.reduce((acc, order) => {
    return acc + order.stay.reviewScores.rating
  }, 0)
  return sum / orders.length
}

function _getTotalRevenue(orders) {
  return orders.reduce((acc, order) => {
    if (order.status === "accepted") return acc + order.price
    return acc
  }, 0)
}

function _getOrdersStatus(orders) {
  return orders.reduce(
    (acc, order) => {
      acc["total"]++
      if (order.status === "pending") acc["pending"]++
      else if (order.status === "accepted") acc["accepted"]++
      else if (order.status === "declined") acc["declined"]++
      return acc
    },
    {
      total: 0,
      pending: 0,
      accepted: 0,
      declined: 0,
    }
  )
}
