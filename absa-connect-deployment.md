# ABSA Connect Deployment Guide

This guide provides instructions for setting up a new GitHub repository and deploying the ABSA Connect website.

## Creating a New GitHub Repository

1. Go to GitHub and create a new repository named `absa-connect`
   - Visit: https://github.com/new
   - Repository name: `absa-connect`
   - Description: "ABSA Connect - Premium Internet Service Provider"
   - Choose "Private" repository
   - Click "Create repository"

2. Initialize the repository with the current codebase
   ```bash
   # Create a new directory for the ABSA Connect project
   mkdir -p ~/absa-connect-project
   
   # Copy all files from the current project to the new directory
   # (excluding .git directory to avoid any connection to the original repo)
   cp -r ./* ~/absa-connect-project/
   cp -r ./.* ~/absa-connect-project/ 2>/dev/null || :
   rm -rf ~/absa-connect-project/.git
   
   # Navigate to the new directory
   cd ~/absa-connect-project
   
   # Initialize a new git repository
   git init
   
   # Add all files to the repository
   git add .
   
   # Commit the files
   git commit -m "Initial commit for ABSA Connect"
   
   # Add the remote repository
   git remote add origin https://github.com/Apextech-sys/absa-connect.git
   
   # Push to the repository
   git push -u origin main
   ```

## Deploying to Vercel

1. Log in to Vercel (https://vercel.com)

2. Click "Add New..." and select "Project"

3. Import the `absa-connect` repository

4. Configure the project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Add environment variables if needed

6. Click "Deploy"

## Updating the Website

After making changes to the codebase:

```bash
# Navigate to the ABSA Connect project directory
cd ~/absa-connect-project

# Add all changes
git add .

# Commit the changes
git commit -m "Update description here"

# Push to GitHub
git push origin main
```

Vercel will automatically deploy the changes when you push to the main branch.