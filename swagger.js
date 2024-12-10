import swaggerJsDoc from 'swagger-jsdoc';

// Настройки Swagger
const swaggerOptions = {
	definition: {
		openapi: '3.0.0', // Версия OpenAPI
		info: {
			title: 'API Documentation', // Название API
			version: '1.0.0', // Версия API
			description: 'Документация для моего сервера',
		},
		servers: [
			{
				url: 'https://bilal-backend.onrender.com/', // Адрес сервера
				description: 'Локальный сервер',
			},
		],
	},
	// Пути к файлам с аннотациями
	apis: ['./routes/*.js'], // Укажите путь к вашим файлам с описанием API
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
