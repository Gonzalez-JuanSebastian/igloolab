# Sistema de Gestión de Productos Farmacéuticos

Sistema completo de gestión de productos para la industria farmacéutica, que incluye una aplicación web, API RESTful y aplicación móvil.

## 🚀 Características

- **Frontend Web**: Aplicación React con TypeScript y diseño tipo dashboard
- **Backend API**: API RESTful con Node.js, Express y TypeScript
- **Base de Datos**: MySQL con esquema optimizado para productos farmacéuticos
- **Aplicación Móvil**: Versión React Native con datos estáticos (funciona offline)
- **Dashboard**: Panel de control con métricas en tiempo real
- **Gestión Completa**: CRUD completo de productos con validaciones

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js con TypeScript
- Express.js
- Sequelize (ORM)
- MySQL2
- JWT (opcional para autenticación)
- CORS, Helmet, Morgan

### Frontend Web
- React con TypeScript
- Axios para consumo de API
- React Router para navegación
- Lucide React para iconos
- CSS personalizado con diseño responsive

### Aplicación Móvil
- React Native con TypeScript
- React Navigation
- Componentes nativos
- Diseño mobile-first

### Base de Datos
- MySQL
- Esquema optimizado para productos farmacéuticos
- Migraciones con Sequelize

## 📦 Estructura del Proyecto

```
igloolab-product-manager/
├── backend/                 # API RESTful
│   ├── src/
│   │   ├── controllers/     # Lógica de negocio
│   │   ├── models/          # Modelos de datos
│   │   ├── routes/          # Definición de endpoints
│   │   ├── config/          # Configuración de DB
│   │   └── middleware/      # Middlewares personalizados
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # Aplicación web
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── services/        # Servicios API
│   │   ├── types/           # Definiciones TypeScript
│   │   └── styles/          # Estilos CSS
│   ├── package.json
│   └── tsconfig.json
├── mobile/                  # Aplicación móvil
│   ├── src/
│   │   ├── components/      # Componentes React Native
│   │   ├── data/            # Datos estáticos
│   │   └── styles/          # Estilos mobile
│   ├── App.tsx
│   ├── app.json
│   └── package.json
├── database/                # Scripts de base de datos
│   └── schema.sql           # Esquema de la base de datos
└── README.md
```

## ⚙️ Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- MySQL (v8.0 o superior)
- npm o yarn
- Android Studio / Xcode (para la app móvil)

### 1. Clonar el repositorio
```bash
git clone https://github.com/Gonzalez-JuanSebastian/igloolab.git
cd igloolab-product-manager
```

### 2. Configurar la Base de Datos
```bash
# Conectarse a MySQL
mysql -u root -p

# Crear la base de datos
CREATE DATABASE product_management;

# Ejecutar el script SQL
mysql -u root -p product_management < database/schema.sql
```

### 3. Configurar el Backend
```bash
cd backend
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de MySQL
```

**backend/.env**
```
DB_HOST=localhost
DB_NAME=product_management
DB_USER=root
DB_PASSWORD=tu_password
PORT=5000
```

### 4. Configurar el Frontend
```bash
cd ../frontend
npm install
```

### 5. Configurar la Aplicación Móvil (Opcional)
```bash
cd ../mobile
npm install
```

## 🚀 Ejecución

### Backend
```bash
cd backend
npm run dev
```
El servidor estará disponible en http://localhost:5000

### Frontend
```bash
cd frontend
npm start
```
La aplicación estará disponible en http://localhost:3000

### Aplicación Móvil
```bash
cd mobile
# Para Android
npm run android

# Para iOS
npm run ios
```

## 📋 API Endpoints

### Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener un producto por ID
- `POST /api/products` - Crear un nuevo producto
- `PUT /api/products/:id` - Actualizar un producto
- `DELETE /api/products/:id` - Eliminar un producto

### Dashboard
- `GET /api/dashboard/stats` - Obtener estadísticas del sistema

## 🗃️ Estructura de la Base de Datos

La tabla `products` tiene la siguiente estructura:
```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 📱 Funcionalidades

### Aplicación Web
- Dashboard con métricas en tiempo real
- Lista completa de productos
- Formulario de creación/edición de productos
- Eliminación de productos con confirmación
- Diseño responsive tipo panel de administración
- Navegación por secciones (Dashboard, Products, Sales)

### Aplicación Móvil
- Vista de lista de productos
- Búsqueda en tiempo real
- Diseño mobile-friendly
- Funcionamiento offline con datos estáticos
- Interfaz táctil optimizada

## 🔧 Personalización

### Agregar nuevos campos a productos
1. Actualizar el modelo en `backend/src/models/Product.ts`
2. Actualizar la interfaz en `frontend/src/types/Product.ts`
3. Actualizar el controlador en `backend/src/controllers/productController.ts`
4. Actualizar los componentes de formulario en el frontend

### Agregar nuevas secciones al dashboard
1. Crear nuevos endpoints en el backend
2. Actualizar el servicio API en el frontend
3. Crear nuevos componentes para la visualización
4. Agregar navegación en el sidebar

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación anterior
2. Busca en los issues existentes
3. Abre un nuevo issue con detalles del problema

## 📞 Contacto

Para más información, puedes contactar a:
- Juan Montoya - juan.montoya@igloolab.co

---

**Nota**: Este proyecto fue desarrollado como prueba técnica para la posición de Developer Full Stack en Igloolab.