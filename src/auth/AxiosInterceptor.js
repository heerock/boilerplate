import axios from 'axios'
import { notification } from 'antd';
import cookie from "react-cookies";
import { ADMIN_HOST, HOTEL_HOST } from '../configs/HostConfig';

const service = axios.create({
  baseURL: HOTEL_HOST,
  timeout: 10000
})

// Config
const ENTRY_ROUTE = '/auth/login'
const TOKEN_PAYLOAD_KEY = 'Authorization'
const PUBLIC_REQUEST_KEY = 'public-request'

// API Request interceptor
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
	
  if (token) {
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${token}`
  }

  if (!token && !config.headers[PUBLIC_REQUEST_KEY]) {
	window.location.href = `${ADMIN_HOST}/adminmanage/Login`;
  }

  // config.withCredentials = true;

  return config
}, error => {
	notification.error({
		message: 'Error'
	})
  Promise.reject(error)
})

// API respone interceptor
service.interceptors.response.use( (response) => {
	return response.data
}, (error) => {

	let notificationParam = {
		message: ''
	}
	
	// Remove token and redirect 
	if (error.response.status === 400 || error.response.status === 403) {
		notificationParam.message = 'Authentication Fail'
		notificationParam.description = 'Please login again'
	}

	if (error.response.status === 404) {
		notificationParam.message = 'Not Found'
	}

	if (error.response.status === 500) {
		notificationParam.message = 'Internal Server Error'
	}
	
	if (error.response.status === 508) {
		notificationParam.message = 'Time Out'
	}

	notification.error(notificationParam)

	return Promise.reject(error);
});

export default service
