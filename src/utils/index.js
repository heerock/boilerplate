import moment from 'moment';

class Utils {

	/**
	 * Get first character from first & last sentences of a username
	 * @param {String} name - Username
	 * @return {String} 2 characters string
	 */

	static isGlobalType(key) {
		const prefix = key.substring(0, 2);
		const API_TYPE = ['KL', 'BG', 'SC', 'HG'];

		if (API_TYPE.includes(prefix)) {
			return true;
		}

		return false;
	}

	static getFuelTypeChange(type) {
		switch (type) {
			case 1:
				return '휘발유';
			case 2:
				return '경유';
			case 3:
				return '전기';
			case 4:
				return '하이브리드';
			default:
				return '';
		}
	}
	static getCdwTypeChange(type) {
		switch (type) {
			case '0':
				return '자차';
			case '1':
				return '일반자차';
			case '2':
				return '고급자차';
			case '3':
				return '슈퍼자차';
			default:
				return type;
		}
	}

	static getNameInitial(name) {
		let initials = name.match(/\b\w/g) || [];
		return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
	}

	static getDateTimeKr(date) {
		return moment(date).add(9, 'hours').format('YYYY-MM-DD HH:mm:ss')
	}

	static getDateFormat(date) {
		return moment(date).format('YYYY-MM-DD HH:mm:ss')
	}

	static getPaymentType(type) {
		switch (type) {
			case 'TOSS_PAYMENTS_TOSS_PAY':
				return '토스페이'
			case 'TOSS_PAYMENTS_BANK_TRANSFER':
				return '계좌이체'
			case 'TOSS_PAYMENTS_CARD':
				return '카드'
			case 'TOSS_PAYMENTS_BILLING_CARD':
				return '간편카드'
			case 'TOSS_PAYMENTS_KAKAO_PAY':
				return '카카오페이'
			case 'NAVERPAY':
				return '네이버페이'
			default:
				return '기타';
		}
	}

	static getReservationCarStatus(status) {
		switch (status) {
			case 'WAIT_FOR_RESERVE':
			case 'RESERVED':
				return 'BEFORE_CONFIRMED';
			default:
				return status;
		}
	}

	static getReservationSpecialRequestType(type) {
		switch (type) {
			case 'NON_SMOKING_ROOM':
				return '금연 객실';
			case 'SMOKING_ROOM':
				return '흡연 객실';
			case 'LATE_CHECK_IN':
				return '늦은 체크인';
			case 'BED_ONE':
				return '침대 1개';
			case 'BED_TWO':
				return '침대 2개';
			case 'HIGHER_FLOOR':
				return '고층 객실';
			default:
				return '기타'
		}
	}

	/**
	 * Get current path related object from Navigation Tree
	 * @param {Array} navTree - Navigation Tree from directory 'configs/NavigationConfig'
	 * @param {String} path - Location path you looking for e.g '/app/dashboards/analytic'
	 * @return {Object} object that contained the path string
	 */
	static getRouteInfo(navTree, path) {
		if( navTree.path === path ){
		  return navTree;
		}
		let route; 
		for (let p in navTree) {
		  if( navTree.hasOwnProperty(p) && typeof navTree[p] === 'object' ) {
				route = this.getRouteInfo(navTree[p], path);
				if(route){
					return route;
				}
		  }
		}
		return route;
	}	

	/**
	 * Get accessible color contrast
	 * @param {String} hex - Hex color code e.g '#3e82f7'
	 * @return {String} 'dark' or 'light'
	 */
	static getColorContrast(hex){
		const threshold = 130;
		const hRed = hexToR(hex);
		const hGreen = hexToG(hex);
		const hBlue = hexToB(hex);
		function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
		function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
		function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
		function cutHex(h) {return (h.charAt(0) === '#') ? h.substring(1,7):h}
		const cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
		if (cBrightness > threshold){
			return 'dark'
		} else { 
			return 'light'
		}	
	}

	/**
	 * Darken or lighten a hex color 
	 * @param {String} color - Hex color code e.g '#3e82f7'
	 * @param {Number} percent - Percentage -100 to 100, positive for lighten, negative for darken
	 * @return {String} Darken or lighten color 
	 */
	static shadeColor(color, percent) {
		let R = parseInt(color.substring(1,3),16);
		let G = parseInt(color.substring(3,5),16);
		let B = parseInt(color.substring(5,7),16);
		R = parseInt(R * (100 + percent) / 100);
		G = parseInt(G * (100 + percent) / 100);
		B = parseInt(B * (100 + percent) / 100);
		R = (R<255)?R:255;  
		G = (G<255)?G:255;  
		B = (B<255)?B:255;  
		const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16));
		const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16));
		const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16));
		return `#${RR}${GG}${BB}`; 
	}

	/**
	 * Returns either a positive or negative 
	 * @param {Number} number - number value
	 * @param {any} positive - value that return when positive
	 * @param {any} negative - value that return when negative
	 * @return {any} positive or negative value based on param
	 */
	static getSignNum(number, positive, negative) {
		if (number > 0) {
			return positive
		}
		if (number < 0) {
			return negative
		}
		return null
	}

	/**
	 * Returns either ascending or descending value
	 * @param {Object} a - antd Table sorter param a
	 * @param {Object} b - antd Table sorter param b
	 * @param {String} key - object key for compare
	 * @return {any} a value minus b value
	 */
	static antdTableSorter(a, b, key) {
		if(typeof a[key] === 'number' && typeof b[key] === 'number') {
			return a[key] - b[key]
		}

		if(typeof a[key] === 'string' && typeof b[key] === 'string') {
			a = a[key].toLowerCase();
			b = b[key].toLowerCase();
			return a > b ? -1 : b > a ? 1 : 0;
		}
		return
	}

	/**
	 * Filter array of object 
	 * @param {Array} list - array of objects that need to filter
	 * @param {String} key - object key target
	 * @param {any} value  - value that excluded from filter
	 * @return {Array} a value minus b value
	 */
	static filterArray(list, key, value) {
		let data = list
		if(list) {
			data = list.filter(item => item[key] === value)
		}
		return data
	}

	/**
	 * Remove object from array by value
	 * @param {Array} list - array of objects
	 * @param {String} key - object key target
	 * @param {any} value  - target value
	 * @return {Array} Array that removed target object
	 */
	static deleteArrayRow(list, key, value) {
		let data = list
		if(list) {
			data = list.filter(item => item[key] !== value)
		}
		return data
	}

	/**
	 * Wild card search on all property of the object
	 * @param {Number | String} input - any value to search
	 * @param {Array} list - array for search
	 * @return {Array} array of object contained keyword
	 */
	static wildCardSearch(list, input) {
		const searchText = (item) => {
			for (let key in item) {
				if (item[key] == null) {
					continue;
				}
				if (item[key].toString().toUpperCase().indexOf(input.toString().toUpperCase()) !== -1) {
					return true;
				}
			}
		};
		list = list.filter(value => searchText(value));
		return list;
	}

	/**
	 * Get Breakpoint
	 * @param {Object} screens - Grid.useBreakpoint() from antd
	 * @return {Array} array of breakpoint size
	 */
	static getBreakPoint(screens) {
		let breakpoints = []
		for (const key in screens) {
			if (screens.hasOwnProperty(key)) {
				const element = screens[key];
				if (element) {
					breakpoints.push(key)
				}
			}
		}
		return breakpoints
	}
}

export default Utils;
