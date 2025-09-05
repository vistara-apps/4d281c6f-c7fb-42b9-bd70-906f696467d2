# TaskLinkr - Base Mini App

A community-driven platform on Base for finding and completing local tasks. Built with Next.js, OnchainKit, and Tailwind CSS.

## 🚀 Features

- **Local Task Discovery**: Find tasks in your area
- **Base Network Integration**: Powered by Coinbase's OnchainKit
- **Modern UI**: Beautiful, responsive design with Framer Motion animations
- **Wallet Integration**: Connect with Base-compatible wallets
- **Real-time Updates**: Live task feed and notifications

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Blockchain**: Base (Coinbase L2)
- **Wallet Integration**: OnchainKit + Wagmi
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: TanStack Query

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tasklinkr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OnchainKit API key:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Deploy to Other Platforms
The app builds to static files and can be deployed to any hosting platform that supports Node.js or static sites.

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_ONCHAINKIT_API_KEY` | OnchainKit API key for Base integration | Yes |
| `UPSTASH_REDIS_REST_URL` | Redis URL for data storage | Optional |
| `UPSTASH_REDIS_REST_TOKEN` | Redis authentication token | Optional |
| `OPENAI_API_KEY` | OpenAI API key for AI features | Optional |

## 📱 Base Mini App Integration

This app is designed to work as a Base Mini App within the Farcaster ecosystem:

- Uses `@farcaster/miniapp-sdk` for Farcaster integration
- Optimized for mobile viewing
- Base network native transactions
- Social features integration

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run lint:check` - Run ESLint without auto-fix

### Build Notes

- ✅ Build passes successfully with `npm run build`
- ⚠️ You may see a deprecation warning about `@farcaster/frame-sdk` - this is from OnchainKit's dependencies and doesn't affect functionality
- 🚀 Ready for production deployment

### Project Structure

```
app/
├── components/          # React components
├── data/               # Static data and constants
├── types/              # TypeScript type definitions
├── globals.css         # Global styles
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── providers.tsx       # Context providers

public/                 # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the [OnchainKit documentation](https://onchainkit.xyz)
- Visit the [Base developer docs](https://docs.base.org)

---

Built with ❤️ for the Base ecosystem
