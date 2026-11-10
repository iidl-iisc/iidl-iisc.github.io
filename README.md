# Professional Academic Website

A modern, professional website designed for academic researchers. This website features a clean, sophisticated design perfect for faculty job applications and showcasing research work.

## Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern Aesthetic**: Professional typography (Crimson Pro + Work Sans) and elegant color scheme
- **Five Main Pages**:
  - Home: Introduction and research highlights
  - Research: Detailed research areas
  - Publications: Academic publications list
  - CV & Contact: Download CV and contact information
  - News: Updates and announcements

## Getting Started

### Quick Start

1. **Personalize Content**: 
   - Replace "Abhijit" with your full name throughout all HTML files
   - Add your professional photo (replace the placeholder in `index.html`)
   - Update your email, phone, and address in `contact.html`
   - Add your actual publications in `publications.html`
   - Update research descriptions with your specific work

2. **Add Your CV**:
   - Create a folder called `files` in the root directory
   - Place your CV PDF as `CV_Abhijit.pdf` in the `files` folder
   - Or update the link in `contact.html` to match your filename

3. **Update Links**:
   - Add your Google Scholar, ResearchGate, ORCID, and LinkedIn URLs in `contact.html`

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` (lines 1-10):

```css
:root {
    --primary-blue: #1a3a52;      /* Main navy blue */
    --secondary-blue: #2d5a7b;    /* Lighter blue */
    --accent-gold: #d4a574;       /* Gold accent */
    --text-dark: #1a1a1a;         /* Primary text */
    --text-gray: #4a4a4a;         /* Secondary text */
    --text-light: #6a6a6a;        /* Tertiary text */
}
```

### Adding Your Photo

Replace the placeholder SVG in `index.html` (around line 40) with:

```html
<div class="profile-image-placeholder">
    <img src="images/your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

Create an `images` folder and add your photo there.

### Updating Publications

In `publications.html`, replace the example publications with your own:

```html
<div class="publication-item">
    <div class="pub-title">Your Paper Title</div>
    <div class="pub-authors">Your Name, Co-Authors</div>
    <div class="pub-venue">Journal Name, Vol. X, pp. XX-XX, Year</div>
</div>
```

### Adding News Updates

In `news.html`, add new items at the top of the news grid:

```html
<div class="news-item">
    <div class="news-date">Month Year</div>
    <h3>Title of Update</h3>
    <p>Description of the news or announcement.</p>
</div>
```

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. **Create a GitHub account** if you don't have one: https://github.com
2. **Create a new repository**:
   - Click the "+" icon → "New repository"
   - Name it: `yourusername.github.io` (replace with your GitHub username)
   - Make it public
   - Don't initialize with README

3. **Upload your files**:
   - Click "uploading an existing file"
   - Drag and drop all website files (index.html, styles.css, etc.)
   - Commit changes

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Click Save

5. **Your website will be live at**: `https://yourusername.github.io`

### Option 2: Netlify (Free, Great Features)

1. Go to https://netlify.com and sign up
2. Drag and drop your website folder onto Netlify
3. Your site goes live immediately with a random URL
4. You can customize the URL or connect a custom domain

### Option 3: Custom Domain

Once your site is live on GitHub Pages or Netlify, you can connect a custom domain:

**For GitHub Pages**:
- Purchase domain from Namecheap, Google Domains, etc.
- Add CNAME record pointing to `yourusername.github.io`
- Add a file named `CNAME` to your repository with your domain name

**For Netlify**:
- Go to Domain Settings in Netlify
- Add your custom domain
- Follow their DNS configuration instructions

## File Structure

```
website/
├── index.html          # Homepage
├── research.html       # Research page
├── publications.html   # Publications page
├── contact.html        # Contact & CV page
├── news.html          # News & updates page
├── styles.css         # All styles
├── script.js          # JavaScript interactions
├── files/             # Create this folder
│   └── CV_Abhijit.pdf # Your CV
└── images/            # Create this folder
    └── your-photo.jpg # Your photo
```

## Maintenance Tips

### Regular Updates

1. **Add new publications** as they're published
2. **Update news section** with recent activities
3. **Keep CV current** - upload new versions regularly
4. **Check all links** periodically to ensure they work

### SEO Best Practices

1. Update page titles in each HTML file's `<title>` tag
2. Add meta descriptions for better search results:
```html
<meta name="description" content="Your description here">
```
3. Use your actual name consistently across all pages

## Troubleshooting

**Problem**: Website looks broken after uploading
- **Solution**: Make sure all files (HTML, CSS, JS) are in the same folder and paths are correct

**Problem**: CV download doesn't work
- **Solution**: Ensure the `files` folder exists and CV filename matches the link in contact.html

**Problem**: Images not showing
- **Solution**: Check image paths and ensure images folder is uploaded

**Problem**: Google Fonts not loading
- **Solution**: Check internet connection; fonts load from Google's CDN

## Browser Compatibility

This website works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

For GitHub Pages: https://docs.github.com/en/pages
For Netlify: https://docs.netlify.com
For HTML/CSS help: https://developer.mozilla.org

## License

This template is free to use for your personal academic website. Feel free to customize it as needed!

---

**Made with attention to detail for academic professionals**
