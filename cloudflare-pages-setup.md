# Setting Up ABSA Connect on Cloudflare Pages

This guide will walk you through the process of deploying the ABSA Connect website to Cloudflare Pages.

## Prerequisites
- A Cloudflare account
- Access to the GitHub repository (https://github.com/Apextech-sys/absa-connect)

## Step 1: Log in to Cloudflare Dashboard
1. Go to https://dash.cloudflare.com/
2. Log in with your Cloudflare account credentials

## Step 2: Create a New Pages Project
1. In the Cloudflare dashboard, click on "Pages" in the left sidebar
2. Click on "Create a project"
3. Select "Connect to Git"

## Step 3: Connect to GitHub Repository
1. Click on "Connect GitHub" if you haven't connected your GitHub account yet
2. Authorize Cloudflare to access your GitHub repositories
3. Search for and select the "absa-connect" repository
4. Click "Begin setup"

## Step 4: Configure Build Settings
1. Set the project name to "absa-connect"
2. Set the Production branch to "master"
3. Configure the build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: (leave blank)
   - Environment variables: (none required for basic setup)

## Step 5: Advanced Build Settings (Optional)
1. Expand "Environment variables" if you need to add any custom variables
2. Expand "Build configurations" if you need to customize the Node.js version
   - Recommended: Set Node.js version to 18.x or higher

## Step 6: Deploy the Site
1. Click "Save and Deploy"
2. Wait for the build and deployment process to complete
3. Once deployed, Cloudflare will provide a URL for your site (e.g., https://absa-connect.pages.dev)

## Step 7: Configure Custom Domain (Optional)
1. In the Pages project, go to the "Custom domains" tab
2. Click "Set up a custom domain"
3. Enter your domain (e.g., absaconnect.co.za)
4. Follow the instructions to verify domain ownership and set up DNS records

## Step 8: Additional Settings
1. **Analytics**: Enable Cloudflare Analytics for your Pages project
2. **Functions**: Set up Cloudflare Functions if you need serverless functionality
3. **Caching**: Configure caching settings for optimal performance

## Continuous Deployment
Cloudflare Pages will automatically deploy new versions of your site whenever you push changes to the master branch of your GitHub repository.

## Troubleshooting
If you encounter build errors:
1. Check the build logs in the Cloudflare Pages dashboard
2. Ensure all dependencies are correctly specified in package.json
3. Verify that the build command and output directory are correctly configured
4. Check for any environment variables that might be required

## Monitoring and Management
- Monitor site performance and analytics through the Cloudflare dashboard
- Set up notifications for deployment success/failure
- Configure additional security settings as needed