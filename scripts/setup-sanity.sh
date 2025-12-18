#!/bin/bash

# AIOS Sanity Setup Script
# Run this to create a new Sanity project for AIOS

echo "=============================================="
echo "AIOS Sanity Project Setup"
echo "=============================================="
echo ""

# Check if sanity CLI is available
if ! command -v npx &> /dev/null; then
    echo "Error: npx not found. Please install Node.js first."
    exit 1
fi

echo "This script will:"
echo "1. Create a new Sanity project called 'aios-content-hub'"
echo "2. Set up the production dataset"
echo "3. Output the project ID for your .env.local file"
echo ""

read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
fi

# Create the project
echo ""
echo "Creating Sanity project..."
echo ""

npx sanity init \
    --create-project "AIOS Content Hub" \
    --dataset production \
    --project-plan growth \
    --output-path /tmp/sanity-init-output

echo ""
echo "=============================================="
echo "Setup Complete!"
echo "=============================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Copy the Project ID from above"
echo ""
echo "2. Create .env.local in /home/sam/Documents/github-repos/aios:"
echo "   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>"
echo "   NEXT_PUBLIC_SANITY_DATASET=production"
echo ""
echo "3. Create an API token at https://www.sanity.io/manage"
echo "   - Go to your project > API > Tokens"
echo "   - Create a token with 'Editor' permissions"
echo "   - Add it to .env.local as SANITY_API_TOKEN"
echo ""
echo "4. Run the dev server:"
echo "   cd /home/sam/Documents/github-repos/aios"
echo "   npm run dev"
echo ""
echo "5. Visit http://localhost:3000/studio"
echo ""
