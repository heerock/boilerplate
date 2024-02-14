const getEnv = () => {
	switch (process.env.REACT_APP_NODE_ENV) {
		case 'development':
			return 'dev'
		case 'production':
			return 'prod'
		case 'test':
			return 'test'
		default:
			return 'dev'
	}
}

export const env = getEnv()
