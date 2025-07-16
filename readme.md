# Resume Builder API

## A backend that:
- Lets users register and login
- Stores resmue data in MongoDB
- Generates .docx resumes using a template
- Optionally converts them to .pdf
- Optionally uses Langchain to generate a cover letter or summary

## Libaries I will use:
- passport -> User auth (register/login)
- mongoose -> MongoDB interaction
- docxtemplater or docx-templates -> Generate .docx resume
- libreoffice-convert -> Convert .docx to .pdf
- langchain -> AI-generated summary or cover letter
- strapi -> Not used for backend-only, but can be integrated later

# Project structure
resume-api/
├── models/
│   ├── User.js
│   └── Resume.js
├── routes/
│   ├── auth.js
│   └── resume.js
├── services/
│   ├── generateDocx.js
│   └── convertToPdf.js
├── templates/
│   └── resume-template.docx
├── config/
│   └── passport.js
├── .env
├── server.js
├── package.json

## Features

### Auth (Passport + Mongoose)
- POST /register -> Register a new user
- POST /login -> Login user, return JWT or session

### Resume Management
- POST /resume -> Submit resume data (name, skills, etc)
- GET /resume/:id/docx -> Download generated .docx
- GET /resume/:id/pdf -> Download converted .pdf

### Optional - AI Enhancement with Langchain

