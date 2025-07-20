# 📜 Certificate Setup Guide

This guide will help you add your certificates and achievement images to your portfolio.

## 📁 File Structure

Your certificates and images should be organized as follows:

```
public/
├── certificates/          # Your certificate PDFs
│   ├── sih-2023.pdf
│   ├── tss-winner.pdf
│   ├── web-dev-cert.pdf
│   └── ...
└── achievements/          # Your achievement images
    ├── sih-2023.jpg
    ├── tss-winner.jpg
    ├── web-dev-cert.jpg
    └── ...
```

## 🎯 Step-by-Step Instructions

### Step 1: Add Your Certificate Files

1. **Copy your certificate PDFs** to `public/certificates/`
   - Supported formats: `.pdf` (recommended), `.jpg`, `.png`
   - Use descriptive names: `certificate-name.pdf`
   - Examples:
     - `smart-india-hackathon-2023.pdf`
     - `web-development-certification.pdf`
     - `blockchain-course-certificate.pdf`

2. **Add achievement images** to `public/achievements/`
   - These can be:
     - Photos of you receiving awards
     - Event pictures
     - Certificate preview images
     - Achievement badges
   - Supported formats: `.jpg`, `.png`, `.jpeg`
   - Use the same base name as your certificate

### Step 2: Update the Achievements Data

Edit `client/components/AchievementsSection.tsx` and modify the `achievements` array:

```typescript
const achievements: Achievement[] = [
  {
    id: "1",
    title: "Your Certificate Title",
    description: "Detailed description of what you achieved and learned.",
    category: "Certification", // or "Hackathon", "Competition", "Academic"
    date: "2023",
    image: "/achievements/your-image.jpg",
    certificate: "/certificates/your-certificate.pdf",
    icon: Trophy, // or Award, Medal
  },
  // Add more achievements...
];
```

### Step 3: Customize Achievement Details

For each achievement, update:

- **`title`**: The name of your certificate/achievement
- **`description`**: What you learned or accomplished
- **`category`**: Choose from:
  - `"Certification"` - Online courses, professional certifications
  - `"Hackathon"` - Coding competitions
  - `"Competition"` - Academic or professional competitions
  - `"Academic"` - University awards, academic excellence
- **`date`**: When you received the certificate
- **`image`**: Path to your achievement image
- **`certificate`**: Path to your certificate PDF
- **`icon`**: Visual icon (Trophy, Award, or Medal)

## 🎨 Available Icons

You can use these icons from Lucide React:
- `Trophy` - For major achievements
- `Award` - For certifications and awards
- `Medal` - For competitions and excellence

## 📝 Example Customization

Here's how to customize with your real certificates:

```typescript
{
  id: "1",
  title: "React Developer Certification",
  description: "Completed comprehensive React.js course covering hooks, context, and modern React patterns. Built multiple projects including a full-stack e-commerce application.",
  category: "Certification",
  date: "2024",
  image: "/achievements/react-cert.jpg",
  certificate: "/certificates/react-developer-cert.pdf",
  icon: Award,
},
{
  id: "2",
  title: "Google Cloud Platform Certification",
  description: "Achieved Google Cloud Professional Developer certification. Demonstrated expertise in cloud architecture, deployment, and management.",
  category: "Certification",
  date: "2024",
  image: "/achievements/gcp-cert.jpg",
  certificate: "/certificates/gcp-professional-developer.pdf",
  icon: Trophy,
},
```

## 🔧 Tips for Best Results

### Image Guidelines:
- **Achievement images**: 400x300px or larger
- **Format**: JPG or PNG
- **Quality**: High resolution, clear images
- **Content**: Photos of you, event pictures, or certificate previews

### Certificate Guidelines:
- **Format**: PDF (recommended for professional appearance)
- **Naming**: Use descriptive, lowercase names with hyphens
- **Size**: Keep under 10MB for fast loading

### Content Guidelines:
- **Descriptions**: Be specific about what you learned or accomplished
- **Categories**: Use consistent categorization
- **Dates**: Use the year you received the certificate

## 🚀 Testing Your Setup

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the Achievements section** on your portfolio

3. **Test the functionality**:
   - Click "View" to see the modal
   - Click "Cert" to download/open the certificate
   - Verify images display correctly

## 🐛 Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images are in the `public/achievements/` folder
- Verify file extensions match exactly

### Certificates not downloading?
- Check file paths are correct
- Ensure PDFs are in the `public/certificates/` folder
- Verify file names match exactly

### Modal not working?
- Check browser console for errors
- Ensure all imports are correct
- Verify the component is properly imported in `Index.tsx`

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all file paths are correct
3. Ensure files are in the correct directories
4. Restart your development server

Your achievements section is now ready to showcase your certificates and accomplishments! 