# Logo Size Recommendations for ASTERIK Website
*Generated: August 23, 2025*

## Current Design Analysis

Based on the website's header design and layout, here are the optimal logo sizes for different use cases:

---

## Header Logo Specifications

### **Desktop Header**
- **Container Height**: 64px (h-16)
- **Recommended Logo Height**: 32-40px
- **Recommended Logo Width**: 120-160px (for horizontal layouts)
- **Format**: SVG (preferred) or PNG with 2x resolution
- **Positioning**: Left-aligned with 16px left padding

### **Mobile Header**
- **Container Height**: 64px (h-16)
- **Recommended Logo Height**: 28-32px
- **Recommended Logo Width**: 100-130px
- **Consideration**: Must fit alongside mobile menu hamburger button

### **Current Implementation**
The site currently uses text-based logo:
```html
<h1 className="font-bold text-2xl text-navy-blue">ASTERIK</h1>
```
- Font size: 24px (text-2xl)
- Color: Navy blue (#0C2D48)
- Font weight: Bold

---

## Logo Format Recommendations

### **1. Horizontal Logo (Primary)**
**Dimensions**: 150px × 40px
- Best for header placement
- Works well with current 64px header height
- Provides adequate breathing room
- Optimal readability at all screen sizes

### **2. Square/Icon Logo (Secondary)**
**Dimensions**: 40px × 40px
- For mobile favicon
- Social media profile images
- App icons
- Compact header layouts

### **3. Vertical Logo (Alternative)**
**Dimensions**: 80px × 60px
- Footer usage
- Marketing materials
- When more vertical space is available

---

## Technical Specifications

### **File Formats Needed**

**SVG Version** (Primary)
- Scalable vector format
- Small file size
- Perfect for responsive design
- Supports brand colors with CSS variables

**PNG Versions** (Fallback)
- 150×40px (1x resolution)
- 300×80px (2x resolution for retina displays)
- 450×120px (3x resolution for high-DPI displays)

**Favicon Versions**
- 16×16px (ICO format)
- 32×32px (PNG format)
- 180×180px (Apple touch icon)
- 512×512px (PWA manifest)

---

## Color Specifications

### **Primary Brand Colors**
- **Navy Blue**: #0C2D48 (hsl(206, 84%, 17%))
- **White**: #FFFFFF (for dark backgrounds)

### **Secondary Brand Colors**
- **Warm Orange**: #E26A2C (hsl(25, 86%, 58%))
- **Teal Green**: #4FD1C7 (hsl(180, 71%, 55%))

### **Color Variations Needed**
1. **Full Color**: Navy blue with accent colors
2. **Monochrome**: Single color versions
3. **Reverse**: White logo for dark backgrounds
4. **Grayscale**: For print/accessibility

---

## Responsive Breakpoints

### **Desktop (>= 768px)**
- **Logo Height**: 40px
- **Logo Width**: 150px
- **Padding**: 16px left/right

### **Tablet (480px - 767px)**
- **Logo Height**: 36px
- **Logo Width**: 135px
- **Padding**: 12px left/right

### **Mobile (< 480px)**
- **Logo Height**: 32px
- **Logo Width**: 120px
- **Padding**: 8px left/right

---

## Implementation Guidelines

### **CSS Classes for Logo**
```css
.logo-container {
  height: 40px;
  width: auto;
  max-width: 150px;
}

@media (max-width: 767px) {
  .logo-container {
    height: 32px;
    max-width: 120px;
  }
}
```

### **HTML Structure**
```html
<div className="flex-shrink-0">
  <Link href="/">
    <img 
      src="/assets/images/asterik-logo.svg"
      alt="ASTERIK - Strategic Technology Solutions"
      className="logo-container"
      width="150"
      height="40"
    />
  </Link>
</div>
```

---

## Logo Placement Guidelines

### **Clear Space Requirements**
- **Minimum Clear Space**: Half the logo height on all sides
- **Header**: 12px minimum padding from edges
- **Never place logo smaller than 80px width** for readability

### **Alignment Standards**
- **Header**: Left-aligned with consistent padding
- **Footer**: Center-aligned or left-aligned
- **Documents**: Top-left corner with standard margins

### **Background Considerations**
- Ensure sufficient contrast (4.5:1 minimum)
- Test on both light and dark backgrounds
- Provide alternative color versions when needed

---

## Current Brand Consistency

### **Typography Integration**
- Primary font: Montserrat (headings)
- Secondary font: Open Sans (body text)
- Logo should complement existing typography

### **Visual Hierarchy**
- Logo serves as primary brand identifier
- Should not compete with page content
- Maintain consistent sizing across all pages

---

## Recommended Logo Assets

### **Immediate Needs**
1. **Header Logo**: 150×40px SVG/PNG
2. **Mobile Logo**: 120×32px SVG/PNG
3. **Favicon Package**: Multiple sizes (16px to 512px)

### **Future Needs**
1. **Print Logo**: High-resolution (300 DPI)
2. **Marketing Assets**: Various sizes for campaigns
3. **Social Media**: Platform-specific dimensions

---

## Quality Standards

### **Resolution Requirements**
- **Web**: 72-96 DPI
- **Print**: 300 DPI minimum
- **Vector**: Scalable SVG format preferred

### **File Size Optimization**
- **SVG**: < 10KB optimized
- **PNG**: < 50KB per version
- **Favicon ICO**: < 20KB

The recommended logo size for your header is **150×40 pixels** for desktop and **120×32 pixels** for mobile, delivered as SVG format for optimal scalability and performance.