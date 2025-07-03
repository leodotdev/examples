#!/bin/bash

echo "Installing Sanity.io dependencies with pnpm..."

# Install core Sanity packages
pnpm add next-sanity@^9.4.3
pnpm add sanity@^3.37.2
pnpm add @sanity/client@^6.15.7
pnpm add @sanity/image-url@^1.0.2
pnpm add @sanity/vision@^3.37.2
pnpm add @portabletext/react@^3.0.0
pnpm add groq@^3.37.2

echo "Sanity installation complete!"
echo ""
echo "Next steps:"
echo "1. Run: pnpm dev"
echo "2. Visit: http://localhost:3000/studio"
echo "3. Login with your Sanity account"
echo "4. Start creating content!"