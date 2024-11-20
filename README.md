# DevStore - Next.js E-commerce

## 📦 Project Overview

DevStore is a Next.js e-commerce project focused on developer products, featuring modern frontend resources and cart management.

## 🚀 Technologies Used

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **Validation**: Zod
- **Icons**: Lucide React

## ✨ Features

- 🛒 Shopping cart
- 🔍 Product search
- 📱 Responsive layout
- 🖼️ Optimized images
- ⚡ Performance optimization
- 🌐 Dynamic routing

## 🛠️ Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/your-username/devstore.git
```

2. Install dependencies

```bash
cd devstore
npm install
# or
yarn install
```

3. Copy environment file

```bash
cp .env.example .env.local
```

4. Start development server

```bash
npm run dev
# or
yarn dev
```

## 📂 Project Structure

```
src/
├── app/
│ ├── (store)/
│ │ ├── product/
│ │ └── search/
├── components/
├── contexts/
├── data/
└── styles/
```

## 🌟 Key Components

- `Header`: Header with search and cart
- `CartWidget`: Displays cart items
- `SearchForm`: Search form
- `AddToCartButton`: Product add to cart button

## 🔧 Available Scripts

- `dev`: Start development server
- `build`: Compile for production
- `start`: Start production server
- `lint`: Run linter

## 🚀 Deployment

Configured for easy deployment on platforms like Vercel.

## 📝 Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: API base URL
- `APP_URL`: Application URL

## 👥 Contribution

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.
